import type { Rule } from 'sanity';

export const priceDetailsType = {
  name: 'priceDetails',
  title: 'Price Details',
  type: 'object',
  fields: [
    { name: 'monthly', title: 'Monthly Price', type: 'number' },
    { name: 'sixMonths', title: '6 Months Price', type: 'number' },
    { name: 'yearly', title: 'Yearly Price', type: 'number' },
  ],
};
