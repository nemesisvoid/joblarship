import { defineField, defineType } from 'sanity';

export const opportunities = defineType({
  name: 'opportunities',
  title: 'Opportunities',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Opportunity Title',
      type: 'text',
      description: 'The title of the opportunity',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'type',
      title: 'Opportunity Type',
      type: 'string',
      options: {
        list: [
          { title: 'Scholarship', value: 'scholarship' },
          { title: 'Grant', value: 'grant' },
          { title: 'Fellowship', value: 'fellowship' },
          { title: 'Job', value: 'career' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'careerLevel',
      title: 'Career Opportunity',
      type: 'string',
      options: {
        list: [
          { title: 'Academic', value: 'academic' },
          { title: 'Industry', value: 'industry' },
          { title: 'Others', value: 'others' },
        ],
      },
      hidden: ({ parent }) => parent.type !== 'career',
    }),

    defineField({
      name: 'educationLevel',
      title: 'Education Level',
      type: 'string',
      options: {
        list: [
          { title: 'Undergraduate', value: 'undergraduate' },
          { title: 'Masters', value: 'masters' },
          { title: 'Phd', value: 'phd' },
        ],
      },

      hidden: ({ parent }) => parent.type !== 'scholarship',
      validation: Rule =>
        Rule.custom((value, context) => {
          const type = (context?.parent as { type?: string })?.type;
          if (type === 'scholarship' && !value) {
            return 'Education level is required for scholarships.';
          }
          return true;
        }),
    }),

    defineField({
      name: 'employerName',
      title: 'Name of Company,School, Fellowship, Grant or Organization',
      description: 'The name of Employer, Company, Fellowship, Grant or Organization of Opportunity',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      description: 'The description of the opportunity',
      type: 'text',
      hidden: ({ parent }) => parent.type,
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'funding',
      title: 'Funding Type',
      placeholder: '(eg: fully funded, 250,000 - 500,000)',
      description: 'Type of funds',
      type: 'string',
      validation: Rule =>
        Rule.custom((value, context) => {
          const type = (context?.parent as { type?: string })?.type;
          if (type === 'scholarship' && !value) {
            return 'Funding type is required for scholarships';
          }
          return true;
        }),
      hidden: ({ parent }) => parent.type !== 'scholarship',
    }),

    defineField({
      name: 'salary',
      title: 'Salary Range',
      placeholder: '350,000 - 500,000',
      type: 'string',
      validation: Rule =>
        Rule.custom((value, context) => {
          const type = (context?.parent as { type?: string })?.type;
          if (type === 'academic' && !value) {
            return 'Salary range is required for academic jobs.';
          }
          return true;
        }),
      hidden: ({ parent }) => parent.type !== 'career',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      placeholder: 'Harvard, University',
      description: 'Location of opportunity',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'country',
      title: 'Country',
      placeholder: 'Nigeria, France, UK',
      description: 'Country of opportunity',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'qualification',
      title: 'Qualifications Required',
      description: 'List of minimum qualifications required',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'field',
      title: 'Required Fields of study',
      description: 'List of required fields',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ parent }) => parent.type === 'career',
    }),

    defineField({
      name: 'requirement',
      title: 'Job Requirements',
      description: 'List of requirements',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ parent }) => parent.type !== 'career',
    }),

    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      description: 'Eligibility requirements',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ parent }) => parent.type === 'career',
    }),

    defineField({
      name: 'experience',
      title: 'Job Experience',
      type: 'string',
      placeholder: '3 - 4 years of experience',
      hidden: ({ parent }) => parent.type !== 'career',
    }),

    defineField({
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      placeholder: 'part-time, full-time, contract',
      validation: Rule =>
        Rule.custom((value, context) => {
          const type = (context?.parent as { type?: string })?.type;
          if (type === 'career' && !value) {
            return 'Salary range is required for academic jobs.';
          }
          return true;
        }),
      hidden: ({ parent }) => parent.type !== 'career',
    }),

    defineField({
      name: 'covered',
      title: 'List of what is covered',
      description: 'Location of opportunity',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'skills',
      title: 'Required skills',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ parent }) => parent.type !== 'career',
    }),

    defineField({
      name: 'deadline',
      title: 'Application Deadline',
      description: 'Deadline for applications',
      type: 'datetime',
    }),

    defineField({
      name: 'grantType',
      title: 'Grant Type',
      description: 'Who the grant is for',
      type: 'string',
      options: {
        list: [
          { title: 'NGOs', value: 'ngo' },
          { title: 'Individuals', value: 'individual' },
          { title: 'Organizations', value: 'organization' },
        ],
      },
      hidden: ({ parent }) => parent.type !== 'fellowship',
      validation: Rule =>
        Rule.custom((value, context) => {
          const type = (context?.parent as { type?: string })?.type;
          if (type === 'grant' && !value) {
            return 'Fellowship type is required for fellowships.';
          }
          return true;
        }),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'applicationLink',
      title: 'Application Link',
      description: 'Link to application form',
      type: 'url',
      validation: Rule => Rule.uri({ scheme: ['http', 'https'] }).required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
