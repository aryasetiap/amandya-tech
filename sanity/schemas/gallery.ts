import type { Rule } from 'sanity';

export const galleryType = {
  name: 'gallery',
  title: 'Live Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'filename',
      title: 'Filename (e.g. IMG_8901.JPG)',
      type: 'string',
    },
    {
        name: 'order',
        title: 'Order',
        type: 'number',
        description: 'Order of appearance in dashboard',
    }
  ],
};
