"use client"
import { useState, useEffect } from "react"

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug || "";
  const phone = "8796284796";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tab, setTab] = useState("Service");

  const slides = [
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800",
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
    const interval = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 3000);
    return () => clearInterval(interval);
  }, [brand, area.name]);

  const services: any = {
    Service: [
      { name: "Deep Cleaning & Suction Restore", price: "₹499", time: "75 mins", rating: "4.6 (59 reviews)", points: ["Complete blower, filter, oil collector cleaning", "Suction power tested with meter", "Kitchen wall degreasing included"] },
      { name: "Basic Cleaning & Filter Service", price: "₹299", time: "60 mins", rating: "4.5 (70 reviews)", points: ["Oil & grease removal", "Baffle & cassette filter wash", "Exterior polish"] },
    ],
    Repair: [
      { name: "Check-up & Diagnosis", price: "₹199", time: "45 mins", rating: "4.5 (75 reviews)", points: ["Accurate diagnosis of suction, motor, noise issues", "Visit charges adjustable in final bill"] },
      { name: "Motor, PCB & Noise Repair", price: "₹399", time: "60 mins", rating: "4.7 (82 reviews)", points: ["Motor, capacitor, PCB replacement", "30-day service warranty"] },
    ],
    Installation: [
      { name: "New Installation with Ducting", price: "₹699", time: "90 mins", rating: "4.6 (67 reviews)", points: ["Core cutting & duct installation", "Suction testing"] },
    ]
  };

  return (
    <>
      <style>{`
        body{margin:0; background:#f7f7f7; font-family:system-ui}
        *{box-sizing:border-box}
        @keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}
      `}</style>

      <div style={{ maxWidth: 800, margin: '0 auto', background: '#fff', minHeight: '100vh', paddingBottom: 90 }}>

        {/* HEADER */}
        <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: '#fff', zIndex: 20, borderBottom: '1px solid #eee' }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 26, letterSpacing: -0.5 }}><span style={{ color: '#e11d48' }}>{brand.toUpperCase()}</span> <span style={{ color: '#111' }}>SERVICE</span></div>
            <div style={{ fontSize: 11, fontWeight: 800, color: '#666', letterSpacing: 0.5, marginTop: 2 }}>NOIDA & GHAZIABAD ONLY • 45 MIN ARRIVAL</div>
          </div>
          <a href={`tel:${phone}`} style={{ background: 'linear-gradient(135deg,#e11d48,#be123c)', color: '#fff', padding: '10px 18px', borderRadius: 30, textDecoration: 'none', fontWeight: 900, fontSize: 13, boxShadow: '0 6px 20px rgba(225,29,72,0.4)', animation: 'pulse 2s infinite', textAlign: 'center' }}>Call<br />Now</a>
        </div>

        {/* HERO WITH BLUR BG + TITLE */}
        <div style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
          <img src={slides[currentSlide]} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(8px) brightness(0.6)', transform: 'scale(1.1)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))' }} />
          <div style={{ position: 'absolute', inset: 0, padding: '28px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 900, lineHeight: 1.2, margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              <span style={{ color: '#ff2d55' }}>{brand}</span> Chimney Service & Cleaning in {area.name} - 30 Min Visit | Professional Technician
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14 }}>
              <span style={{ background: '#16a34a', color: '#fff', padding: '6px 12px', borderRadius: 8, fontWeight: 800, fontSize: 14 }}>★ 4.6</span>
              <span style={{ color: '#eee', fontSize: 13 }}>335 reviews • Same Day Service • PIN {area.pin}</span>
            </div>
          </div>
        </div>

        {/* SLIDESHOW DOTS */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, padding: '12px 0', background: '#fff' }}>
          {slides.map((_, i) => (<div key={i} style={{ width: currentSlide === i? 22 : 8, height: 8, borderRadius: 10, background: currentSlide === i? '#e11d48' : '#ddd', transition: '0.3s' }} />))}
        </div>

        {/* SLIDESHOW IMAGES PREVIEW */}
        <div style={{ display: 'flex', gap: 10, padding: '0 16px 20px', overflowX: 'auto' }}>
          {slides.map((img, i) => (
            <img key={i} onClick={() => setCurrentSlide(i)} src={img} style={{ width: 90, height: 70, borderRadius: 12, objectFit: 'cover', border: currentSlide === i? '2px solid #e11d48' : '2px solid #eee', cursor: 'pointer' }} />
          ))}
        </div>

        {/* TABS */}
        <div style={{ display: 'flex', gap: 10, padding: '0 16px 16px' }}>
          {Object.keys(services).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '12px', borderRadius: 30, border: tab === t? '1px solid #111' : '1px solid #ddd', background: tab === t? '#111' : '#fff', color: tab === t? '#fff' : '#000', fontWeight: 800 }}>{t}</button>
          ))}
        </div>

        {/* SERVICE CARDS - BOOK BUTTON BELOW CARD PROFESSIONAL */}
        <div style={{ padding: '0 16px', background: '#f6f6f6', paddingTop: 16, paddingBottom: 16 }}>
          {services[tab].map((s: any, i: number) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', marginBottom: 16, border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ padding: 16, display: 'flex', gap: 14 }}>
                <img src={slides[i % slides.length]} style={{ width: 84, height: 84, borderRadius: 14, objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 16 }}>{brand} {s.name}</div>
                  <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>★ {s.rating} • {s.time} • {area.name} Only • {s.price}</div>
                  <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12.5, color: '#444', lineHeight: 1.6 }}>{s.points.map((p: string, j: number) => <li key={j}>{p}</li>)}</ul>
                </div>
              </div>
              <div style={{ padding: '0 16px 16px' }}>
                <a href={`tel:${phone}`} style={{ display: 'block', background: '#111', color: '#fff', textAlign: 'center', padding: '14px', borderRadius: 12, textDecoration: 'none', fontWeight: 900, fontSize: 14 }}>Book {s.name} in {area.name} →</a>
              </div>
            </div>
          ))}
        </div>

        {/* 500 WORDS CONTENT */}
        <div style={{ padding: '32px 16px', background: '#fff' }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Why Chimney Needs Regular Service in {area.name}?</h2>
          <div style={{ fontSize: 14, color: '#333', lineHeight: 1.8, marginTop: 16 }}>
            <p>A kitchen chimney works 365 days in heavy oil, smoke, and Indian spices. In high-rise societies of {area.name}, lack of ventilation makes chimneys fail faster than normal. Most people ignore cleaning until suction drops to zero. This is wrong.</p>
            <p><b>How does a chimney get damaged?</b><br />
              1. <b>Grease Choke:</b> Oil particles stick inside blower, motor, and filters. After 3-4 months, air flow reduces by 40%. Motor heats and makes noise.<br />
              2. <b>Filter Blockage:</b> Baffle or cassette filters get carbon deposits. Smoke starts coming out instead of going in.<br />
              3. <b>Motor Failure:</b> Continuous running with blocked filters burns capacitor and PCB. You hear loud humming sound.<br />
              4. <b>Duct Blockage:</b> Birds, dust, and grease block outlet duct on terrace. Suction shows on meter but smoke remains in kitchen.<br />
              5. <b>Auto-Clean Failure:</b> Thermal cleaning button stops working due to oil in heating element.</p>
            <p><b>When should you call for service?</b><br />
              - If suction feels low even on full speed<br />
              - If oil drops from filter or body<br />
              - If noise increased or vibration started<br />
              - If auto-clean button not heating<br />
              - If it has been more than 4 months since last deep clean<br />
              Ideal time for a family cooking daily is every 3 to 4 months. For light cooking, every 6 months is enough.</p>
            <p>Our technicians in {area.name} come within 45 minutes with professional degreaser, steam machine, and suction meter. We clean blower, motor housing, oil collector, and test suction before leaving. We use company-grade degreaser that does not damage powder coating. Service is same day with 30-day warranty.</p>
            <p>We are local experts serving only Noida and Ghaziabad - including {area.name}, PIN {area.pin}. No need to wait for company technician for 3-4 days. We keep original spare parts for all major Indian and imported models, including high-end filterless models. Our pricing is transparent and verified by 335+ customers.</p>
            <p><b>Note:</b> We are an independent service provider. We are not the authorized center of {brand}. Brand names are used only for identification of service expertise in {area.name}.</p>
          </div>
        </div>

        {/* MAP */}
        <div style={{ padding: '16px', background: '#fff' }}>
          <h3 style={{ fontSize: 18, fontWeight: 900, margin: '0 0 12px' }}>We Serve in {area.name} - Live Location</h3>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #eee' }}>
            <iframe
              width="100%" height="260"
              style={{ border: 0 }}
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(area.map)}&z=14&output=embed`}
            />
          </div>
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 11, color: '#666' }}>
            <div>📍 {area.name} PIN {area.pin}</div><div>⏱️ 45 Min Arrival</div><div>🛡️ 30 Day Warranty</div><div>👨‍🔧 Expert Technician</div>
          </div>
        </div>

        <div style={{ background: '#fffbe6', border: '1px solid #fde68a', padding: 14, margin: 16, borderRadius: 12, fontSize: 11, color: '#92400e' }}>
          <b>Disclaimer:</b> We are independent. Not authorized center of {brand}. Brand name used for service reference only in {area.name}.
        </div>

        {/* BOTTOM FIXED - ONLY CALL + BOOK */}
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid #ddd', padding: 12, display: 'flex', gap: 12, maxWidth: 800, margin: '0 auto', zIndex: 30 }}>
          <a href={`tel:${phone}`} style={{ flex: 1, background: '#000', color: '#fff', textAlign: 'center', padding: 15, borderRadius: 12, textDecoration: 'none', fontWeight: 900, fontSize: 15 }}>Call Expert</a>
          <a href={`tel:${phone}`} style={{ flex: 1, background: '#e11d48', color: '#fff', textAlign: 'center', padding: 15, borderRadius: 12, textDecoration: 'none', fontWeight: 900, fontSize: 15, boxShadow: '0 6px 16px rgba(225,29,72,0.4)' }}>Book Now</a>
        </div>

      </div>
    </>
  )
}
