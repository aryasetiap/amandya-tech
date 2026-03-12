import { type SchemaTypeDefinition } from 'sanity'
import { testimonialType } from './schemas/testimonial'
import { faqType } from './schemas/faq'
import { pricingType } from './schemas/pricing'
import { galleryType } from './schemas/gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonialType, faqType, pricingType, galleryType],
}
