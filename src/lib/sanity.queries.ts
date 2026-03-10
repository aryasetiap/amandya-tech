import { groq } from 'next-sanity';

export const getTestimonialsQuery = groq`
  *[_type == "testimonial"] {
    _id,
    name,
    company,
    content,
    "imageUrl": avatar.asset->url
  }
`;

export const getFaqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer
  }
`;

export const getPricingPackagesQuery = groq`
  *[_type == "pricing"] | order(price asc) {
    _id,
    title,
    price,
    description,
    features,
    isPopular
  }
`;
