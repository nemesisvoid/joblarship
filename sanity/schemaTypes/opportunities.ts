import { defineField, defineType } from 'sanity';

export const opportunities = defineType({
  name: 'opportunities',
  title: 'Opportunities',
  type: 'document',
  fields: [
    defineField({
      name: 'opportunity',
      title: 'Opportunity',
      type: 'text',
      description: 'The title of the opportunity',
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
          { title: 'Career', value: 'career' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'dropdown',
      },
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
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'funding',
      title: 'Funding Type',
      placeholder: '(eg: fully funded, 250,000 - 500,000)',
      description: 'Type of funds',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      placeholder: 'Harvard, University',
      description: 'Location of opportunity',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      placeholder: 'Nigeria, France, UK',
      description: 'Country of opportunity',
      type: 'string',
    }),
    defineField({
      name: 'fellowshipType',
      title: 'Fellowship Type',
      description: 'Type of opportunity',
      type: 'string',
      options: {
        list: [
          { title: 'NGOs', value: 'ngo' },
          { title: 'Individuals', value: 'individual' },
          { title: 'Organizations', value: 'organization' },
        ],
      },
      hidden: ({ parent }) => parent.type !== 'fellowship',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'opportunity',
    },
  },
});
