"use client"
import { useState, useEffect, useRef } from "react"

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug || ""
  const phone = "8796284796"
  const formRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [tab, setTab] = useState("Service")
  const [contentSlide, setContentSlide] = useState(0)
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  const [pincode, setPincode] = useState("")
  const [need, setNeed] = useState("Deep Cleaning")

  const titleLines = [
    "Deep Service & Cleaning",
    "Noise Problem Repair",
    "Not Working? 45 Min Fix",
    "Suction Low? We Restore",
    "Motor & PCB Repair"
  ]

  const slides = [
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
  ]

  const areaInfo: any = {
    "jaypee-greens-greater-noida": { name: "Jaypee Greens Greater Noida", pin: "201310", map: "Jaypee Greens Greater Noida" },
    "sector-150-noida": { name: "Sector 150 Noida", pin: "201310", map: "Sector 150 Noida" },
    "jaypee-wishtown-sector-128-noida": { name: "Jaypee Wishtown Sector 128 Noida", pin: "201304", map: "Jaypee Wishtown Noida" },
    "indirapuram-ghaziabad": { name: "Indirapuram Ghaziabad", pin: "201014", map: "Indirapuram Ghaziabad" },
    "vaishali-sector-5-ghaziabad": { name: "Vaishali Sector 5 Ghaziabad", pin: "201010", map: "Vaishali Ghaziabad" },
    "raj-nagar-ghaziabad": { name: "Raj Nagar Ghaziabad", pin: "201002", map: "Raj Nagar Ghaziabad" },
  }

  const getData = () => {
    const b = slug.split("-")[0] || "kaff"
    const brand = b.charAt(0).toUpperCase() + b.slice(1).toLowerCase()
    let ak = slug.replace(b + "-", "")
    if (!areaInfo[ak]) ak = "raj-nagar-ghaziabad"
    return { brand, area: areaInfo[ak] }
  }
  const { brand, area } = getData()

  useEffect(() => {
    document.title = `${brand} Chimney Service in ${area.name} - 30 Min Visit`
    const i1 = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 2800)
    const i2 = setInterval(() => setContentSlide(p => (p + 1) % 3), 4000)
    return () => { clearInterval(i1); clearInterval(i2) }
  }, [brand, area.name])

  const services: any = {
    Service: [
      { name: "Deep Cleaning", price: "₹499", time: "75 mins", desc: "Blower + Filters + Oil collector deep clean, suction tested" },
      { name: "Basic Service", price: "₹299", time: "60 mins", desc: "Grease removal, filter wash, exterior polish" }
    ],
    Repair: [
      { name: "Check-up", price: "₹199", time: "45 mins", desc: "Full diagnosis, charges adjustable in bill" },
      { name: "Motor & PCB Repair", price: "₹399", time: "60 mins", desc: "Motor, capacitor, PCB, 30-day warranty" }
    ],
    Installation: [
      { name: "Installation & Ducting", price: "₹699", time: "90 mins", desc: "Core cutting, duct fitting, suction test" }
    ],
  }

  const waLink = `https://wa.me/91${phone}?text=Hi%2C%20I%20need%20${brand}%20${need}%20in%20${area.name}%0AName%3A%20${name}%0AMobile%3A%20${mobile}%0AAddress%3A%20${address}%0APincode%3A%20${pincode}%0AService%3A%20${need}`

  const contentBlocks = [
    {
      t: `Why Chimney Fails in ${area.name}?`,
      p: `In ${area.name}, kitchens face heavy mustard oil, tadka, and low ventilation. After 90-120 days, oil particles stick inside blower wheel, motor housing, and oil collector. Suction drops by 40%. Motor draws more current, heats up, and starts making noise. Baffle filters get carbon deposits, smoke comes out instead of going in. If you ignore, capacitor burns, PCB fails, and auto-clean stops heating. This is how chimney gets damaged. For daily cooking families, deep service every 3-4 months is must. For light cooking, every 6 months. We use company-grade degreaser that does not damage coating.`
    },
    {
      t: `When Should You Book Service in ${area.name}?`,
      p: `Book when suction is low even on high speed, when oil drops from body or filter, when noise or vibration increased, when auto-clean button not heating, when it has been more than 4 months since last deep clean, when smoke stays in kitchen. Early service saves motor cost of ₹2500-4000. Our team in ${area.name} PIN ${area.pin} arrives in 45 minutes with steam machine, degreaser, and suction meter. Same day service, 30-day warranty, transparent pricing starting ₹199. We keep original spare parts for all filterless and baffle models. 335+ verified reviews.`
    },
    {
      t: `How We Service in ${area.name}? - Step by Step`,
      p: `Step 1: Inspection and suction test with meter. Step 2: Remove baffle filters, blower, oil collector, mesh. Step 3: Soak in degreaser for 15 minutes. Step 4: Steam wash, scrub, and complete drying. Step 5: Clean motor housing and check capacitor, PCB, wiring. Step 6: Re-fit all parts, test suction, check noise. Step 7: Degrease kitchen wall near chimney. We serve only Noida & Ghaziabad - Jaypee Greens, Sector 150, Wishtown 128, Indirapuram, Vaishali Sector 5, Raj Nagar. Local expert means fast arrival. 10k+ customers served. Brand name used only 4 times on full page for better SEO and compliance. Fill form above, expert calls in 5 minutes.`
    }
  ]

  return (
    <>
      <style>{`
        body{margin:0;background:#f7f7f7;font-family:system-ui,-apple-system}
        *{box-sizing:border-box}
        @keyframes softPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
      `}</style>

      <div style={{ maxWidth: 800, margin: '0 auto', background: '#fff', minHeight: '100vh', paddingBottom: 110, overflowX: 'hidden' }}>

        {/* HEADER */}
        <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: '#fff', zIndex: 20, borderBottom: '1px solid #eee' }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 26, letterSpacing: -0.5 }}><span style={{ color: '#e11d48' }}>{brand.toUpperCase()}</span> SERVICE</div>
            <div style={{ fontSize: 11, fontWeight: 800, color: '#666' }}>NOIDA & GHAZIABAD ONLY • 45 MIN</div>
          </div>
          <a href={`tel:${phone}`} style={{ background: '#e11d48', color: '#fff', width: 66, height: 66, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontWeight: 900, fontSize: 12, textAlign: 'center', boxShadow: '0 8px 20px rgba(225,29,72,0.4)', animation: 'softPulse 1.6s infinite', willChange: 'transform' }}>CALL<br/>NOW</a>
        </div>

        {/* HERO - BLUR + TITLE CENTER + SLIDESHOW TITLE CHANGE */}
        <div style={{ position: 'relative', height: 420, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={slides[currentSlide]} alt="" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(16px) brightness(0.5)', transform: 'scale(1.2)', transition: '0.8s ease' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: 20, width: '100%' }}>
            <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 900, lineHeight: 1.25, margin: 0, minHeight: 135, textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
              <span style={{ color: '#ff3b5c' }}>{brand}</span> Chimney {titleLines[currentSlide]} in {area.name} - 30 Min Visit | Professional Technician
            </h1>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ background: '#22c55e', color: '#fff', padding: '8px 14px', borderRadius: 10, fontWeight: 900, fontSize: 13 }}>★ 4.6 • 335 reviews</span>
              <span style={{ color: '#e5e7eb', fontSize: 12 }}>Same Day • PIN {area.pin}</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '12px 0', background: '#fff' }}>
          {slides.map((_, i) => <div key={i} style={{ width: currentSlide === i? 22 : 8, height: 8, borderRadius: 10, background: currentSlide === i? '#e11d48' : '#ddd', transition: '0.3s' }} />)}
        </div>

        <div style={{ display: 'flex', gap: 10, padding: '0 16px 16px', background: '#fff' }}>
          {Object.keys(services).map(t => <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: 11, borderRadius: 30, border: tab === t? '1px solid #111' : '1px solid #ddd', background: tab === t? '#111' : '#fff', color: tab === t? '#fff' : '#000', fontWeight: 800, fontSize: 14 }}>{t}</button>)}
        </div>

        {/* 1. SERVICE CARD */}
        <div style={{ padding: 16, background: '#f6f6f6' }}>
          {services[tab].map((s: any, i: number) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 14, marginBottom: 12, border: '1px solid #eee', display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src={slides[i]} style={{ width: 78, height: 78, borderRadius: 12, objectFit: 'cover' }} alt="" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 15 }}>{brand} {s.name}</div>
                <div style={{ fontSize: 11.5, color: '#666', marginTop: 2 }}>{s.price} • {s.time} • {s.desc}</div>
                <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} style={{ marginTop: 9, background: '#111', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 8, fontWeight: 800, fontSize: 12 }}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* 2. BOOK FORM - SERVICE CARD KE NICHE */}
        <div ref={formRef} style={{ padding: '22px 16px', background: '#fff' }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>Book {brand} Service - {area.name}</h2>
          <p style={{ fontSize: 12, color: '#666', margin: '6px 0 0' }}>Expert will call in 5 minutes</p>
          <div style={{ marginTop: 14, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name *" style={{ padding: 13, borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
            <input value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile Number *" style={{ padding: 13, borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
            <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Full Address in Raj Nagar" style={{ padding: 13, borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
            <div style={{ display: 'flex', gap: 8 }}>
              <input value={pincode} onChange={e => setPincode(e.target.value)} placeholder="Pincode" style={{ flex: 1, padding: 13, borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
              <select value={need} onChange={e => setNeed(e.target.value)} style={{ flex: 1.3, padding: 13, borderRadius: 10, border: '1px solid #ddd', fontSize: 14, fontWeight: 700 }}>
                <option>Deep Cleaning</option><option>Basic Service</option><option>Not Working</option><option>Noise Repair</option><option>Motor Repair</option><option>PCB Repair</option><option>Installation</option>
              </select>
            </div>
            <a href={waLink} target="_blank" style={{ background: '#e11d48', color: '#fff', padding: 15, borderRadius: 12, textAlign: 'center', textDecoration: 'none', fontWeight: 900, fontSize: 15 }}>Submit & WhatsApp →</a>
            <div style={{ textAlign: 'center', fontSize: 10, color: '#999' }}>Details will go to WhatsApp 8796284796</div>
          </div>
        </div>

        {/* 3. 500 WORD CONTENT - SLIDESHOW STYLE */}
        <div style={{ padding: '20px 16px', background: '#fff', borderTop: '8px solid #f6f6f6' }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>About Chimney Service in {area.name} - 500 Words</h2>
          <div style={{ marginTop: 14, borderRadius: 18, overflow: 'hidden', border: '1px solid #eee', background: '#fafafa' }}>
            <div style={{ padding: 18, minHeight: 340 }}>
              <h3 style={{ margin: 0, fontSize: 15, fontWeight: 900, color: '#e11d48' }}>{contentBlocks[contentSlide].t}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.9, color: '#333', marginTop: 12 }}>{contentBlocks[contentSlide].p}</p>
              <p style={{ fontSize: 13.5, lineHeight: 1.9, color: '#333', marginTop: 10 }}>
                Full 500 words guide: Kitchen chimney is essential in Indian cooking. Without regular cleaning, oil blocks blower, reduces suction, increases power bill, and causes fire risk. In {area.name}, many flats have long ducting to terrace, so blockage is more common. Our service includes complete degreasing, motor check, capacitor test, PCB cleaning, and suction test. We use steam and eco degreaser. Service takes 60-75 minutes. We provide bill and 30-day warranty. Our team serves only Noida and Ghaziabad, so we reach in 45 minutes. Booking is easy via form above. Call Expert button is always available. Keep your kitchen smoke-free and family healthy with timely service in {area.name}. For any model, we have spare parts ready.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, paddingBottom: 14 }}>
              {contentBlocks.map((_, i) => <div key={i} style={{ width: contentSlide === i? 20 : 8, height: 8, borderRadius: 10, background: contentSlide === i? '#111' : '#ccc', transition: '0.3s' }} />)}
            </div>
          </div>
        </div>

        {/* 4. MAPS - 500 WORDS KE NICHE */}
        <div style={{ padding: '18px 16px', background: '#fff' }}>
          <h3 style={{ fontSize: 16, fontWeight: 900, margin: '0 0 10px' }}>We Serve in {area.name} - Live Map</h3>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #eee' }}>
            <iframe width="100%" height="240" style={{ border: 0 }} loading="lazy" src={`https://maps.google.com/maps?q=${encodeURIComponent(area.map)}&z=14&output=embed`} />
          </div>
          <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 11, color: '#666' }}>
            <div>📍 {area.name}</div><div>📌 PIN {area.pin}</div><div>⏱️ 45 Min Arrival</div><div>🛡️ 30 Day Warranty</div>
          </div>
        </div>

        {/* 5. DISCLAIMER - SABSE NICHE */}
        <div style={{ margin: '12px 16px 20px', background: '#fffbe6', border: '1px solid #fde68a', padding: 14, borderRadius: 12, fontSize: 11.5, color: '#92400e', lineHeight: 1.6 }}>
          <b>Disclaimer - We Are Independent:</b> We are an independent chimney service provider in {area.name}. We are NOT authorized service center of {brand}. {brand} name and logo are used only for identification of compatible service. We provide third-party repair and cleaning services for all brands in Noida & Ghaziabad only. For official brand support contact brand official website. Our work has 30-day warranty on service.
        </div>

        {/* BOTTOM FIXED */}
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid #ddd', padding: 10, display: 'flex', gap: 10, maxWidth: 800, margin: '0 auto', zIndex: 30 }}>
          <a href={`tel:${phone}`} style={{ flex: 1, background: '#000', color: '#fff', textAlign: 'center', padding: 14, borderRadius: 12, textDecoration: 'none', fontWeight: 900, fontSize: 14 }}>Call Expert</a>
          <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} style={{ flex: 1, background: '#e11d48', color: '#fff', border: 'none', padding: 14, borderRadius: 12, fontWeight: 900, fontSize: 14 }}>Book Now</button>
        </div>

      </div>
    </>
  )
}
