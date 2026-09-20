import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ncr-chimney-service.vercel.app'
  const locations = ['jaypee-greens','sector-150','raj-nagar-extension','crossing-republik','indirapuram','vaishali','vasundhara','gaur-city','noida-extension']
  return [
    { url: base, lastModified: new Date() },
    ...locations.map((loc) => ({ url: `${base}/${loc}`, lastModified: new Date() }))
  ]
}
