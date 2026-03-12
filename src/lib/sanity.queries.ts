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
