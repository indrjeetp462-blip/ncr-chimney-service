import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ncr-chimney-service.vercel.app'

  const slugs = [
    "faber-jaypee-greens",
    "faber-sector-150",
    "faber-wishtown-128",
    "faber-indirapuram",
    "faber-vaishali-sec-5",
    "faber-raj-nagar",
    "glen-jaypee-greens",
    "glen-sector-150",
    "glen-wishtown-128",
    "glen-indirapuram",
    "glen-vaishali-sec-5",
    "glen-raj-nagar",
    "hafele-jaypee-greens",
    "hafele-sector-150",
    "hafele-wishtown-128",
    "hafele-indirapuram",
    "hafele-vaishali-sec-5",
    "hafele-raj-nagar",
    "kaff-jaypee-greens",
    "kaff-sector-150",
    "kaff-wishtown-128",
    "kaff-indirapuram",
    "kaff-vaishali-sec-5",
    "kaff-raj-nagar",
    "siemens-jaypee-greens",
    "siemens-sector-150",
    "siemens-wishtown-128",
    "siemens-indirapuram",
    "siemens-vaishali-sec-5",
    "siemens-raj-nagar",
  ];

  return [
    { url: base, lastModified: new Date() },
    ...slugs.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: new Date(),
    })),
  ]
}
