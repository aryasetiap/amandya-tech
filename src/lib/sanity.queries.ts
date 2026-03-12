import { groq } from 'next-sanity';

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    company,
    content,
    rating,
    "avatarUrl": avatar.asset->url
  }
`;

export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`;

export const galleryQuery = groq`
  *[_type == "gallery"] | order(order asc) {
    _id,
    "image": image.asset->url,
    filename,
    order
  }
`;

export const pricingQuery = groq`
  *[_type == "pricing"] | order(_createdAt asc) {
    _id,
    "name": title,
    category,
    description,
    prices,
    price,
    features,
    addons,
    isPopular
  }
`;
