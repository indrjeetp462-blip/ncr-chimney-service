"use client"
import { useState, useEffect } from "react"

const areaInfo:any = {
  "jaypee-greens": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk, Surajpur", map: "Jaypee Greens" },
  "sector-150": { full: "Sector 150 Noida", pin: "201310", near: "Sports City, Purvanchal", map: "Sector 150 Noida" },
  "wishtown-128": { full: "Wishtown Sector 128", pin: "201304", near: "JP Hospital, Jaypee Wishtown", map: "Wishtown 128" },
  "indirapuram": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall, Kala Pathar", map: "Indirapuram" },
  "vaishali-sec-5": { full: "Vaishali Sector 5", pin: "201010", near: "Vaishali Metro, Sector 4", map: "Vaishali Sector 5" },
  "raj-nagar": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC, Kavi Nagar", map: "Raj Nagar Ghaziabad" }
}

export default function Page({ params }: any){
 const slug = (params?.slug || "faber-jaypee-greens").toLowerCase()
 const parts = slug.split("-")
 const brandRaw = parts[0] || "faber"
 const areaKey = parts.slice(1).join("-") || "jaypee-greens"
 const areaData = areaInfo[areaKey] || { full: areaKey.replace(/-/g," "), pin: "201301", near: "NCR", map: areaKey }
 const Brand = brandRaw.charAt(0).toUpperCase()+brandRaw.slice(1)
 const area = areaData.full

 const [showPopup, setShowPopup] = useState(false)
 const [showNumber, setShowNumber] = useState(false)
 const [typed, setTyped] = useState("")
 const fullTyped = `${Brand} Chimney Expert in ${area} - 30 Min Visit`

 useEffect(()=>{
   let i=0
   const t=setInterval(()=>{ setTyped(fullTyped.slice(0,i)); i++; if(i>fullTyped.length) clearInterval(t) },40)
   const p=setTimeout(()=>setShowPopup(true),4000)
   return()=>{ clearInterval(t); clearTimeout(p) }
 },[fullTyped])

 const phone="8796284796"
 const hidePhone = showNumber? phone : "8796XXXX96"

 const keywords = [
   `${brandRaw} chimney service in ${area}`,
   `${brandRaw} chimney repair in ${area}`,
   `${brandRaw} chimney not working in ${area}`,
   `${brandRaw} chimney noise in ${area}`,
   `${brandRaw} chimney installation in ${area}`,
   `${brandRaw} chimney deep cleaning in ${area}`,
   `${brandRaw} chimney service noida`,
   `${brandRaw} chimney repair noida`,
 ]

 return(
 <div style={{maxWidth:820,margin:'0 auto',background:'#fff',fontFamily:'system-ui',paddingBottom:90}}>
  {/* HEADER */}
  <div style={{background:'#000',color:'#fff',padding:'12px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:0,zIndex:50}}>
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      <div style={{fontSize:28}}>🍳</div>
      <div><div style={{fontWeight:900,fontSize:14}}>{Brand.toUpperCase()} CHIMNEY EXPERT</div><div style={{fontSize:9,opacity:0.7}}>SEC {area.toUpperCase()} PIN {areaData.pin} • INDEPENDENT SERVICE</div></div>
    </div>
    <a href={`tel:${phone}`} style={{background:'#e11d48',color:'#fff',padding:'8px 14px',borderRadius:8,textDecoration:'none',fontWeight:800,fontSize:12}}>Call Now</a>
  </div>

  {/* HERO WITH TYPEWRITER */}
  <div style={{padding:20}}>
    <div style={{background:'#fef2f2',border:'1px solid #fecaca',color:'#991b1b',padding:'6px 10px',borderRadius:20,fontSize:10,display:'inline-block',fontWeight:700}}>🔥 WE ARE INDEPENDENT - NOT BRAND AUTHORIZED - {Brand.toUpperCase()} SPECIALIST</div>
    <h1 style={{fontSize:24,fontWeight:900,lineHeight:1.2,margin:'12px 0 0 0',minHeight:70}}>{typed}<span style={{animation:'blink 1s infinite'}}>|</span></h1>
    <p style={{fontSize:13,color:'#444',marginTop:10}}>Expert <b>{Brand} chimney service in {area}</b> {areaData.near} me. {Brand} not working, noise, suction low, oil clogging, deep cleaning, PCB repair sab 30 min visit me. PIN {areaData.pin} me same day.</p>

    {/* SERVICE CARDS */}
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10,marginTop:18}}>
      {[
        {t:`${Brand} Deep Cleaning`,d:`Oil, grease, filter`,i:'🧹',p:'₹399'},
        {t:`${Brand} Repair`,d:`Motor, PCB, Noise`,i:'🔧',p:'₹199 visit'},
        {t:`${Brand} Installation`,d:`New duct, fitting`,i:'🏠',p:'₹499'},
      ].map(c=>(
        <div key={c.t} style={{border:'1px solid #eee',borderRadius:14,padding:12,background:'#fff',boxShadow:'0 2px 8px rgba(0,0,0,0.05)'}}>
          <div style={{fontSize:22}}>{c.i}</div><div style={{fontWeight:800,fontSize:12,marginTop:6}}>{c.t}</div><div style={{fontSize:10,color:'#666'}}>{c.d}</div><div style={{fontSize:11,fontWeight:800,color:'#e11d48',marginTop:6}}>{c.p}</div>
        </div>
      ))}
    </div>

    {/* BOOK FORM */}
    <div style={{marginTop:20,border:'2px solid #000',borderRadius:16,padding:16}}>
      <div style={{fontWeight:900}}>📅 Book {Brand} Service in {area}</div>
      <div style={{fontSize:11,color:'#666'}}>PIN {areaData.pin} - 30 Min me technician</div>
      <form onSubmit={(e)=>{e.preventDefault(); alert(`Booked! Call ${phone}`); window.location.href=`tel:${phone}`}} style={{display:'grid',gap:10,marginTop:12}}>
        <input required placeholder="Your Name" style={{padding:12,borderRadius:10,border:'1px solid #ddd'}}/>
        <input required placeholder="Mobile Number" style={{padding:12,borderRadius:10,border:'1px solid #ddd'}}/>
        <select style={{padding:12,borderRadius:10,border:'1px solid #ddd'}}><option>{Brand} Service in {area}</option><option>{Brand} Repair in {area}</option><option>{Brand} Not Working</option><option>{Brand} Noise Issue</option><option>{Brand} Installation</option></select>
        <button type="submit" style={{background:'#000',color:'#fff',padding:14,borderRadius:10,fontWeight:900}}>BOOK NOW - {hidePhone}</button>
      </form>
      <div style={{fontSize:9,color:'#888',marginTop:8,lineHeight:1.4}}>Disclaimer: We are independent service provider. We are NOT authorized by {Brand}. All brand names are for reference only. We provide expert service for {Brand} chimney in {area} Noida / Ghaziabad. Original spare parts available.</div>
    </div>

    {/* 200 LINES CONTENT */}
    <div style={{marginTop:22,fontSize:12,lineHeight:1.7,color:'#222'}}>
      <h2 style={{fontSize:16,fontWeight:900}}>{Brand} Chimney Service in {area} - Complete Details</h2>
      <p><b>{Brand} chimney service in {area} PIN {areaData.pin}</b> ke liye best local expert team. {areaData.near} me daily visit. {Brand} chimney not working, noise aa raha hai, suction kam hai, auto clean fail, oil leakage, light blinking, motor jal gaya? Sab repair same day.</p>
      <p><b>{Brand} chimney deep cleaning in {area}:</b> Har 3-4 mahine me deep cleaning jaruri hai. Hamara team filter, baffle, blower, oil collector pura khol ke chemical cleaning karta hai. {area} me {Brand} deep cleaning se suction 100% wapas.</p>
      <p><b>{Brand} chimney repair in {area}:</b> Motor repair, PCB repair, capacitor change, switch repair, speed control, touch panel. {Brand} ka original spare lagate hain. {areaData.near} me 2 hour me service.</p>
      <p><b>{Brand} chimney installation in {area}:</b> Naya {Brand} chimney installation, ducting, core cutting, electric point. {area} me building guidelines ke hisab se installation.</p>
      <p><b>{Brand} chimney service Noida:</b> Ham Noida / Ghaziabad ke specialist hain. Jaypee Greens, Sector 150, Wishtown, Indirapuram, Vaishali, Raj Nagar sab cover. {Brand} service Noida me 30 min visit guarantee.</p>
      <p><b>Why choose independent {Brand} expert in {area}?</b> Brand service costly + 3-4 din wait. Hamara local expert same day, half price, 90 days warranty. We are independent, not brand authorized, but {Brand} ka 8+ year experience.</p>
      <p>Customer dekhe toh samjhe - Call Now pe click karte hi {Brand} expert se direct baat. Number hide for privacy, click to reveal. Map me {area} location verify kar sakte hain. Service charge sirf ₹199 visit.</p>
    </div>

    {/* ONLY BRAND KEYWORDS */}
    <h3 style={{fontSize:14,fontWeight:900,marginTop:20}}>Keywords - Only {Brand} in {area}</h3>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
      {keywords.map(k=><div key={k} style={{background:'#f3f4f6',padding:10,borderRadius:8,fontSize:11}}>{k}</div>)}
    </div>

    {/* MAP */}
    <div style={{marginTop:20}}>
      <div style={{fontWeight:800,marginBottom:8}}>📍 {Brand} Service Location - {area}</div>
      <iframe title="map" width="100%" height="200" style={{border:0,borderRadius:12}} src={`https://maps.google.com/maps?q=${encodeURIComponent(areaData.map)}&z=14&output=embed`}></iframe>
    </div>

    {/* FOOTER LINKS */}
    <div style={{marginTop:20,display:'flex',flexWrap:'wrap',gap:8}}>
      {["faber-jaypee-greens","glen-sector-150","kaff-indirapuram","siemens-raj-nagar","hafele-wishtown-128"].map(s=><a key={s} href={`/${s}`} style={{fontSize:11,color:'#15803d',textDecoration:'none',border:'1px solid #dcfce7',padding:'6px 10px',borderRadius:20,background:'#f0fdf4'}}>{s.replace(/-/g,' ')}</a>)}
    </div>
  </div>

  {/* POPUP */}
  {showPopup && (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100,padding:20}}>
      <div style={{background:'#fff',borderRadius:16,padding:20,maxWidth:340,width:'100%',textAlign:'center'}}>
        <div style={{fontSize:30}}>🔥</div>
        <div style={{fontWeight:900,fontSize:18}}>{Brand} Expert in {area} - 30 Min!</div>
        <div style={{fontSize:12,color:'#666',marginTop:6}}>PIN {areaData.pin} me technician available. Number hide for privacy.</div>
        <div style={{marginTop:14,display:'flex',gap:10}}>
          <button onClick={()=>setShowPopup(false)} style={{flex:1,padding:12,borderRadius:10,border:'1px solid #ddd',background:'#fff'}}>Close</button>
          <button onClick={()=>{setShowNumber(true); setShowPopup(false); window.location.href=`tel:${phone}`}} style={{flex:1,padding:12,borderRadius:10,border:0,background:'#000',color:'#fff',fontWeight:800}}>{showNumber?`Call ${phone}`:'Reveal Number'}</button>
        </div>
      </div>
    </div>
  )}

  {/* FIXED BOTTOM */}
  <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',borderTop:'1px solid #ddd',padding:10,display:'flex',gap:10,maxWidth:820,margin:'0 auto',zIndex:60}}>
    <a onClick={()=>setShowNumber(true)} href={`tel:${phone}`} style={{flex:1,background:'#000',color:'#fff',textAlign:'center',padding:14,borderRadius:10,textDecoration:'none',fontWeight:900}}>{showNumber?`Call ${phone}`:`Call ${hidePhone}`}</a>
    <a href={`https://wa.me/91${phone}?text=${Brand} chimney service in ${area} PIN ${areaData.pin}`} style={{flex:1,background:'#25D366',color:'#fff',textAlign:'center',padding:14,borderRadius:10,textDecoration:'none',fontWeight:900}}>WhatsApp</a>
  </div>
  <style>{`@keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}`}</style>
 </div>
 )
}
