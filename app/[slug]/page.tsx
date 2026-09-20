import { notFound } from "next/navigation";
import CallPopup from "./Callpopup";

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
  if (parts.length!== 2) notFound();

  const brand = parts[0];
  const areaSlug = parts[1];
  const areaObj = areas.find(a => a.slug === areaSlug);
  if (!areaObj ||!brands.includes(brand)) notFound();

  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);
  const PHONE = "8796284796";

  return (
    <div className="bg-white text-gray-900">
      {/* HEADER */}
      <header className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-40">
        <div className="font-black text-lg">NCR CHIMNEY SERVICE</div>
        <a href={`tel:${PHONE}`} className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold">Call {PHONE}</a>
      </header>

      {/* HERO */}
      <section className="bg-gray-100 p-6 md:p-16">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {brandName} Chimney Service in {areaObj.name}
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Same day {brandName} chimney repair, cleaning & service in {areaObj.name}.
          Expert technician within 60 mins. Genuine spare parts + 90 days warranty.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`tel:${PHONE}`} className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg">📞 CALL NOW</a>
          <a href={`https://wa.me/91${PHONE}`} className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-bold text-lg">WhatsApp</a>
        </div>
        <p className="mt-4 text-sm">⭐ 4.8/5 Rated | 10,000+ Customers | Available 8AM-9PM</p>
      </section>

      {/* LONG CONTENT */}
      <section className="p-6 md:p-12 max-w-5xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold">Our {brandName} Chimney Services in {areaObj.name}</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 list-disc pl-5">
            <li>{brandName} Chimney Deep Cleaning & Degreasing</li>
            <li>{brandName} Motor Repair & Service</li>
            <li>{brandName} PCB & Switch Repair</li>
            <li>{brandName} Filter & Carbon Filter Replacement</li>
            <li>{brandName} Installation & Re-installation</li>
            <li>Annual Maintenance Contract (AMC)</li>
          </ul>
        </div>

        <div className="bg-black text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold">Technician Available in {areaObj.name}</h2>
          <p className="mt-2">Call now, 60 mins me service milegi</p>
          <a href={`tel:${PHONE}`} className="inline-block mt-6 bg-yellow-400 text-black px-10 py-4 rounded-full font-black text-xl animate-pulse">
            CALL NOW: {PHONE}
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Why Choose Us for {brandName} in {areaObj.name}?</h2>
          <p className="mt-3 leading-relaxed">
            We are specialized for {brandName} chimney only. Hamare technicians {areaObj.name} ki har society me service dete hain - Jaypee, Supertech, ATS, etc. Same day service, low cost, genuine bill.
          </p>
        </div>
      </section>

      {/* FLOATING CALL */}
      <a href={`tel:${PHONE}`} className="fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl z-50 font-bold">
        📞 Call {PHONE}
      </a>

      {/* POPUP */}
      <CallPopup phone={PHONE} brand={brandName} area={areaObj.name} />
    </div>
  );
}
