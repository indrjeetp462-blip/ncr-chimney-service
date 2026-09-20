import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ncr-chimney-service.vercel.app'
  const brands = ["faber", "glen", "hafele", "kaff", "siemens"]
  const areas = [
    "jaypee-greens-greater-noida",
    "sector-150-noida",
    "jaypee-wishtown-sector-128-noida",
    "indirapuram-ghaziabad",
    "vaishali-sector-5-ghaziabad",
    "raj-nagar-ghaziabad"
  ]

  const urls: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date() },
  ]

  for (const b of brands) {
    for (const a of areas) {
      urls.push({
        url: `${base}/${b}-chimney-service-${a}`,
        lastModified: new Date(),
      })
    }
  }
  return urls
}
