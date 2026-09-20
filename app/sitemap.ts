import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ncr-chimney-service.vercel.app'
  return [
    { url: base, lastModified: new Date() },
    { url: base + '/faber-chimney-service-jaypee-greens-greater-noida', lastModified: new Date() },
    { url: base + '/faber-chimney-service-vaishali-sector-5-ghaziabad', lastModified: new Date() },
    { url: base + '/glen-chimney-service-indirapuram-ghaziabad', lastModified: new Date() },
    { url: base + '/kaff-chimney-service-sector-150-noida', lastModified: new Date() },
    { url: base + '/jaypee-greens', lastModified: new Date() },
    { url: base + '/vaishali', lastModified: new Date() },
  ]
}
