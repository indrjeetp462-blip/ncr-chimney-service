"use client"
import { useState, useEffect, useRef } from "react"

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug || ""
  const phone = "8796284796"
  const formRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [tab, setTab] = useState("Service")
  const [showCallPopup, setShowCallPopup] = useState(false)
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  const [pincode, setPincode] = useState("")
  const [need, setNeed] = useState("Deep Cleaning")

  const fullTitles = [
    "Deep Service & Cleaning in AREA - 30 Min Visit | Professional Technician",
    "Noise Problem? Silent Repair in AREA - 45 Min Arrival",
    "Not Working? 45 Min Fix in AREA - Same Day Service",
    "Suction Low? Power Restore in AREA - Blower Cleaned",
    "Motor & PCB Repair in AREA - 30 Day Warranty"
  ]

  const slides = [
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
  ]

  const areaInfo: any = {
    "jaypee-greens-greater-noida": { name: "Jaypee Greens Greater Noida", pin: "201310", map: "Jaypee Greens Greater Noida" },
    "sector-150-noida": { name: "Sector 150 Noida", pin: "201310", map: "Sector 150 Noida" },
    "jaypee-wishtown-sector-128-noida": { name: "Jaypee Wishtown Sector 128 Noida", pin: "201304", map: "Jaypee Wishtown Noida" },
    "indirapuram-ghaziabad": { name: "Indirapuram Ghaziabad", pin: "201014", map: "Indirapuram Ghaziabad" },
    "vaishali-sector-5-ghaziabad": { name: "Vaishali Sector 5 Ghaziabad", pin: "201010", map: "Vaishali Ghaziabad" },
    "raj-nagar-ghaziabad": { name: "Raj Nagar Ghaziabad", pin: "201002", map: "Raj Nagar Ghaziabad" }
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
    const pop = setTimeout(() => setShowCallPopup(true), 7000)
    setTimeout(() => {
      window.scrollBy({ top: 140, behavior: "smooth" })
      setTimeout(() => window.scrollBy({ top: -50, behavior: "smooth" }), 900)
    }, 2600)
    return () => {
      clearInterval(i1)
      clearTimeout(pop)
    }
  }, [])

  const services: any = {
    Service: [
      { name: `${brand} Deep Cleaning`, time: "75 mins", desc: "Blower + Filters + Oil collector deep clean, suction tested" },
      { name: `${brand} Basic Service`, time: "60 mins", desc: "Grease removal, filter wash, exterior polish" }
    ],
    Repair: [
      { name: "Complete Check-up", time: "45 mins", desc: "Full diagnosis, adjustable in bill" },
      { name: "Motor & PCB Repair", time: "60 mins", desc: "Motor, capacitor, PCB repair, 30-day warranty" }
    ],
    Installation: [
      { name: "Installation & Ducting", time: "90 mins", desc: "Core cutting, duct fitting, suction test" }
    ]
  }

  const noiseSolved = [
    { name: "Chimney Noise Solved", icon: "🔇", desc: "Blower balancing, motor bush, fan cleaning", time: "60 mins" },
    { name: "Oil Leakage Stopped", icon: "🛢️", desc: "Oil collector fix, housing clean, no drops", time: "45 mins" },
    { name: "Suction Power Restored", icon: "💨", desc: "Full suction restore, duct check, filter cleaned", time: "70 mins" }
  ]

  const seoKeys = [
    `chimney cleaning service in ${area.name.toLowerCase()}`,
    `chimney repair near me ${area.pin}`,
    `kitchen chimney deep cleaning service`,
    `chimney noise problem solution in ${area.name.toLowerCase()}`,
    `chimney suction repair service near me`
  ]

  const waLink = `https://wa.me/91${phone}?text=Hi%20${brand}%20${need}%20in%20${area.name}%0AName:%20${name}%0AMobile:%20${mobile}%0AAddress:%20${address}%0APincode:%20${pincode}`

  return (
    <>
      <style>{`body{margin:0;background:#f7f7f7;font-family:system-ui}*{box-sizing:border-box}@keyframes softPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}`}</style>
      <div style={{ maxWidth: 800, margin: "0 auto", background: "#fff", paddingBottom: 110, overflowX: "hidden" }}>

        <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "#fff", zIndex: 20, borderBottom: "1px solid #eee" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 26 }}>CHIMNEY<span style={{ color: "#e11d48" }}> EXPERT</span></div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#666" }}>NOIDA & GHAZIABAD ONLY • 45 MIN</div>
          </div>
          <a href={`tel:${phone}`} style={{ background: "#e11d48", color: "#fff", width: 66, height: 66, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontWeight: 900, fontSize: 12, textAlign: "center", animation: "softPulse 1.6s infinite" }}>CALL<br />NOW</a>
        </div>

        <div style={{ position: "relative", height: 440, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={slides[currentSlide]} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", filter: "blur(16px) brightness(0.45)", transform: "scale(1.2)", transition: "0.8s" }} alt="" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.75))" }} />
          <div style={{ position: "relative", zIndex: 2, padding: 20, width: "100%" }}>
            <h1 style={{ color: "#fff", fontSize: 27, fontWeight: 900, lineHeight: 1.3, margin: 0, minHeight: 150 }}><span style={{ color: "#ff3b5c" }}>{brand}</span> Chimney {fullTitles[currentSlide].replace("AREA", area.name)}</h1>
            <div style={{ marginTop: 16 }}><span style={{ background: "#22c55e", color: "#fff", padding: "8px 14px", borderRadius: 10, fontWeight: 900, fontSize: 13 }}>★ 4.6 (335 reviews) • Same Day • PIN {area.pin}</span></div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "12px 0" }}>
          {slides.map((_, i) => <div key={i} style={{ width: currentSlide === i? 22 : 8, height: 8, borderRadius: 10, background: currentSlide === i? "#e11d48" : "#ddd" }} />)}
        </div>

        <div style={{ display: "flex", gap: 10, padding: "0 16px 16px" }}>
          {Object.keys(services).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: 11, borderRadius: 30, border: tab === t? "1px solid #111" : "1px solid #ddd", background: tab === t? "#111" : "#fff", color: tab === t? "#fff" : "#000", fontWeight: 800 }}>{t}</button>
          ))}
        </div>

        <div style={{ padding: 16, background: "#f6f6f6" }}>
          {services[tab].map((s: any, i: number) => (
            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: 14, marginBottom: 12, border: "1px solid #eee", display: "flex", gap: 12, alignItems: "center" }}>
              <img src={slides[i]} style={{ width: 78, height: 78, borderRadius: 12, objectFit: "cover" }} alt="" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800 }}>{s.name}</div>
                <div style={{ fontSize: 12, color: "#666", marginTop: 3 }}>{s.time} • {s.desc}</div>
                <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })} style={{ marginTop: 9, background: "#111", color: "#fff", border: "none", padding: "8px 16px", borderRadius: 8, fontWeight: 800, fontSize: 12 }}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: "18px 16px", background: "#fff", borderTop: "8px solid #f6f6f6" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>Chimney Noise & Problem Solved</h2>
          <p style={{ fontSize: 12, color: "#666", margin: "6px 0 0" }}>Price after inspection - No advance</p>
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 12 }}>
            {noiseSolved.map((n: any, i: number) => (
              <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 16, padding: 14, display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 54, height: 54, borderRadius: 12, background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{n.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{n.name}</div>
                  <div style={{ fontSize: 12, color: "#666", marginTop: 3 }}>{n.time} • {n.desc}</div>
                  <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })} style={{ marginTop: 8, background: "#e11d48", color: "#fff", border: "none", padding: "8px 14px", borderRadius: 8, fontWeight: 800, fontSize: 12 }}>Fix Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={formRef} style={{ padding: "22px 16px", background: "#fff", borderTop: "8px solid #f6f6f6" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>Book {brand} Service - {area.name}</h2>
          <p style={{ fontSize: 12, color: "#666", margin: "6px 0 0" }}>Expert will call in 5 minutes</p>
          <div style={{ marginTop: 14, background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name *" style={{ padding: 13, borderRadius: 10, border: "1px solid #ddd" }} />
            <input value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile Number *" style={{ padding: 13, borderRadius: 10, border: "1px solid #ddd" }} />
            <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Full Address" style={{ padding: 13, borderRadius: 10, border: "1px solid #ddd" }} />
            <div style={{ display: "flex", gap: 8 }}>
              <input value={pincode} onChange={e => setPincode(e.target.value)} placeholder="Pincode" style={{ flex: 1, padding: 13, borderRadius: 10, border: "1px solid #ddd" }} />
              <select value={need} onChange={e => setNeed(e.target.value)} style={{ flex: 1.3, padding: 13, borderRadius: 10, border: "1px solid #ddd", fontWeight: 700 }}>
                <option>Deep Cleaning</option><option>Basic Service</option><option>Noise Repair</option><option>Motor Repair</option>
              </select>
            </div>
            <a href={waLink} target="_blank" style={{ background: "#e11d48", color: "#fff", padding: 15, borderRadius: 12, textAlign: "center", textDecoration: "none", fontWeight: 900 }}>Submit & WhatsApp →</a>
          </div>
        </div>

        <div style={{ padding: "20px 16px", borderTop: "8px solid #f6f6f6" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>Service Guide - {area.name}</h2>
          <div style={{ marginTop: 12, borderRadius: 16, border: "1px solid #eee", background: "#fafafa", padding: 16 }}>
            <p style={{ fontSize: 13.5, lineHeight: 1.9, color: "#333" }}>Kitchen chimney in {area.name} needs service every 3-4 months due to heavy oil. Grease sticks, suction drops, motor heats. Expert comes in 45 mins, deep cleans, checks motor, PCB, capacitor. Same day, 30-day warranty, 335+ reviews. We serve Jaypee Greens, Sector 150, Wishtown 128, Indirapuram, Vaishali, Raj Nagar.</p>
          </div>
        </div>

        <div style={{ padding: 16 }}><iframe width="100%" height="220" style={{ border: 0, borderRadius: 16 }} loading="lazy" src={`https://maps.google.com/maps?q=${encodeURIComponent(area.map)}&z=14&output=embed`} /></div>

        <div style={{ padding: "18px 16px", background: "#f9fafb", borderTop: "8px solid #f6f6f6" }}>
          <h3 style={{ fontSize: 13, fontWeight: 900, margin: "0 0 10px", color: "#111", textTransform: "uppercase" }}>Popular Searches in {area.name}</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {seoKeys.map((k, i) => <span key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "7px 12px", borderRadius: 20, fontSize: 11.5, color: "#444", fontWeight: 600 }}>{k}</span>)}
          </div>
          <p style={{ fontSize: 10.5, color: "#888", marginTop: 10, lineHeight: 1.5 }}>We provide chimney cleaning, repair, installation services in {area.name} PIN {area.pin}. Independent service, not affiliated with any brand. Same day expert visit.</p>
        </div>

        <div style={{ margin: "12px 16px 20px", background: "#fffbe6", border: "1px solid #fde68a", padding: 14, borderRadius: 12, fontSize: 11.5, color: "#92400e", lineHeight: 1.6 }}><b>Disclaimer:</b> Independent provider in {area.name}. NOT authorized service center. Brand name used only for identification.</div>

        {showCallPopup && (
          <div style={{ position: "fixed", inset: 0, zIndex: 99999, background: "rgba(0,0,0,0.65)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
            <div style={{ background: "#fff", width: "100%", maxWidth: 360, borderRadius: 20, padding: 22, textAlign: "center", position: "relative" }}>
              <button onClick={() => setShowCallPopup(false)} style={{ position: "absolute", top: 10, right: 12, border: "none", background: "#f3f4f6", width: 28, height: 28, borderRadius: 20, fontWeight: 800 }}>X</button>
              <div style={{ fontSize: 42 }}>📞</div>
              <h3 style={{ margin: "10px 0 4px", fontWeight: 900, fontSize: 20 }}>Expert in {area.name}</h3>
              <div style={{ fontSize: 13, color: "#666", marginTop: 6 }}>{fullTitles[currentSlide].replace("AREA", area.name)}</div>
              <a href={`tel:${phone}`} style={{ display: "block", background: "#000", color: "#fff", padding: 14, borderRadius: 30, textDecoration: "none", fontWeight: 900, marginTop: 16 }}>Call Now Expert</a>
              <button onClick={() => { setShowCallPopup(false); formRef.current?.scrollIntoView({ behavior: "smooth" }) }} style={{ display: "block", width: "100%", background: "#fff", border: "1px solid #ddd", padding: 12, borderRadius: 30, fontWeight: 800, marginTop: 10 }}>Book Online</button>
            </div>
          </div>
        )}

        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#fff", borderTop: "1px solid #ddd", padding: 10, display: "flex", gap: 10, maxWidth: 800, margin: "0 auto", zIndex: 30 }}>
          <a href={`tel:${phone}`} style={{ flex: 1, background: "#000", color: "#fff", textAlign: "center", padding: 14, borderRadius: 12, textDecoration: "none", fontWeight: 900 }}>Call Expert</a>
          <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })} style={{ flex: 1, background: "#e11d48", color: "#fff", border: "none", padding: 14, borderRadius: 12, fontWeight: 900 }}>Book Now</button>
        </div>
      </div>
    </>
  )
}
