"use client"
import { useState, useEffect, useRef } from "react"

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug || ""
  const phone = "8796284796"
  const formRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [tab, setTab] = useState("Service")
  const [showCallPopup, setShowCallPopup] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [typedText1, setTypedText1] = useState("")
  const [typedBrand, setTypedBrand] = useState("")
  const [typedText2, setTypedText2] = useState("")
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
    "jaypee-greens-greater-noida": { name: "Jaypee Greens Greater Noida", pin: "201310", map: "Jaypee Greens Greater Noida", landmark: "Near Golf Course, Pari Chowk", issue: "15ft high-rise duct me oil jam hota hai" },
    "sector-150-noida": { name: "Sector 150 Noida", pin: "201310", map: "Sector 150 Noida", landmark: "Near Purvanchal Royal City, Sports City", issue: "new flat me duct fitting me air leakage" },
    "jaypee-wishtown-sector-128-noida": { name: "Jaypee Wishtown Sector 128 Noida", pin: "201304", map: "Jaypee Wishtown Noida", landmark: "Near Jaypee Hospital, Kalindi Kunj Road", issue: "12ft long duct me suction 50% drop hota hai" },
    "indirapuram-ghaziabad": { name: "Indirapuram Ghaziabad", pin: "201014", map: "Indirapuram Ghaziabad", landmark: "Near Aditya Mall, CISF Road", issue: "old duct me oil leakage zyada hota hai" },
    "vaishali-sector-5-ghaziabad": { name: "Vaishali Sector 5 Ghaziabad", pin: "201010", map: "Vaishali Ghaziabad", landmark: "Near Vaishali Metro, Mahagun Mall", issue: "dust + oil se blower jam ho jata hai" },
    "raj-nagar-ghaziabad": { name: "Raj Nagar Ghaziabad", pin: "201002", map: "Raj Nagar Ghaziabad", landmark: "Near RDC Market, Gaur Central Mall", issue: "voltage issue se PCB kharab hota hai" }
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
    const text1 = "Welcome to"
    const brandText = brand.toUpperCase()
    const text2 = " CHIMNEY SERVICE"
    let i = 0, j = 0, k = 0, phase = 1
    const typingInterval = setInterval(() => {
      if (phase === 1) {
        if (i < text1.length) { setTypedText1(text1.slice(0, i + 1)); i++ } else phase = 2
      } else if (phase === 2) {
        if (j < brandText.length) { setTypedBrand(brandText.slice(0, j + 1)); j++ } else phase = 3
      } else if (phase === 3) {
        if (k < text2.length) { setTypedText2(text2.slice(0, k + 1)); k++ } else { clearInterval(typingInterval); setTimeout(() => setShowWelcome(false), 900) }
      }
    }, 85)
    return () => clearInterval(typingInterval)
  }, [brand])

  useEffect(() => {
    document.title = `Independent ${brand} Chimney Service in ${area.name} - 45 Min Visit - PIN ${area.pin}`
    const i1 = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 3000)
    const pop = setTimeout(() => setShowCallPopup(true), 8000)
    return () => { clearInterval(i1); clearTimeout(pop) }
  }, [brand, area])

  const services: any = {
    Service: [
      { name: `${brand} Deep Cleaning`, time: "75 mins", desc: "Blower + Filters + Oil collector deep clean, suction tested" },
      { name: `${brand} Basic Service`, time: "60 mins", desc: "Grease removal, filter wash, exterior polish" }
    ],
    Repair: [
      { name: "Complete Check-up", time: "45 mins", desc: "Full diagnosis, adjustable in bill" },
      { name: "Motor & PCB Repair", time: "60 mins", desc: "Motor, capacitor, PCB repair, 30-day warranty" }
    ],
    Installation: [{ name: "Installation & Ducting", time: "90 mins", desc: "Core cutting, duct fitting, suction test" }]
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
      <style>{`body{margin:0;background:#f7f7f7;font-family:system-ui}*{box-sizing:border-box}@keyframes softPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}@keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}`}</style>

      {showWelcome && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999999, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#666", letterSpacing: 3, textTransform: "uppercase", minHeight: 20 }}>{typedText1}</div>
            <div style={{ fontSize: 36, fontWeight: 900, marginTop: 8, minHeight: 50, lineHeight: 1.2 }}>
              <span style={{ color: "#e11d48" }}>{typedBrand}</span><span style={{ color: "#111" }}>{typedText2}</span>
              <span style={{ display: "inline-block", width: 3, height: 28, background: "#111", marginLeft: 3, verticalAlign: "middle", animation: "blink 0.8s infinite" }} />
            </div>
            <div style={{ marginTop: 14, width: 60, height: 4, background: "#e11d48", borderRadius: 10, margin: "14px auto 0" }} />
            <div style={{ fontSize: 12, color: "#888", marginTop: 12, fontWeight: 600 }}>{area.name} • 45 MIN ARRIVAL</div>
          </div>
        </div>
      )}

      <div style={{ maxWidth: 800, margin: "0 auto", background: "#fff", paddingBottom: 110, overflowX: "hidden", position: "relative" }}>

        <div style={{ position: "sticky", top: 0, width: "100%", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", zIndex: 100, borderBottom: "1px solid #eee", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 22, lineHeight: 1.1 }}><span style={{ color: "#e11d48" }}>{brand.toUpperCase()}</span> <span style={{ color: "#111" }}>CHIMNEY</span><br /><span style={{ color: "#111" }}>SERVICE</span></div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "#666", marginTop: 3, lineHeight: 1.2 }}>NOIDA & GHAZIABAD ONLY • 45 MIN • {area.name.toUpperCase()}</div>
          </div>
          <a href={`tel:${phone}`} style={{ background: "#e11d48", color: "#fff", width: 62, height: 62, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontWeight: 900, fontSize: 12, textAlign: "center", animation: "softPulse 1.6s infinite", flexShrink: 0 }}>CALL<br />NOW</a>
        </div>

        <div style={{ position: "relative", height: 300, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={slides[currentSlide]} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", filter: "blur(14px) brightness(0.5)", transform: "scale(1.15)", transition: "0.8s" }} alt="" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.7))" }} />
          <div style={{ position: "relative", zIndex: 2, padding: 18, width: "100%" }}>
            <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 900, lineHeight: 1.25, margin: 0 }}><span style={{ color: "#ff3b5c" }}>{brand}</span> Chimney {fullTitles[currentSlide].replace("AREA", area.name)}</h1>
            <div style={{ marginTop: 14 }}><span style={{ background: "#22c55e", color: "#fff", padding: "7px 12px", borderRadius: 10, fontWeight: 900, fontSize: 12 }}>★ 4.6 (335 reviews) • Same Day • PIN {area.pin}</span></div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "10px 0" }}>
          {slides.map((_, i) => <div key={i} style={{ width: currentSlide === i? 20 : 7, height: 7, borderRadius: 10, background: currentSlide === i? "#e11d48" : "#ddd" }} />)}
        </div>

        <div style={{ display: "flex", gap: 10, padding: "0 14px 14px" }}>
          {Object.keys(services).map(t => <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: 10, borderRadius: 30, border: tab === t? "1px solid #111" : "1px solid #ddd", background: tab === t? "#111" : "#fff", color: tab === t? "#fff" : "#000", fontWeight: 800, fontSize: 13 }}>{t}</button>)}
        </div>

        <div style={{ padding: 14, background: "#f6f6f6" }}>
          {services[tab].map((s: any, i: number) => (
            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: 12, marginBottom: 10, border: "1px solid #eee", display: "flex", gap: 12, alignItems: "center" }}>
              <img src={slides[i]} style={{ width: 72, height: 72, borderRadius: 12, objectFit: "cover" }} alt="" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 14 }}>{s.name}</div>
                <div style={{ fontSize: 11.5, color: "#666", marginTop: 3 }}>{s.time} • {s.desc}</div>
                <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })} style={{ marginTop: 8, background: "#111", color: "#fff", border: "none", padding: "7px 14px", borderRadius: 8, fontWeight: 800, fontSize: 11 }}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: "16px 14px", background: "#fff", borderTop: "8px solid #f6f6f6" }}>
          <h2 style={{ fontSize: 17, fontWeight: 900, margin: 0 }}>Chimney Noise & Problem Solved</h2>
          <p style={{ fontSize: 11.5, color: "#666", margin: "5px 0 0" }}>Price after inspection - No advance</p>
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
            {noiseSolved.map((n: any, i: number) => (
              <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 16, padding: 12, display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 50, height: 50, borderRadius: 12, background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{n.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 13.5 }}>{n.name}</div>
                  <div style={{ fontSize: 11.5, color: "#666", marginTop: 2 }}>{n.time} • {n.desc}</div>
                  <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })} style={{ marginTop: 7, background: "#e11d48", color: "#fff", border: "none", padding: "7px 12px", borderRadius: 8, fontWeight: 800, fontSize: 11 }}>Fix Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={formRef} style={{ padding: "20px 14px", background: "#fff", borderTop: "8px solid #f6f6f6" }}>
          <h2 style={{ fontSize: 17, fontWeight: 900, margin: 0 }}>Book {brand} Service - {area.name}</h2>
          <p style={{ fontSize: 11.5, color: "#666", margin: "5px 0 0" }}>Expert will call in 5 minutes - {area.landmark}</p>
          <div style={{ marginTop: 12, background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 16, padding: 12, display: "flex", flexDirection: "column", gap: 9 }}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name *" style={{ padding: 12, borderRadius: 10, border: "1px solid #ddd" }} />
            <input value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile Number *" style={{ padding: 12, borderRadius: 10, border: "1px solid #ddd" }} />
            <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Full Address" style={{ padding: 12, borderRadius: 10, border: "1px solid #ddd" }} />
            <div style={{ display: "flex", gap: 8 }}>
              <input value={pincode} onChange={e => setPincode(e.target.value)} placeholder="Pincode" style={{ flex: 1, padding: 12, borderRadius: 10, border: "1px solid #ddd" }} />
              <select value={need} onChange={e => setNeed(e.target.value)} style={{ flex: 1.3, padding: 12, borderRadius: 10, border: "1px solid #ddd", fontWeight: 700 }}>
                <option>Deep Cleaning</option><option>Basic Service</option><option>Noise Repair</option><option>Motor Repair</option>
              </select>
            </div>
            <a href={waLink} target="_blank" style={{ background: "#e11d48", color: "#fff", padding: 13, borderRadius: 12, textAlign: "center", textDecoration: "none", fontWeight: 900 }}>Submit & WhatsApp →</a>
          </div>
        </div>

        <div style={{ padding: "20px 14px", background: "#fff", borderTop: "8px solid #f6f6f6" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>Complete Chimney Care Guide for {area.name}</h2>
          <div style={{ marginTop: 12, borderRadius: 16, border: "1px solid #eee", background: "#fafafa", padding: 14 }}>
            <p style={{ fontSize: 13, lineHeight: 2, color: "#222" }}>
              In {area.name} {area.landmark} ke aas paas kitchen chimney ka load zyada hota hai kyunki daily tadka aur frying 2-3 ghante hoti hai. Yahan ki main problem {area.issue} hai, isliye {brand} chimney me 90 din me blower fins par oil ki moti parat jam jati hai. {area.name} PIN {area.pin} me high-rise flats me duct length 12-15 ft hoti hai jisme 2 bend hote hai, isse suction 50% tak kam ho jata hai agar safai na ho. Service har 90-120 din me karwani chahiye. Signs: suction low, oil drops, awaz, dhua ghoomna, filter kala. Hum sirf Noida Ghaziabad me kaam karte hai including {area.name} ({area.landmark}), 335+ reviews, 30 din warranty. Ye guide specially {area.name} ke liye likha gaya hai taki aapko {area.issue} ka sahi solution mile.
            </p>
            <h3 style={{ fontSize: 12, fontWeight: 900, margin: "16px 0 8px", color: "#111", textTransform: "uppercase" }}>Top Searches in {area.name}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {seoKeys.map((k, i) => <span key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "6px 10px", borderRadius: 20, fontSize: 11, color: "#444", fontWeight: 600 }}>{k}</span>)}
            </div>
          </div>
        </div>

        <div style={{ padding: 14, background: "#fff" }}>
          <h3 style={{ fontSize: 15, fontWeight: 900, margin: "0 0 10px" }}>We Serve in {area.name} - Live Map - PIN {area.pin} - {area.landmark}</h3>
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #eee" }}>
            <iframe width="100%" height="250" style={{ border: 0 }} loading="lazy" src={`https://maps.google.com/maps?q=${encodeURIComponent(area.map)}&z=14&output=embed`} />
          </div>
        </div>

        <div style={{ margin: "10px 14px 18px", background: "#fffbe6", border: "1px solid #fde68a", padding: 14, borderRadius: 12, fontSize: 11.5, color: "#78350f", lineHeight: 1.6 }}>
          <b style={{ color: "#92400e", fontSize: 12 }}>Disclaimer & Trademark Notice:</b><br />
          We are an independent third-party kitchen chimney service provider operating only in Noida & Ghaziabad including {area.name} (PIN {area.pin}) near {area.landmark}. We are <b>NOT</b> the authorized service center of {brand}, Faber, Glen, Hafele, Kaff, Siemens, Elica, Hindware or any other brand. All brand names, logos and trademarks shown on this page like {brand} are property of their respective owners and are used only for identification / reference purpose to describe service we provide. Customers are advised to contact official brand for company warranty or authorized service. We provide only paid repair, cleaning, installation and maintenance on chargeable basis. 30-day service warranty is from our side only.
        </div>

        {showCallPopup && (
          <div style={{ position: "fixed", inset: 0, zIndex: 99999, background: "rgba(0,0,0,0.65)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
            <div style={{ background: "#fff", width: "100%", maxWidth: 360, borderRadius: 20, padding: 20, textAlign: "center", position: "relative" }}>
              <button onClick={() => setShowCallPopup(false)} style={{ position: "absolute", top: 10, right: 12, border: "none", background: "#f3f4f6", width: 28, height: 28, borderRadius: 20, fontWeight: 800 }}>X</button>
              <div style={{ fontSize: 40 }}>📞</div>
              <h3 style={{ margin: "10px 0 4px", fontWeight: 900, fontSize: 19 }}>Expert in {area.name}</h3>
              <div style={{ fontSize: 12.5, color: "#666", marginTop: 5 }}>{fullTitles[currentSlide].replace("AREA", area.name)}</div>
              <a href={`tel:${phone}`} style={{ display: "block", background: "#000", color: "#fff", padding: 13, borderRadius: 30, textDecoration: "none", fontWeight: 900, marginTop: 14 }}>Call Now Expert</a>
              <button onClick={() => { setShowCallPopup(false); formRef.current?.scrollIntoView({ behavior: "smooth" }) }} style={{ display: "block", width: "100%", background: "#fff", border: "1px solid #ddd", padding: 11, borderRadius: 30, fontWeight: 800, marginTop: 9 }}>Book Online</button>
            </div>
          </div>
        )}

        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 800, background: "#fff", borderTop: "1px solid #ddd", padding: 9, display: "flex", gap: 9, zIndex: 30 }}>
          <a href={`tel:${phone}`} style={{ flex: 1, background: "#000", color: "#fff", textAlign: "center", padding: 13, borderRadius: 12, textDecoration: "none", fontWeight: 900, fontSize: 14 }}>Call Expert</a>
          <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })} style={{ flex: 1, background: "#e11d48", color: "#fff", border: "none", padding: 13, borderRadius: 12, fontWeight: 900, fontSize: 14 }}>Book Now</button>
        </div>
      </div>
    </>
  )
}
