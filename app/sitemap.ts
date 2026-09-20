import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ncr-chimney-service.vercel.app'
  return [
    { url: base, lastModified: new Date() },
    { url: base + '/jaypee-greens', lastModified: new Date() },
    { url: base + '/sector-150', lastModified: new Date() },
    { url: base + '/raj-nagar-extension', lastModified: new Date() },
    { url: base + '/indirapuram', lastModified: new Date() },
    { url: base + '/vaishali', lastModified: new Date() },
  ]
}
