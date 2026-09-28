"use client";
import { useState, useEffect } from "react";

function TypeWriter({ text, speed = 40 }: { text: string; speed?: number }) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    setDisplay("");
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplay(text.slice(0, i + 1));
        i++;
      } else clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return <span>{display}<span className="animate-pulse">|</span></span>;
}

const BRANDS = ["faber", "glen", "hafele", "kaff", "siemens"];

const servicesData = [
  { id: "not-work", title: "Chimney Not Working", icon: "⚡", color: "bg-red-500", short: "Power / Motor Dead", longDesc: `If your BRAND chimney is not working, not starting, no display, motor not running. Our expert will visit in 60 mins. We check power, PCB, capacitor, wiring, motor. BRAND chimneys face this due to power fluctuation, carbon, oil blockage. We provide same day repair with 90 days warranty. 10,000+ customers fixed in Noida, Ghaziabad. Original parts. Motor jam, capacitor failure, PCB burn, switch fault fixed. Full dismantle, servicing, bill provided. Book now.` },
  { id: "noise", title: "Chimney Noise Problem", icon: "🔊", color: "bg-blue-600", short: "Loud Sound", longDesc: `BRAND chimney making loud noise, ghar ghar, vibration? Due to bearing damage, blower imbalance, dust, motor jam. We clean blower, fan, motor, duct, replace bearing, oiling. After service silent like new. 5000+ noise complaints fixed. 90 days warranty, 60 mins visit. Filter, oil collector cleaning included.` },
  { id: "deep-clean", title: "Chimney Deep Cleaning", icon: "✨", color: "bg-green-600", short: "Full Grease Removal", longDesc: `Professional BRAND chimney deep cleaning. Remove 100% oil, grease, soot from filters, blower, motor. Suction double. Clean baffle, cassette, charcoal filter, fan. Machine cleaning, eco-friendly. Every 3-4 months needed. Full dismantle, wash, dry, refit. 60 mins doorstep, Rs 499 only. All BRAND models. Bill + warranty. Best service near you.` },
];

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug || "";
  const brandSlug = BRANDS.find(b => slug.startsWith(b)) || "ncr";
  const Brand = brandSlug.charAt(0).toUpperCase() + brandSlug.slice(1);
  const areaRaw = slug.replace(brandSlug, "").replace(/^-/, "").replace(/-/g, " ");
  const Area = areaRaw? areaRaw.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : "Noida";
  const fullTitle = `${Brand} Chimney Service in ${Area}`;
  const [openId, setOpenId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const phone = "8796284796";
  const getMsg = (service: string) => `Hi, I need ${service} for my ${Brand} Chimney in ${Area}. Please send technician in 60 mins.`;

  return (
    <div className="min-h-screen bg-[#f6f6f6] pb-28">
      <div className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="font-black text-lg">{Brand.toUpperCase()} • NCR</div>
        <a href={`tel:${phone}`} className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">Call Expert</a>
      </div>
      <div className="p-4 max-w-xl mx-auto">
        <div className="bg-white rounded-[28px] p-6 shadow-sm">
          <h1 className="text-[32px] font-black leading-[1.1] min-h-[110px]"><TypeWriter text={fullTitle} /></h1>
          <p className="text-gray-500 mt-4 text-[15px]">Expert Repair & Cleaning. 60 Mins Doorstep Service in {Area}.</p>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <button onClick={() => setShowPopup(true)} className="bg-green-600 text-white rounded-full py-4 font-black">CALL NOW</button>
            <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(getMsg("Service"))}`} className="bg-black text-white rounded-full py-4 font-bold text-center">WhatsApp</a>
          </div>
          <button onClick={() => setShowForm(true)} className="w-full mt-3 border-2 border-black rounded-full py-3 font-bold">📅 Book Service Now</button>
        </div>
        {showForm && (
          <div className="bg-white rounded-[24px] p-5 mt-4 shadow-lg border-2 border-yellow-400">
            <div className="flex justify-between"><h3 className="font-black text-lg">Book {Brand} Service</h3><button onClick={()=>setShowForm(false)}>✕</button></div>
            <div className="mt-4 flex flex-col gap-3">
              <input className="border p-3 rounded-xl" placeholder="Your Name" />
              <input className="border p-3 rounded-xl" placeholder="Mobile Number" />
              <input className="border p-3 rounded-xl bg-gray-100" value={Brand} readOnly />
              <input className="border p-3 rounded-xl bg-gray-100" value={Area} readOnly />
              <a href={`tel:${phone}`} className="bg-green-600 text-white rounded-full py-4 font-black text-center">SUBMIT & CALL NOW</a>
            </div>
          </div>
        )}
        <h2 className="font-black text-xl mt-8 mb-3">Our Professional Services</h2>
        <div className="flex flex-col gap-4">
          {servicesData.map(s => (
            <div key={s.id} onClick={() => setOpenId(openId === s.id? null : s.id)} className="bg-white rounded-[20px] p-4 shadow-sm border cursor-pointer">
              <div className="flex items-center gap-3">
                <div className={`${s.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl`}>{s.icon}</div>
                <div className="flex-1"><h3 className="font-black">{s.title}</h3><p className="text-xs text-gray-500">{s.short}</p></div>
                <span>{openId === s.id? "▲" : "▼"}</span>
              </div>
              {openId === s.id && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-[13.5px] leading-6 text-gray-700">{s.longDesc.replaceAll("BRAND", Brand)}</p>
                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <a href={`tel:${phone}`} className="bg-green-600 text-white rounded-full py-3 font-black text-center text-sm">CALL NOW</a>
                    <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(getMsg(s.title))}`} className="bg-black text-white rounded-full py-3 font-bold text-center text-sm">WhatsApp Auto</a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-[28px] p-6 w-full max-w-sm">
            <h3 className="font-black text-2xl">Talk to {Brand} Expert</h3>
            <p className="text-gray-500 mt-2 text-sm">Get instant solution in {Area}. 60 Mins visit.</p>
            <div className="flex flex-col gap-3 mt-6">
              <a href={`tel:${phone}`} className="bg-green-600 text-white rounded-full py-4 font-black text-center">CALL NOW</a>
              <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(getMsg("Expert Help"))}`} className="bg-black text-white rounded-full py-4 font-bold text-center">WhatsApp Auto</a>
              <button onClick={() => setShowPopup(false)} className="text-gray-500 py-2 text-sm">Close</button>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex gap-3 max-w-xl mx-auto">
        <a href={`tel:${phone}`} className="flex-1 bg-green-600 text-white rounded-full py-3 font-black text-center text-sm">CALL NOW</a>
        <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(getMsg("Service"))}`} className="flex-1 bg-black text-white rounded-full py-3 font-bold text-center text-sm">WhatsApp</a>
      </div>
      <style>{`@keyframes blink {0%,50%{opacity:1}51%,100%{opacity:0}}.animate-pulse{animation:blink 1s infinite}`}</style>
    </div>
  );
}
