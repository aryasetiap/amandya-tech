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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Based on Time', value: 'time' },
          { title: 'Based on Token', value: 'token' },
        ],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'prices',
      title: 'Prices (for Time-based)',
      type: 'priceDetails',
      hidden: ({ document }: { document: any }) => document?.category !== 'time',
    },
    {
      name: 'price',
      title: 'Price (for Token-based)',
      type: 'number',
      hidden: ({ document }: { document: any }) => document?.category !== 'token',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'addons',
      title: 'Supported Add-ons',
      type: 'string',
      description: 'Comma separated list of addons',
    },
    {
      name: 'isPopular',
      title: 'Is Popular',
      type: 'boolean',
      initialValue: false,
    },
  ],
};
