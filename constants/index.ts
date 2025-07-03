import Image1 from '@/public/img-1.jpg';
import Image2 from '@/public/img-2.jpg';
import { Opportunity, OpportunityType } from '@/types';

export const opportunityType = [
  {
    name: 'Career',
  },
  {
    name: 'Scholarship',
  },
  {
    name: 'Grant',
  },
  {
    name: 'Fellowship',
  },
];
export const academicDropdownLinks = [
  {
    name: 'Academics',
    link: '/careers/academics',
  },
  {
    name: 'Industry',
    link: '/careers/industry',
  },
  {
    name: 'Others',
    link: '/careers/others',
  },
];
export const scholarshipDropdownLinks = [
  {
    name: 'Undergraduates',
    link: '/scholarships/undergraduates',
  },
  {
    name: 'Masters',
    link: '/scholarships/masters',
  },
  {
    name: 'PhD',
    link: '/scholarships/phds',
  },
];

export const opportunities: OpportunityType[] = [
  {
    type: Opportunity.Scholarship,
    title: 'Knight Henessy Scholars Program',
    slug: 'account-officer',
    image: Image1.src,
    subCategory: 'Academic',
    location: 'United States',
    deadline: 'August 15, 2025',
    description:
      'The Brian Maxwell Memorial Scholarship is awarded each year to six student-athletes that will be continuing their post-secondary education at a Canadian College or University. Three males and three females.',
    fundingType: 'Fully Funded',
  },
  {
    type: Opportunity.Scholarship,
    title: 'Knight Henessy Scholars Program',
    slug: 'account-officer',
    image: Image1.src,
    subCategory: 'Academic',
    location: 'United States',
    deadline: 'August 15, 2025',
    description: 'Offer grants for graduate students, young professionals and artist to study in the United States',
    fundingType: 'Fully Funded',
  },
  {
    type: Opportunity.Scholarship,
    title: 'Knight Henessy Scholars Program',
    slug: 'knight-hennessy-scholars-program',
    image: Image2.src,
    subCategory: 'Academic',
    location: 'United States',
    deadline: 'August 15, 2025',
    description: 'Offer grants for graduate students, young professionals and artist to study in the United States',
    fundingType: 'Fully Funded',
  },
  {
    type: Opportunity.Fellowship,
    title: 'Knight Henessy Fellowship Program',
    slug: 'knight-hennessy-scholars-program',
    image: Image1.src,
    subCategory: 'Fellowship',
    location: 'United States',
    deadline: 'August 15, 2025',
    description: 'Offer grants for graduate students, young professionals and artist to study in the United States',
    fundingType: 'Fully Funded',
  },
];
export const fellowships = [
  {
    title: 'Colombia University Fellowship',
    deadline: ' December 11, 2025',
    image: Image2.src,
    type: 'Fellowship',
    location: 'United States',
    description: 'A prestigious fellowship for postgraduate students at Colombia University.',
    link: '/colombia-university-fellowship',
    funds: 'Fully Funded',
  },
  {
    title: 'Knight Hennessy Scholars Program',
    deadline: 'August 15, 2025',
    image: Image1.src,
    type: 'Fellowship',
    location: 'United States',
    description: 'A prestigious fellowship for postgraduate students at Stanford University.',
    link: '/knight-hennessy-scholars-program',
    funds: 'Fully Funded',
  },
  {
    title: 'Colombia Foreign Scholarship 2025/2026 for postgraduate study (funded)',
    deadline: ' August 15, 2025',
    image: Image1.src,
    type: 'Fellowship',
    location: 'United States',
    description: 'A prestigious fellowship for postgraduate students at Stanford University.',
    link: '/knight-hennessy-scholars-program',
    funds: 'Fully Funded',
  },
  {
    title: 'Colombia Foreign Scholarship 2025/2026 for postgraduate study (funded)',
    deadline: ' August 15, 2025',
    image: Image1.src,
    type: 'Fellowship',
    location: 'United States',
    description: 'A prestigious fellowship for postgraduate students at Stanford University.',
    link: '/knight-hennessy-scholars-program',
    funds: 'Fully Funded',
  },
];

export const footerSocialLinks = [{}];
