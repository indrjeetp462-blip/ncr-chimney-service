import { notFound } from "next/navigation";
import CallPopup from "./CallPopup";

const brands = ["faber", "glen", "hafele", "kaff", "siemens"];
const areas = [
  { slug: "jaypee-greens-greater-noida", name: "Jaypee Greens Greater Noida" },
  { slug: "sector-150-noida", name: "Sector 150 Noida" },
  { slug: "jaypee-wishtown-sector-128-noida", name: "Jaypee Wishtown Sector 128 Noida" },
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
  const { slug } = params;
  const parts = slug.split("-chimney-service-");

  let brand = "faber";
  let areaSlug = slug;

  if (parts.length === 2) {
    brand = parts[0];
    areaSlug = parts[1];
  }

  const areaObj = areas.find((a) => a.slug === areaSlug) || areas.find((a) => slug.includes(a.slug)) || areas[0];
  if (!brands.includes(brand)) {
    brand = "faber";
  }

  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);
  const PHONE = "8796284796";

  return (
    <div className="bg-white text-gray-900">
      <header className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-40">
        <div className="font-black text-lg">NCR CHIMNEY SERVICE</div>
        <a href={`tel:${PHONE}`} className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold">Call {PHONE}</a>
      </header>

      <section className="bg-gray-100 p-6 md:p-16">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {brandName} Chimney Service in {areaObj.name}
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Same day {brandName} chimney repair, cleaning & service in {areaObj.name}. Expert technician within 60 mins. Genuine spare parts + 90 days warranty.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`tel:${PHONE}`} className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg">CALL NOW</a>
          <a href={`https://wa.me/91${PHONE}`} className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-bold">WhatsApp</a>
        </div>
        <p className="mt-4 text-sm">⭐ 4.8/5 Rated | 10,000+ Customers | Available 8AM-9PM</p>
      </section>
      <div className="p-6 text-center"><a href="/">Go Home</a></div>
      <CallPopup />
    </div>
  );
}
