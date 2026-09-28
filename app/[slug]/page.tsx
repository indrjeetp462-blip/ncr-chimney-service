"use client";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";

// Typewriter Effect
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
  {
    id: "not-work",
    title: "Chimney Not Working",
    icon: "⚡",
    color: "bg-red-500",
    short: "Power / Motor Dead",
    longDesc: `If your BRAND chimney is completely not working, not starting, no display, no light, button not responding, motor not running, suction zero. This is a major issue. Our expert technician will visit in 60 mins. We check full power supply, switch board, PCB, capacitor, wiring, fuse, motor. BRAND chimneys often face this due to power fluctuation, carbon in motor, oil blockage, loose connection. We provide same day repair with 90 days warranty. We have fixed 10,000+ chimneys in Noida, Ghaziabad, Delhi NCR. We use original spare parts. Common causes: motor jam, capacitor failure, PCB burn, switch fault, thermal overload. Our process: full dismantle, deep check, motor servicing, PCB repair, wiring fix. We clean oil and grease which causes motor jam. We test motor with meter, replace if needed. We provide bill and warranty. Book now for instant fix. Service available 8am-8pm all 7 days. Best price, no hidden charge. Trained and verified staff.`
  },
  {
    id: "noise",
    title: "Chimney Noise Problem",
    icon: "🔊",
    color: "bg-blue-600",
    short: "Loud Sound / Vibration",
    longDesc: `Is your BRAND chimney making loud noise, ghar ghar, tak tak, vibration, heavy sound? This is due to bearing damage, blower imbalance, dust in fan, loose screw, motor jam, oil dry. Our team provides complete solution. We open full chimney, clean blower, fan, motor, duct pipe. We replace bearing, do oiling, tighten all screws. After our service your chimney will be silent like new. Noise comes after 1-2 years due to grease. We have fixed 5000+ noise complaints for BRAND. We use special tools. We check duct loose, motor alignment, fan balancing. We provide 90 days warranty. Same day 60 mins doorstep service. We clean filter, oil collector, motor body. We also provide deep cleaning with noise fix. No extra visit charge. Affordable price. Original parts. Book now and get silent chimney.`
  },
  {
    id: "deep-clean",
    title: "Chimney Deep Cleaning",
    icon: "✨",
    color: "bg-green-600",
    short: "Full Grease Removal",
    longDesc: `Professional BRAND chimney deep cleaning service in your area. We remove 100% oil, grease, soot, dirt from filters, blower, motor, pipe, oil collector. Your suction will be double after cleaning. We clean baffle filter, cassette filter, charcoal filter, fan, motor. We use machine and eco-friendly chemical. Regular cleaning every 3-4 months is must. Our service includes full dismantle, wash, dry, refit. 60 mins doorstep service. 10,000+ happy customers trust us. Same day service, Rs 499 only. We clean all models of BRAND - auto clean, manual, filterless. We provide bill and 30 days warranty on cleaning. Our staff is trained, verified, uniformed. No hidden charge. After cleaning kitchen will be fresh, no smoke, no oil. Book now for deep cleaning. Best service near you. We also do duct cleaning.`
  },
];

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug;
  if (!slug) return notFound();

  const brandSlug = BRANDS.find(b => slug.startsWith(b)) || "ncr";
  const Brand = brandSlug.charAt(0).toUpperCase() + brandSlug.slice(1);
  const areaRaw = slug.replace(brandSlug, "").replace(/^-/, "").replace(/-/g, " ");
  const Area = areaRaw.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const fullTitle = `${Brand} Chimney Service in ${Area}`;

  const [openId, setOpenId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const phone = "8796284796";

  const getMsg = (service: string) => `Hi, I need ${service} for my ${Brand} Chimney in ${Area}. Please send technician in 60 mins. My address: `;

  return (
    <div className="min-h-screen bg-[#f6f6f6] pb-28">
      {/* Header */}
      <div className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="font-black text-lg tracking-wide">{Brand.toUpperCase()} • NCR</div>
        <a href={`tel:${phone}`} className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">Call Expert</a>
      </div>

      <div className="p-4 max-w-xl mx-auto">
        {/* Hero */}
        <div className="bg-white rounded-[28px] p-6 shadow-sm">
          <h1 className="text-[32px] font-black leading-[1.1] min-h-[110px] text-black">
            <TypeWriter text={fullTitle} />
          </h1>
          <p className="text-gray-500 mt-4 text-[15px]">Expert Repair, Deep Cleaning & Installation. 60 Mins Doorstep Service in {Area}.</p>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <button onClick={() => setShowPopup(true)} className="bg-green-600 text-white rounded-full py-4 font-black text-[15px]">CALL NOW</button>
            <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(getMsg("Service"))}`} className="bg-black text-white rounded-full py-4 font-bold text-center text-[15px]">WhatsApp</a>
          </div>
          <button onClick={() => setShowForm(true)} className="w-full mt-3 border-2 border-black rounded-full py-3 font-bold">📅 Book Service Now</button>
          <p className="text-center mt-3 text-[13px]">⭐ 4.8/5 • 10,000+ Customers • 90 Days Warranty</p>
        </div>

        {/* Book Form */}
        {showForm && (
          <div className="bg-white rounded-[24px] p-5 mt-4 shadow-lg border-2 border-yellow-400">
            <div className="flex justify-between"><h3 className="font-black text-lg">Book {Brand} Service</h3><button onClick={()=>setShowForm(false)}>✕</button></div>
            <p className="text-sm text-gray-500">Service in {Area}</p>
            <div className="mt-4 flex flex-col gap-3">
              <input className="border p-3 rounded-xl" placeholder="Your Name" />
              <input className="border p-3 rounded-xl" placeholder="Mobile Number" />
              <input className="border p-3 rounded-xl bg-gray-100" value={Brand + " Chimney"} readOnly />
              <input className="border p-3 rounded-xl bg-gray-100" value={Area} readOnly />
              <select className="border p-3 rounded-xl"><option>Chimney Not Working</option><option>Noise Problem</option><option>Deep Cleaning</option></select>
              <a href={`tel:${phone}`} className="bg-green-600 text-white rounded-full py-4 font-black text-center">SUBMIT & CALL NOW</a>
            </div>
          </div>
        )}

        {/* Service Cards */}
        <h2 className="font-black text-xl mt-8 mb-3">Our Professional Services</h2>
        <div className="flex flex-col gap-4">
          {servicesData.map(s => (
            <div key={s.id} onClick={() => setOpenId(openId === s.id? null : s.id)} className="bg-white rounded-[20px] p-4 shadow-sm border cursor-pointer">
              <div className="flex items-center gap-3">
                <div className={`${s.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl`}>{s.icon}</div>
                <div className="flex-1"><h3 className="font-black">{s.title}</h3><p className="text-xs text-gray-500">{s.short}</p></div>
                <span className="text-gray-400">{openId === s.id? "▲" : "▼"}</span>
              </div>
              {openId === s.id && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-[13.5px] leading-6 text-gray-700">{s.longDesc.replaceAll("BRAND", Brand)}</p>
                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <a href={`tel:${phone}`} className="bg-green-600 text-white rounded-full py-3 font-black text-center text-sm">CALL NOW</a>
                    <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(getMsg(s.title))}`} className="bg-black text-white rounded-full py-3 font-bold text-center text-sm">WhatsApp Auto</a>
                  </div>
                  <p className="text-[10px] text-center text-gray-400 mt-2">Number hide hai, tap karte hi auto message type hoga</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Expert Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-[28px] p-6 w-full max-w-sm animate-in">
            <h3 className="font-black text-2xl">Talk to {Brand} Expert</h3>
            <p className="text-gray-500 mt-2 text-sm">Get instant solution for {Brand} Chimney in {Area}. 60 Mins doorstep visit.</p>
            <div className="flex flex-col gap-3 mt-6">
              <a href={`tel:${phone}`} className="bg-green-600 text-white rounded-full py-4 font-black text-center">CALL NOW - 60 MINS SERVICE</a>
              <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(getMsg("Expert Help"))}`} className="bg-black text-white rounded-full py-4 font-bold text-center">Chat on WhatsApp (Auto Type)</a>
              <button onClick={() => setShowPopup(false)} className="text-gray-500 py-2 text-sm">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Sticky */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex gap-3 max-w-xl mx-auto">
        <a href={`tel:${phone}`} className="flex-1 bg-green-600 text-white rounded-full py-3 font-black text-center text-sm">CALL NOW</a>
        <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(getMsg("Service"))}`} className="flex-1 bg-black text-white rounded-full py-3 font-bold text-center text-sm">WhatsApp</a>
      </div>

      <style>{`@keyframes blink {0%,50%{opacity:1}51%,100%{opacity:0}}.animate-pulse{animation:blink 1s infinite}`}</style>
    </div>
  );
}
