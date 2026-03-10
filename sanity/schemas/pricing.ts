import type { Rule } from 'sanity';

export const pricingType = {
  name: 'pricing',
  title: 'Pricing Package',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Monthly Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'isPopular',
      title: 'Is Popular (Decoy)',
      type: 'boolean',
      initialValue: false,
    },
  ],
};
