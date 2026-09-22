const areas: any = {
  "jaypee-greens-greater-noida": "Jaypee Greens Greater Noida",
  "sector-150-noida": "Sector 150 Noida",
  "indirapuram-ghaziabad": "Indirapuram Ghaziabad",
  "vaishali-sector-5-ghaziabad": "Vaishali Ghaziabad",
  "jaypee-greens": "Jaypee Greens",
  "vaishali": "Vaishali",
  "sector-150": "Sector 150",
};

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  let brand = "Faber";
  let areaKey = slug;

  if (slug.includes("-chimney-service-")) {
    const p = slug.split("-chimney-service-");
    brand = p[0].charAt(0).toUpperCase() + p[0].slice(1);
    areaKey = p[1];
  }

  const areaName = areas[areaKey] || areaKey.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase());

  return (
    <div className="bg-[#f9f9f9] min-h-screen pb-24">
      <div className="bg-black text-white px-5 py-4 flex justify-between items-center">
        <h1 className="font-black text-[16px] leading-[16px]">NCR CHIMNEY<br/>SERVICE</h1>
        <a href="tel:8796284796" className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">8796284796</a>
      </div>

      <div className="bg-white m-3 rounded-[24px] p-6 border shadow-sm text-center">
        <span className="text-[10px] bg-gray-100 border px-3 py-1 rounded-full">Independent Service • {areaName}</span>
        <h1 className="text-[28px] font-black mt-4 leading-7">{brand} Chimney Service in {areaName}</h1>
        <p className="text-[13px] text-gray-500 mt-3">Same Day Service in {areaName} - Repair, Cleaning, Installation. 60 Mins Technician. 90 Days Warranty.</p>
        <div className="flex gap-3 mt-6">
          <a href="tel:8796284796" className="flex-1 bg-green-600 text-white py-3.5 rounded-full font-bold text-center">CALL NOW</a>
          <a href="https://wa.me/918796284796" className="flex-1 bg-black text-white py-3.5 rounded-full font-bold text-center">WhatsApp</a>
        </div>
        <p className="text-[11px] mt-3">⭐ 4.8/5 | 10,000+ Happy Customers</p>
      </div>

      <div className="grid grid-cols-2 gap-3 px-3 mt-4">
        <div className="bg-white p-4 rounded-2xl border">🧹<br/><b className="text-sm">Deep Cleaning</b></div>
        <div className="bg-white p-4 rounded-2xl border">⚙️<br/><b className="text-sm">Motor Repair</b></div>
        <div className="bg-white p-4 rounded-2xl border">🔄<br/><b className="text-sm">Filter Change</b></div>
        <div className="bg-white p-4 rounded-2xl border">🔧<br/><b className="text-sm">Installation</b></div>
      </div>

      <div className="bg-black text-white m-3 mt-6 rounded-2xl p-5 text-center">
        <p className="text-xs font-bold text-yellow-400">NCR CHIMNEY SERVICE</p>
        <p className="text-[9px] text-[#666] mt-3 leading-[12px]">We are independent service provider not authorized by any brand. {brand} is used for reference only. Service in Noida & Ghaziabad Only.</p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-3 flex gap-3 border-t">
        <a href="tel:8796284796" className="flex-1 bg-green-600 text-white py-3 rounded-full font-bold text-center text-sm">CALL 8796284796</a>
        <a href="https://wa.me/918796284796" className="flex-1 bg-black text-white py-3 rounded-full font-bold text-center text-sm">WhatsApp</a>
      </div>
    </div>
  )
}
