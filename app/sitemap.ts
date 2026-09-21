import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ncr-chimney-service.vercel.app'
  const brands = ["faber", "glen", "hafele", "kaff", "siemens", "elica", "hindware", "bosch"]
  const areas = [
    "sector-62-noida",
    "sector-18-noida",
    "sector-15-noida",
    "sector-50-noida",
    "sector-150-noida",
    "sector-137-noida",
    "sector-76-noida",
    "sector-78-noida",
    "jaypee-greens-greater-noida",
    "jaypee-wishtown-sector-128-noida",
    "indirapuram-ghaziabad",
    "vaishali-ghaziabad",
    "kaushambi-ghaziabad",
    "crossing-republik-ghaziabad",
    "raj-nagar-ghaziabad",
    "vasundhara-ghaziabad",
    "govindpuram-ghaziabad",
    "shastri-nagar-ghaziabad",
    "kavi-nagar-ghaziabad"
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
