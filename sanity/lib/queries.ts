import { defineQuery } from 'next-sanity';
import { client } from './client';

export const getLatestOpportunities = defineQuery(`*[_type == "opportunities"]`);

export const getOpportunityBySlug = defineQuery(`*[_type == "opportunities" && defined(slug.current) && slug.current == $slug][0]`);

export const getOpportunitiesBySearch = defineQuery(
  `*[_type == "opportunities" && (!defined($localOpportunity) || type == $localOpportunity) && (!defined($localCountry) || country match $localCountry)]`
);

export const getOpportunitiesByGrant = defineQuery(`*[_type == "opportunities" && type == "grant"]`);

export const getOpportunitiesByScholarship = defineQuery(`*[_type == "opportunities" && type == "scholarship"]`);

// pagination

export async function fetchPaginatedOpportunities(page = 1, pageSize = 2, queryType?: string, careerLevel?: string, educationLevel?: string) {
  const start = (page - 1) * pageSize;

  // Construct the base query filter
  let filter = '*[_type == "opportunities"';

  if (queryType) {
    filter += ` && type == "${queryType}"`;
  }

  if (careerLevel) {
    filter += ` && careerLevel == "${careerLevel}"`;
  }
  if (educationLevel) {
    filter += ` && educationLevel == "${educationLevel}"`;
  }
  filter += ']';

  const query = `
    ${filter} | order(_createdAt desc) [${start}...${start + pageSize}] {
      _id,
      title,
      type,
      slug,
      image,
      location,
      country,
      salary,
      jobType,
      deadline,
      description,
      funding
    }
  `;

  const totalCountQuery = `
    count(${filter})
  `;

  const [opportunities, totalCount] = await Promise.all([client.fetch(query), client.fetch(totalCountQuery)]);

  return { opportunities, totalCount };
}

export const loadOpportunities = async (queryType?: 'grant' | 'fellowship', limit?: number, start: number) => {
  let filter = '*[_type == "opportunities"';

  if (queryType) {
    filter += ` && type == "${queryType}"`;
  }

  filter += ']';

  const query = `${filter} | order(_createdAt desc) [${start}${limit ? `...${start + limit}` : ''}]`;

  try {
    const data = await client.fetch(query);
    const totalCountQuery = `count(${filter})`;

    const totalCount = await client.fetch(totalCountQuery);
    return { opportunities: data, totalCount };
  } catch {
    return { data: [], totalCount: 0 };
  }
};
