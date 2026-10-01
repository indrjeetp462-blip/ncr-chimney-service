"use client"
import { useState, useEffect, useRef } from "react"

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug || "";
  const phone = "8796284796";
  const formRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tab, setTab] = useState("Service");
  const [showCallPopup, setShowCallPopup] = useState(false);

  // Form states
  const [name, setName] = useState(""); const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState(""); const [pincode, setPincode] = useState("");
  const [need, setNeed] = useState("Deep Cleaning");

  const titleLines = [
    "Deep Service & Cleaning",
    "Noise Problem Repair",
    "Not Working? 45 Min Fix",
    "Suction Low? We Restore",
    "Motor & PCB Repair"
  ];

  const slides = [
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
  ];

  const areaInfo: any = {
    "jaypee-greens-greater-noida": { name: "Jaypee Greens Greater Noida", pin: "201310", map: "Jaypee Greens Greater Noida" },
    "sector-150-noida": { name: "Sector 150 Noida", pin: "201310", map: "Sector 150 Noida" },
    "jaypee-wishtown-sector-128-noida": { name: "Jaypee Wishtown Sector 128 Noida", pin: "201304", map: "Jaypee Wishtown Noida" },
    "indirapuram-ghaziabad": { name: "Indirapuram Ghaziabad", pin: "201014", map: "Indirapuram Ghaziabad" },
    "vaishali-sector-5-ghaziabad": { name: "Vaishali Sector 5 Ghaziabad", pin: "201010", map: "Vaishali Ghaziabad" },
    "raj-nagar-ghaziabad": { name: "Raj Nagar Ghaziabad", pin: "201002", map: "Raj Nagar Ghaziabad" },
  };

  const getData = () => {
    const brandRaw = slug.split("-")[0] || "kaff";
    const brand = brandRaw.charAt(0).toUpperCase() + brandRaw.slice(1).toLowerCase();
    let areaKey = slug.replace(brandRaw + "-", "");
    if (!areaInfo[areaKey]) areaKey = "raj-nagar-ghaziabad";
    return { brand, area: areaInfo[areaKey] };
  };
  const { brand, area } = getData();

  useEffect(() => {
    document.title = `${brand} Chimney Service in ${area.name} - 30 Min Visit`;
    const interval = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 2500);
    const popupTimer = setTimeout(() => setShowCallPopup(true), 6000);

    // Auto scroll hint - thoda upar niche
    setTimeout(() => { window.scrollBy({ top: 120, behavior: 'smooth' }); setTimeout(() => { window.scrollBy({ top: -80, behavior: 'smooth' }); }, 900); }, 2000);

    return () => { clearInterval(interval); clearTimeout(popupTimer); };
  }, [brand, area.name]);

  const services: any = {
    Service: [
      { name: "Deep Cleaning", price: "₹499", time: "75 mins", rating: "4.6 (59)" },
      { name: "Basic Service", price: "₹299", time: "60 mins", rating: "4.5 (70)" },
    ],
    Repair: [
      { name: "Check-up & Diagnosis", price: "₹199", time: "45 mins", rating: "4.5 (75)" },
      { name: "Motor & PCB Repair", price: "₹399", time: "60 mins", rating: "4.7 (82)" },
    ],
    Installation: [
      { name: "Installation & Ducting", price: "₹699", time: "90 mins", rating: "4.6 (67)" },
    ]
  };

  const waLink = `https://wa.me/91${phone}?text=Hi,%20I%20need%20${brand}%20Chimney%20${need}%20in%20${area.name}%0AName:%20${name}%0AMobile:%20${mobile}%0AAddress:%20${address}%0APincode:%20${pincode}%0AService:%20${need}%20for%20${brand}%20in%20${area.name}`;

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        body{margin:0; background:#f7f7f7; font-family:system-ui} *{box-sizing:border-box}
        @keyframes shake{0%,100%{transform:rotate(0) scale(1)}25%{transform:rotate(-3deg) scale(1.05)}75%{transform:rotate(3deg) scale(1.05)}}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
      `}</style>

      <div style={{ maxWidth: 800, margin: '0 auto', background: '#fff', minHeight: '100vh', paddingBottom: 100 }}>

        {/* HEADER - PROFESSIONAL CALL NOW */}
        <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: '#fff', zIndex: 20, borderBottom: '1px solid #eee' }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 26 }}><span style={{ color: '#e11d48' }}>{brand.toUpperCase()}</span> SERVICE</div>
            <div style={{ fontSize: 11, fontWeight: 800, color: '#666' }}>NOIDA & GHAZIABAD ONLY • 45 MIN ARRIVAL</div>
          </div>
          <a href={`tel:${phone}`} style={{ background: 'radial-gradient(circle at 30% 30%, #ff3b5c, #e11d48)', color: '#fff', width: 68, height: 68, borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontWeight: 900, fontSize: 13, boxShadow: '0 8px 25px rgba(225,29,72,0.5)', animation: 'shake 1.5s infinite', lineHeight: 1.1 }}>Call<br/>Now</a>
        </div>

        {/* HERO - BLUR BG + TITLE CENTER + TITLE CHANGES WITH PHOTO */}
        <div style={{ position: 'relative', height: 420, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={slides[currentSlide]} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(12px) brightness(0.5)', transform: 'scale(1.2)', transition: '0.8s' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.65))' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '20px', textAlign: 'left', width: '100%' }}>
            <h1 style={{ color: '#fff', fontSize: 29, fontWeight: 900, lineHeight: 1.25, margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.8)', minHeight: 140, transition: '0.5s' }}>
              <span style={{ color: '#ff3b5c' }}>{brand}</span> Chimney {titleLines[currentSlide]} in {area.name} - 30 Min Visit | Professional Technician
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18 }}>
              <span style={{ background: '#22c55e', color: '#fff', padding: '8px 14px', borderRadius: 10, fontWeight: 900, fontSize: 14 }}>★ 4.6</span>
              <span style={{ color: '#eee', fontSize: 13.5 }}>335 reviews • Same Day • PIN {area.pin}</span>
            </div>
          </div>
        </div>

        {/* DOTS ONLY - choti photos hide kar di */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '14px 0', background: '#fff' }}>
          {slides.map((_, i) => (<div key={i} style={{ width: currentSlide === i? 24 : 8, height: 8, borderRadius: 10, background: currentSlide === i? '#e11d48' : '#ddd', transition: '0.3s' }} />))}
        </div>

        {/* TABS */}
        <div style={{ display: 'flex', gap: 10, padding: '0 16px 16px', background: '#fff' }}>
          {Object.keys(services).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '12px', borderRadius: 30, border: tab === t? '1px solid #111' : '1px solid #ddd', background: tab === t? '#111' : '#fff', color: tab === t? '#fff' : '#000', fontWeight: 800, fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {/* SERVICE CARDS */}
        <div style={{ padding: '16px', background: '#f6f6f6' }}>
          {services[tab].map((s: any, i: number) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, padding: 16, marginBottom: 14, border: '1px solid #eee', display: 'flex', gap: 14, alignItems: 'center' }}>
              <img src={slides[i]} style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 15 }}>{brand} {s.name}</div>
                <div style={{ fontSize: 11.5, color: '#666', marginTop: 3 }}>★ {s.rating} • {s.time} • {s.price}</div>
                <button onClick={scrollToForm} style={{ marginTop: 10, background: '#111', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: 8, fontWeight: 800, fontSize: 12 }}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* PROFESSIONAL BOOKING FORM - SERVICE CARD KE NICHE */}
        <div ref={formRef} style={{ padding: '24px 16px', background: '#fff', borderTop: '8px solid #f6f6f6' }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, margin: 0 }}>Book {brand} Service in {area.name}</h2>
          <p style={{ fontSize: 12, color: '#666', marginTop: 6 }}>Fill details - Expert will call in 5 mins</p>
          <div style={{ marginTop: 16, background: '#f9f9f9', border: '1px solid #eee', borderRadius: 16, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name *" style={{ padding: '14px 14px', borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
            <input value={mobile} onChange={e=>setMobile(e.target.value)} placeholder="Mobile Number *" style={{ padding: '14px 14px', borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
            <input value={address} onChange={e=>setAddress(e.target.value)} placeholder="Full Address in Raj Nagar" style={{ padding: '14px 14px', borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
            <div style={{ display: 'flex', gap: 10 }}>
              <input value={pincode} onChange={e=>setPincode(e.target.value)} placeholder="Pincode" style={{ flex: 1, padding: '14px 14px', borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
              <select value={need} onChange={e=>setNeed(e.target.value)} style={{ flex: 1.3, padding: '14px 10px', borderRadius: 10, border: '1px solid #ddd', fontSize: 14, fontWeight: 700 }}>
                <option>Deep Cleaning</option><option>Basic Service</option><option>Not Working</option><option>Noise Repair</option><option>Motor Repair</option><option>PCB Repair</option><option>Installation</option>
              </select>
            </div>
            <a href={waLink} target="_blank" style={{ background: 'linear-gradient(135deg,#e11d48,#be123c)', color: '#fff', padding: '16px', borderRadius: 12, textAlign: 'center', textDecoration: 'none', fontWeight: 900, fontSize: 15, boxShadow: '0 8px 20px rgba(225,29,72,0.4)', marginTop: 4 }}>Submit & WhatsApp →</a>
            <div style={{ textAlign: 'center', fontSize: 10, color: '#999' }}>Form will open WhatsApp with all details</div>
          </div>
        </div>

        {/* MAP */}
        <div style={{ padding: '16px' }}>
          <iframe width="100%" height="220" style={{ border: 0, borderRadius: 16 }} loading="lazy" src={`https://maps.google.com/maps?q=${encodeURIComponent(area.map)}&z=14&output=embed`} />
        </div>

        {/* CALL POPUP */}
        {showCallPopup && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100001, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
            <div style={{ background: '#fff', width: '100%', maxWidth: 360, borderRadius: 20, padding: 24, textAlign: 'center', position: 'relative' }}>
              <button onClick={() => setShowCallPopup(false)} style={{ position: 'absolute', top: 10, right: 12, border: 'none', background: '#f3f4f6', borderRadius: 20, width: 28, height: 28 }}>X</button>
              <div style={{ fontSize: 36, animation: 'bounce 1s infinite' }}>🛠️</div>
              <h3 style={{ margin: '10px 0 4px', fontWeight: 900, fontSize: 20 }}>{brand} Expert in {area.name}</h3>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#e11d48', marginTop: 6 }}>{titleLines[currentSlide]} - 45 Min Arrival</div>
              <a href={`tel:${phone}`} style={{ display: 'block', background: '#000', color: '#fff', padding: 14, borderRadius: 30, textDecoration: 'none', fontWeight: 900, marginTop: 18 }}>Call Now Expert</a>
              <button onClick={() => { setShowCallPopup(false); scrollToForm(); }} style={{ display: 'block', width: '100%', background: '#fff', border: '1px solid #ddd', padding: 12, borderRadius: 30, fontWeight: 800, marginTop: 10 }}>Book Online</button>
            </div>
          </div>
        )}

        {/* BOTTOM FIXED */}
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid #ddd', padding: '10px 12px', display: 'flex', gap: 10, maxWidth: 800, margin: '0 auto', zIndex: 30 }}>
          <a href={`tel:${phone}`} style={{ flex: 1, background: '#000', color: '#fff', textAlign: 'center', padding: 14, borderRadius: 12, textDecoration: 'none', fontWeight: 900, animation: 'shake 2s infinite' }}>Call Expert</a>
          <button onClick={scrollToForm} style={{ flex: 1, background: '#e11d48', color: '#fff', textAlign: 'center', padding: 14, borderRadius: 12, border: 'none', fontWeight: 900, boxShadow: '0 6px 16px rgba(225,29,72,0.4)' }}>Book Now</button>
        </div>

      </div>
    </>
  )
}
