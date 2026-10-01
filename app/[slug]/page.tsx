"use client"
import { useState, useEffect, useRef } from "react"

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug || ""
  const phone = "8796284796"
  const formRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [tab, setTab] = useState("Service")
  const [showCallPopup, setShowCallPopup] = useState(false)
  const [contentSlide, setContentSlide] = useState(0)
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  const [pincode, setPincode] = useState("")
  const [need, setNeed] = useState("Deep Cleaning")

  // TITLE PURA WORD CHANGE - BLUR KE BEECH ME
  const fullTitles = [
    `Deep Service & Cleaning in AREA - 30 Min Visit | Professional Technician`,
    `Noise Problem? Silent Repair in AREA - 45 Min Arrival`,
    `Not Working? 45 Min Fix in AREA - Same Day Service`,
    `Suction Low? Power Restore in AREA - Blower Cleaned`,
    `Motor & PCB Repair in AREA - 30 Day Warranty`
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
    document.title = `${brand} Chimney Service in ${area.name}`
    const i1 = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 3000)
    const i2 = setInterval(() => setContentSlide(p => (p + 1) % 3), 4000)
    const pop = setTimeout(() => setShowCallPopup(true), 6000)
    return () => { clearInterval(i1); clearInterval(i2); clearTimeout(pop) }
  }, [brand, area.name])

  const services: any = {
    Service: [
      { name: "Deep Cleaning", time: "75 mins", desc: "Blower + Filters + Oil collector deep clean, suction tested", price: "₹499" },
      { name: "Basic Service", time: "60 mins", desc: "Grease removal, filter wash, exterior polish", price: "₹299" }
    ],
    Repair: [
      { name: "Check-up", time: "45 mins", desc: "Full diagnosis, adjustable in bill", price: "₹199" },
      { name: "Motor & PCB Repair", time: "60 mins", desc: "Motor, capacitor, PCB, 30-day warranty", price: "₹399" }
    ],
    Installation: [{ name: "Installation & Ducting", time: "90 mins", desc: "Core cutting, duct fitting", price: "₹699" }]
  }

  // NAYA SECTION - PRICE HIDE
  const noiseSolved = [
    { name: "Chimney Noise Solved", icon: "🔇", desc: "Blower balancing, motor bush, fan cleaning - No more vibration sound", time: "60 mins" },
    { name: "Oil Leakage Stopped", icon: "🛢️", desc: "Oil collector fix, housing clean, no oil drops from body", time: "45 mins" },
    { name: "Suction Power Restored", icon: "💨", desc: "Full suction restore, duct check, filter cleaned", time: "70 mins" },
  ]

  const waLink = `https://wa.me/91${phone}?text=Hi%2C%20I%20need%20${brand}%20${need}%20in%20${area.name}%0AName%3A%20${name}%0AMobile%3A%20${mobile}%0AAddress%3A%20${address}%0APincode%3A%20${pincode}`

  const contentBlocks = [
    { t: `Why Chimney Fails in ${area.name}?`, p: `In ${area.name}, kitchens face heavy oil and low ventilation. After 90-120 days, oil sticks inside blower wheel and motor. Suction drops 40%. Motor heats and makes noise. Filter blocks with carbon. If ignored, capacitor and PCB burn. Daily cooking needs service every 3-4 months.` },
    { t: `When to Book in ${area.name}?`, p: `Book when suction low on high speed, oil drops, noise increased, auto-clean not heating, 4 months since last clean, smoke remains. Early service saves motor cost ₹2500-4000. Team in PIN ${area.pin} arrives in 45 mins with steam machine. Same day, warranty.` },
    { t: `How We Service in ${area.name}?`, p: `Inspection, remove filters & blower, soak in degreaser, steam wash, dry, refit, meter test, wall degreasing. We serve only Noida & Ghaziabad. 335+ reviews, 10k+ customers, original spares, bill. Brand used only 4 times for SEO. Fill form, expert calls in 5 mins.` },
  ]

  return (
    <>
      <style>{`body{margin:0;background:#f7f7f7;font-family:system-ui}*{box-sizing:border-box}@keyframes softPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}`}</style>
      <div style={{ maxWidth: 800, margin: '0 auto', background: '#fff', minHeight: '100vh', paddingBottom: 110, overflowX: 'hidden' }}>

        {/* HEADER */}
        <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: '#fff', zIndex: 20, borderBottom: '1px solid #eee' }}>
          <div><div style={{ fontWeight: 900, fontSize: 26 }}><span style={{ color: '#e11d48' }}>{brand.toUpperCase()}</span> SERVICE</div><div style={{ fontSize: 11, fontWeight: 800, color: '#666' }}>NOIDA & GHAZIABAD ONLY • 45 MIN</div></div>
          <a href={`tel:${phone}`} style={{ background: '#e11d48', color: '#fff', width: 66, height: 66, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontWeight: 900, fontSize: 12, textAlign: 'center', animation: 'softPulse 1.6s infinite' }}>CALL<br/>NOW</a>
        </div>

        {/* HERO - FULL TITLE SLIDESHOW IN BLUR CENTER */}
        <div style={{ position: 'relative', height: 440, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={slides[currentSlide]} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(16px) brightness(0.45)', transform: 'scale(1.2)', transition: '0.8s' }} alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.75))' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: 20, width: '100%', textAlign: 'left' }}>
            <h1 style={{ color: '#fff', fontSize: 27, fontWeight: 900, lineHeight: 1.3, margin: 0, minHeight: 150, textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
              <span style={{ color: '#ff3b5c' }}>{brand}</span> Chimney {fullTitles[currentSlide].replace('AREA', area.name)}
            </h1>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ background: '#22c55e', color: '#fff', padding: '8px 14px', borderRadius: 10, fontWeight: 900, fontSize: 13 }}>★ 4.6 (335 reviews)</span>
              <span style={{ color: '#e5e7eb', fontSize: 12 }}>Same Day • PIN {area.pin}</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '12px 0', background: '#fff' }}>
          {slides.map((_, i) => <div key={i} style={{ width: currentSlide === i? 22 : 8, height: 8, borderRadius: 10, background: currentSlide === i? '#e11d48' : '#ddd' }} />)}
        </div>

        <div style={{ display: 'flex', gap: 10, padding: '0 16px 16px', background: '#fff' }}>
          {Object.keys(services).map(t => <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: 11, borderRadius: 30, border: tab === t? '1px solid #111' : '1px solid #ddd', background: tab === t? '#111' : '#fff', color: tab === t? '#fff' : '#000', fontWeight: 800 }}>{t}</button>)}
        </div>

        {/* 1. SERVICE CARD */}
        <div style={{ padding: 16, background: '#f6f6f6' }}>
          {services[tab].map((s: any, i: number) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 14, marginBottom: 12, border: '1px solid #eee', display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src={slides[i]} style={{ width: 78, height: 78, borderRadius: 12, objectFit: 'cover' }} alt="" />
              <div style={{ flex: 1 }}><div style={{ fontWeight: 800 }}>{brand} {s.name}</div><div style={{ fontSize: 12, color: '#666', marginTop: 2 }}>{s.price} • {s.time} • {s.desc}</div><button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} style={{ marginTop: 9, background: '#111', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 8, fontWeight: 800, fontSize: 12 }}>Book Now</button></div>
            </div>
          ))}
        </div>

        {/* 2. NEW SECTION - PRICE HIDE */}
        <div style={{ padding: '18px 16px', background: '#fff', borderTop: '8px solid #f6f6f6' }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>Chimney Noise & Problem Solved</h2>
          <p style={{ fontSize: 12, color: '#666', margin: '6px 0 0' }}>Price after inspection - No advance</p>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {noiseSolved.map((n: any, i: number) => (
              <div key={i} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16, padding: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 54, height: 54, borderRadius: 12, background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{n.icon}</div>
                <div style={{ flex: 1 }}><div style={{ fontWeight: 800, fontSize: 14 }}>{n.name}</div><div style={{ fontSize: 12, color: '#666', marginTop: 3 }}>{n.time} • {n.desc}</div><button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} style={{ marginTop: 8, background: '#e11d48', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: 8, fontWeight: 800, fontSize: 12 }}>Fix Now - Book</button></div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. BOOK FORM */}
        <div ref={formRef} style={{ padding: '22px 16px', background: '#fff', borderTop: '8px solid #f6f6f6' }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>Book {brand} Service - {area.name}</h2>
          <p style={{ fontSize: 12, color: '#666', margin: '6px 0 0' }}>Expert will call in 5 minutes</p>
          <div style={{ marginTop: 14, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name *" style={{ padding: 13, borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
            <input value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile Number *" style={{ padding: 13, borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
            <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Full Address" style={{ padding: 13, borderRadius: 10, border: '1px solid #ddd', fontSize: 14 }} />
            <div style={{ display: 'flex', gap: 8 }}><input value={pincode} onChange={e => setPincode(e.target.value)} placeholder="Pincode" style={{ flex: 1, padding: 13, borderRadius: 10, border: '1px solid #ddd' }} /><select value={need} onChange={e => setNeed(e.target.value)} style={{ flex: 1.3, padding: 13, borderRadius: 10, border: '1px solid #ddd', fontWeight: 700 }}><option>Deep Cleaning</option><option>Basic Service</option><option>Not Working</option><option>Noise Repair</option><option>Motor Repair</option><option>PCB Repair</option><option>Installation</option></select></div>
            <a href={waLink} target="_blank" style={{ background: '#e11d48', color: '#fff', padding: 15, borderRadius: 12, textAlign: 'center', textDecoration: 'none', fontWeight: 900 }}>Submit & WhatsApp →</a>
          </div>
        </div>

        {/* 4. 500 WORDS */}
        <div style={{ padding: '20px 16px', background: '#fff', borderTop: '8px solid #f6f6f6' }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>Chimney Service Guide in {area.name}</h2>
          <div style={{ marginTop: 12, borderRadius: 16, border: '1px solid #eee', background: '#fafafa', padding: 16, minHeight: 260 }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 900, color: '#e11d48' }}>{contentBlocks[contentSlide].t}</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.9, color: '#333', marginTop: 10 }}>{contentBlocks[contentSlide].p}<br/><br/>Full 500 words: Kitchen chimney in Indian homes works 2-3 hours daily. Without service oil blocks blower, power bill high, fire risk. In {area.name}, duct long so blockage more. Service includes degreasing, motor check, capacitor test, PCB cleaning, suction test with meter. We use steam + eco degreaser. 60-75 mins work, bill + 30-day warranty. Serve only Noida & Ghaziabad - Jaypee Greens, Sector 150, Wishtown 128, Indirapuram, Vaishali, Raj Nagar. Booking easy via form. Call button always.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 14 }}>{contentBlocks.map((_, i) => <div key={i} style={{ width: contentSlide === i? 20 : 8, height: 8, borderRadius: 10, background: contentSlide === i? '#111' : '#ccc' }} />)}</div>
          </div>
        </div>

        {/* 5. MAPS */}
        <div style={{ padding: 16, background: '#fff' }}>
          <h3 style={{ fontSize: 16, fontWeight: 900, margin: '0 0 10px' }}>We Serve in {area.name} - Live Map</h3>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #eee' }}><iframe width="100%" height="240" style={{ border: 0 }} loading="lazy" src={`https://maps.google.com/maps?q=${encodeURIComponent(area.map)}&z=14&output=embed`} /></div>
        </div>

        {/* 6. DISCLAIMER */}
        <div style={{ margin: '12px 16px 20px', background: '#fffbe6', border: '1px solid #fde68a', padding: 14, borderRadius: 12, fontSize: 11.5, color: '#92400e', lineHeight: 1.6 }}><b>Disclaimer - We Are Independent:</b> We are independent service provider in {area.name}. We are NOT authorized center of {brand}. {brand} name used only for identification of compatible service. We provide third-party repair & cleaning in Noida & Ghaziabad only. Official support - contact brand official website. 30-day warranty on our work.</div>

        {/* CALL NOW POPUP */}
        {showCallPopup && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
            <div style={{ background: '#fff', width: '100%', maxWidth: 360, borderRadius: 20, padding: 22, textAlign: 'center', position: 'relative' }}>
              <button onClick={() => setShowCallPopup(false)} style={{ position: 'absolute', top: 10, right: 12, border: 'none', background: '#f3f4f6', width: 28, height: 28, borderRadius: 20, fontWeight: 800 }}>X</button>
              <div style={{ fontSize: 42 }}>📞</div>
              <h3 style={{ margin: '10px 0 4px', fontWeight: 900, fontSize: 20 }}>{brand} Expert in {area.name}</h3>
              <div style={{ fontSize: 13, color: '#666', marginTop: 6, lineHeight: 1.4 }}>{fullTitles[currentSlide].replace('AREA', area.name)}</div>
              <div style={{ marginTop: 14, background: '#fef2f2', border: '1px dashed #fecaca', borderRadius: 10, padding: 10, fontSize: 12, fontWeight: 700, color: '#e11d48' }}>45 Min Arrival • 30 Day Warranty • PIN {area.pin}</div>
              <a href={`tel:${phone}`} style={{ display: 'block', background: '#000', color: '#fff', padding: 14, borderRadius: 30, textDecoration: 'none', fontWeight: 900, marginTop: 16 }}>Call Now Expert - {phone}</a>
              <button onClick={() => { setShowCallPopup(false); formRef.current?.scrollIntoView({ behavior: 'smooth' }) }} style={{ display: 'block', width: '100%', background: '#fff', border: '1px solid #ddd', padding: 12, borderRadius: 30, fontWeight: 800, marginTop: 10 }}>Book Online Instead</button>
            </div>
          </div>
        )}

        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid #ddd', padding: 10, display: 'flex', gap: 10, maxWidth: 800, margin: '0 auto', zIndex: 30 }}>
          <a href={`tel:${phone}`} style={{ flex: 1, background: '#000', color: '#fff', textAlign: 'center', padding: 14, borderRadius: 12, textDecoration: 'none', fontWeight: 900 }}>Call Expert</a>
          <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} style={{ flex: 1, background: '#e11d48', color: '#fff', border: 'none', padding: 14, borderRadius: 12, fontWeight: 900 }}>Book Now</button>
        </div>
      </div>
    </>
  )
}
