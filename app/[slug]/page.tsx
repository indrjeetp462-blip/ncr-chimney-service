import { notFound } from "next/navigation";

const brands = ["faber", "glen", "hafele", "kaff", "siemens"];
const areas = [
  { slug: "jaypee-greens-greater-noida", name: "Jaypee Greens Greater Noida" },
  { slug: "sector-150-noida", name: "Sector 150 Noida" },
  { slug: "jaypee-wishtown-sector-128-noida", name: "Jaypee Wishtown Sector 128" },
  { slug: "indirapuram-ghaziabad", name: "Indirapuram Ghaziabad" },
  { slug: "vaishali-sector-5-ghaziabad", name: "Vaishali Sector 5 Ghaziabad" },
  { slug: "raj-nagar-ghaziabad", name: "Raj Nagar Ghaziabad" },
];

export function generateStaticParams() {
  const params = [];
  for (const b of brands) {
    for (const a of areas) {
      params.push({ slug: `${b}-chimney-service-${a.slug}` });
    }
  }
  return params;
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const brand = brands.find(b => slug.startsWith(b));
  const areaObj = areas.find(a => slug.includes(a.slug));
  if (!brand || !areaObj) return notFound();
  const BrandName = brand.charAt(0).toUpperCase() + brand.slice(1);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-4xl font-bold">{BrandName} Chimney Service in {areaObj.name}</h1>
      <p className="mt-4 text-lg">Same day {BrandName} chimney repair & cleaning in {areaObj.name}. Call expert now.</p>
      <div className="mt-6 bg-black text-white p-4 rounded-lg inline-block">
        Call Now: 9876543210
      </div>
      <h2 className="mt-10 text-2xl font-bold">Services in {areaObj.name}</h2>
      <ul className="mt-2 list-disc ml-6">
        <li>{BrandName} Chimney Cleaning</li>
        <li>{BrandName} Chimney Repair</li>
        <li>{BrandName} Filter Replacement</li>
        <li>{BrandName} Installation</li>
      </ul>
    </div>
  );
}
