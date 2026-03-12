import type { Rule } from 'sanity';

export const testimonialType = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role/Position',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      initialValue: 5,
      validation: (Rule: Rule) => Rule.min(1).max(5),
    },
  ],
};
