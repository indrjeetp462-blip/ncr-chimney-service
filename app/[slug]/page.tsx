"use client"
import { useState, useEffect, useRef } from "react"

const areaInfo:any = {
  "jaypee-greens": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk", map: "Jaypee Greens Greater Noida" },
  "sector-150": { full: "Sector 150 Noida", pin: "201310", near: "Sports City", map: "Sector 150 Noida" },
  "wishtown-128": { full: "Wishtown Sector 128", pin: "201304", near: "JP Hospital", map: "Jaypee Wishtown Sector 128 Noida" },
  "indirapuram": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall", map: "Indirapuram Ghaziabad" },
  "vaishali-sec-5": { full: "Vaishali Sector 5", pin: "201010", near: "Vaishali Metro", map: "Vaishali Sector 5 Ghaziabad" },
  "raj-nagar": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC", map: "Raj Nagar Ghaziabad" }
}

export default function Page({ params }: any){
 const slug = (params?.slug || "kaff-jaypee-greens").toLowerCase()
 const brandRaw = slug.split("-")[0] || "kaff"
 const areaKey = slug.split("-").slice(1).join("-") || "jaypee-greens"
 const areaData = areaInfo[areaKey] || { full: areaKey.replace(/-/g," "), pin: "201301", near: "NCR", map: areaKey }
 const Brand = brandRaw.charAt(0).toUpperCase()+brandRaw.slice(1)
 const area = areaData.full
 const isKaff = brandRaw==="kaff"
 const formRef = useRef<any>(null)
 const [showPopup, setShowPopup] = useState(false)
 const [typed, setTyped] = useState("")
 const phone="8796284796"
 const fullText = `Professional ${Brand} chimney service repair in ${area} near ${areaData.near}. We repair not working, heavy noise, low suction, auto clean failure, oil leakage, motor burning, PCB failure same day in PIN ${areaData.pin}.`

 useEffect(()=>{
   document.title=`${Brand} Chimney Service Not Working in ${area}`
   const t=setTimeout(()=>setShowPopup(true),4000)
   let i=0
   const ti=setInterval(()=>{ setTyped(fullText.slice(0,i)); i++; if(i>fullText.length) clearInterval(ti) },60)
   return()=>{ clearTimeout(t); clearInterval(ti) }
 },[fullText])

 const scrollToForm=()=>{ formRef.current?.scrollIntoView({behavior:'smooth'}); setShowPopup(false) }
 const handleCall=()=>{ window.location.href=`tel:${phone}` }

 return(
 <div style={{maxWidth:860,margin:'0 auto',background:'#f8fafc',fontFamily:'system-ui',paddingBottom:100,overflowX:'hidden'}}>
  {/* TOP FIXED - SCROLL NAHI HOGA */}
  <div style={{background:'#111',color:'#fff',fontSize:12,fontWeight:800,padding:'10px 14px',textAlign:'center',position:'sticky',top:0,zIndex:100,letterSpacing:0.5}}>
    ⚡ {Brand.toUpperCase()} SERVICE IN {area.toUpperCase()} PIN {areaData.pin} • 30 MIN VISIT • SAME DAY
  </div>

  <div style={{background:'#fff',borderBottom:'2px solid #111',padding:'12px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:36,zIndex:99}}>
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      <div style={{width:42,height:42,background:isKaff?'#dc2626':'#111',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,color:'#fff'}}>🍳</div>
      <div><div style={{fontWeight:900,fontSize:14,color:isKaff?'#dc2626':'#111',lineHeight:1.1}}>{Brand.toUpperCase()} CHIMNEY SERVICE REPAIR</div><div style={{fontSize:11,color:'#666',fontWeight:700}}>{area.toUpperCase()} • PIN {areaData.pin}</div></div>
    </div>
    <button onClick={()=>setShowPopup(true)} style={{background:'#111',color:'#fff',padding:'10px 16px',borderRadius:30,fontWeight:900,border:0,fontSize:13,animation:'pulse 2s infinite'}}>Call Now</button>
  </div>

  <div style={{padding:14}}>
    <div style={{background:isKaff?'#dc2626':'#111',color:'#fff',padding:'22px 18px',borderRadius:20,boxShadow:'0 12px 30px rgba(0,0,0,0.2)'}}>
      <h1 style={{fontSize:isKaff?28:24,fontWeight:900,lineHeight:1.25,margin:0}}>{Brand} Chimney Service Not Working in {area} - Pincode {areaData.pin} - 30 Min Visit</h1>
      <div style={{marginTop:12,fontSize:12,background:'rgba(255,255,255,0.2)',display:'inline-block',padding:'6px 12px',borderRadius:20}}>Professional {Brand} Service Repair • {areaData.near} • PIN {areaData.pin}</div>
    </div>

    <div style={{fontSize:15,color:'#111',background:'#fff',padding:14,borderRadius:14,border:'1px solid #e5e7eb',marginTop:14,lineHeight:1.7,minHeight:90,boxShadow:'0 4px 12px rgba(0,0,0,0.05)'}}>
      {typed}<span style={{animation:'blink 1s infinite',color:'#dc2626',fontWeight:900}}>|</span>
    </div>

    {/* PROFESSIONAL SERVICE CARD + BOOK NOW 3 PE */}
    <div style={{display:'grid',gridTemplateColumns:'1fr',gap:14,marginTop:18}}>
      {[
        {t:`${Brand} Deep Cleaning`,d:`Complete chemical wash for filter, blower, motor, oil tray. Suction 100% restore. Heavy oil, grease removal in ${area} PIN ${areaData.pin}.`,i:'🧹',b:'Most Booked',c:'#fef3c7'},
        {t:`${Brand} Not Working`,d:`No power, no suction, touch fail, motor burn, PCB fail. Same day repair in ${area} near ${areaData.near} with original parts.`,i:'⚡',b:'90 Days Warranty',c:'#fee2e2'},
        {t:`${Brand} Installation`,d:`Ducting, core cutting, fitting, clamp installation. Proper suction alignment as per building norms in ${area} societies.`,i:'🏠',b:'Same Day Visit',c:'#dcfce7'},
      ].map(card=>(
        <div key={card.t} style={{background:'#fff',borderRadius:18,padding:16,border:'2px solid #111',display:'flex',flexDirection:'column',gap:12,boxShadow:'0 8px 20px rgba(0,0,0,0.08)',transition:'0.3s'}}>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <div style={{width:56,height:56,background:card.c,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,flexShrink:0}}>{card.i}</div>
            <div style={{flex:1}}><div style={{fontWeight:900,fontSize:16,color:isKaff?'#dc2626':'#111'}}>{card.t}</div><div style={{fontSize:12,color:'#666',marginTop:2,lineHeight:1.4}}>{card.d}</div></div>
            <div style={{background:'#111',color:'#fff',fontSize:10,fontWeight:800,padding:'4px 8px',borderRadius:20,whiteSpace:'nowrap'}}>{card.b}</div>
          </div>
          <button onClick={scrollToForm} style={{width:'100%',background:'#111',color:'#fff',padding:'12px 0',borderRadius:12,fontWeight:900,border:0,fontSize:14,animation:'shake 3s infinite'}}>Book Now</button>
        </div>
      ))}
    </div>

    {/* BOOK FORM FIT */}
    <div ref={formRef} style={{marginTop:18,background:'#fff',borderRadius:20,padding:18,border:'3px solid #111',boxShadow:'0 10px 30px rgba(0,0,0,0.1)',boxSizing:'border-box'}}>
      <div style={{fontWeight:900,fontSize:19,color:isKaff?'#dc2626':'#111'}}>📅 Book {Brand} Service Not Working in {area}</div>
      <div style={{fontSize:12,color:'#666',marginTop:4}}>PIN {areaData.pin} • Technician in 30 Minutes • Same Day</div>
      <form onSubmit={(e)=>{e.preventDefault(); setShowPopup(true)}} style={{display:'grid',gap:10,marginTop:14}}>
        <input required placeholder="Your Full Name" style={{width:'100%',boxSizing:'border-box',padding:14,borderRadius:12,border:'2px solid #e5e7eb',fontSize:14}}/>
        <input required placeholder="Mobile Number" style={{width:'100%',boxSizing:'border-box',padding:14,borderRadius:12,border:'2px solid #e5e7eb',fontSize:14}}/>
        <input placeholder={`${area} Full Address - ${areaData.near}`} style={{width:'100%',boxSizing:'border-box',padding:14,borderRadius:12,border:'2px solid #e5e7eb',fontSize:14}}/>
        <select style={{width:'100%',boxSizing:'border-box',padding:14,borderRadius:12,border:'2px solid #e5e7eb',fontSize:14}}><option>{Brand} Service Not Working in {area}</option><option>{Brand} Deep Cleaning in {area}</option><option>{Brand} Installation in {area}</option></select>
        <button type="submit" style={{width:'100%',background:isKaff?'#dc2626':'#111',color:'#fff',padding:16,borderRadius:12,fontWeight:900,border:0,fontSize:16,animation:'pulse 2s infinite'}}>Book Now</button>
      </form>
      <div style={{fontSize:11,color:'#888',marginTop:10,textAlign:'center'}}>✓ 30 Min Visit • ✓ 90 Days Warranty • ✓ Original Parts • ✓ Same Day</div>
    </div>

    {/* 200 LINE CONTENT - DEEP CLEANING / REPAIR / INSTALLATION */}
    <div style={{marginTop:24,background:'#fff',borderRadius:18,padding:18,border:'1px solid #e5e7eb',lineHeight:1.9,fontSize:14.5,color:'#111'}}>
      <h2 style={{fontSize:20,fontWeight:900,color:isKaff?'#dc2626':'#111',marginBottom:10}}>{Brand} Chimney Deep Cleaning Service in {area} - Complete Guide</h2>
      <p>1. {Brand} deep cleaning in {area} PIN {areaData.pin} is most important for kitchen hygiene. Oil and grease block filter and blower.</p>
      <p>2. Every 3 to 4 months deep cleaning required in {area} near {areaData.near} apartments because Indian cooking generates heavy oil.</p>
      <p>3. Our process: Full disassembly of baffle filter, mesh filter, oil collector, blower fan, motor housing.</p>
      <p>4. Chemical dipping in degreaser for 30 minutes removes burnt oil layer from {Brand} chimney parts in {area}.</p>
      <p>5. High pressure water wash cleans inner duct and blower blades, suction restores to 100 percent.</p>
      <p>6. Motor cleaning with dry cloth and contact cleaner ensures motor life increases for {Brand} in {area}.</p>
      <p>7. Filter replacement if damaged, we have original {Brand} filters for {area} PIN {areaData.pin}.</p>
      <p>8. After deep cleaning, we test suction with tissue paper test in {area} kitchen.</p>
      <p>9. Deep cleaning prevents oil dripping from chimney onto gas stove in {area} homes.</p>
      <p>10. Regular deep cleaning saves electricity bill and prevents motor burning for {Brand} chimney in {area}.</p>

      <h2 style={{fontSize:20,fontWeight:900,color:isKaff?'#dc2626':'#111',marginTop:24}}>{Brand} Chimney Repair Service in {area} - Not Working, Noise, Low Suction</h2>
      <p>11. {Brand} chimney not working in {area} is common complaint in {areaData.near} societies.</p>
      <p>12. Not working reasons: Power cable cut, fuse blown, switch failure, capacitor failure, PCB failure, motor winding burnt.</p>
      <p>13. Our technician in {area} carries multimeter to check power supply, continuity, capacitor value.</p>
      <p>14. {Brand} touch panel not working repair in {area} - we replace touch sensor or full PCB if needed.</p>
      <p>15. {Brand} noise repair in {area} - heavy noise due to loose blower nut, dust in bearing, oil jam, broken fan blade.</p>
      <p>16. Noise repair process: Tighten blower, clean bearing, apply grease, balance fan in {area} PIN {areaData.pin}.</p>
      <p>17. {Brand} low suction repair in {area} - suction low due to blocked filter, blocked duct, motor slow.</p>
      <p>18. We clean duct, replace motor capacitor, clean blower for full suction restore in {area}.</p>
      <p>19. {Brand} auto clean not working in {area} - auto clean button failure, water pump failure, heating element failure.</p>
      <p>20. Auto clean repair includes pump replacement, pipe cleaning, heating coil check in {area}.</p>
      <p>21. {Brand} oil leakage problem in {area} - oil collector full, pipe choked, oil tray damaged.</p>
      <p>22. We empty oil collector, clean pipe, replace oil tray in {area} homes same day.</p>
      <p>23. {Brand} light not working in {area} - LED bulb fused, wiring loose, we replace LED in 10 minutes.</p>
      <p>24. All repairs with 90 days warranty in {area} PIN {areaData.pin} near {areaData.near}.</p>

      <h2 style={{fontSize:20,fontWeight:900,color:isKaff?'#dc2626':'#111',marginTop:24}}>{Brand} Chimney Installation Service in {area} - Ducting, Core Cutting</h2>
      <p>25. {Brand} installation in {area} includes wall marking, drilling, clamp fitting, ducting, testing.</p>
      <p>26. Proper height installation is 26 to 30 inches above gas stove for best suction in {area} kitchens.</p>
      <p>27. Core cutting for duct outlet - we do 6 inch core cutting with machine without dust in {area} apartments.</p>
      <p>28. Ducting installation - aluminum flexible duct or PVC duct as per building norms in {area} societies like {areaData.near}.</p>
      <p>29. Duct length should be minimum and straight for best performance of {Brand} chimney in {area}.</p>
      <p>30. Electrical point check - 15 amp socket needed, proper earthing required in {area} PIN {areaData.pin}.</p>
      <p>31. Installation testing includes suction test, noise test, light test, auto clean demo in {area} home.</p>
      <p>32. We provide installation warranty card and demo of cleaning filter in {area}.</p>
      <p>33. {Brand} chimney re-installation during kitchen renovation in {area} also available.</p>
      <p>34. Same day installation service in Jaypee Greens, Sector 150, Wishtown 128, Indirapuram, Vaishali, Raj Nagar.</p>
      <p>35. Why choose us for {Brand} service in {area}? 8 plus years experience, 1000 plus customers, original parts, 30 min visit, transparent charges, 90 days warranty, trained technicians for {Brand} chimney not working, deep cleaning, installation in {area} PIN {areaData.pin}.</p>
      <p>36. Book {Brand} chimney service not working in {area} today - Call Now and Book Now buttons below for instant booking.</p>
    </div>

    {/* MAPS NICHE */}
    <div style={{marginTop:20,borderRadius:18,overflow:'hidden',border:'3px solid #111'}}>
      <div style={{background:'#111',color:'#fff',padding:'12px 16px',fontWeight:900,fontSize:14}}>📍 {Brand} Service Location - {area} - PIN {areaData.pin}</div>
      <iframe title="map" width="100%" height="380" style={{border:0,display:'block'}} loading="lazy" src={`https://maps.google.com/maps?q=${encodeURIComponent(areaData.map)}&z=14&output=embed`}></iframe>
      <div style={{background:'#fff',padding:'10px 14px',fontSize:12,fontWeight:700}}>Service Area: {area} Near {areaData.near} - PIN {areaData.pin} - 30 Min Visit - Same Day {Brand} Repair</div>
    </div>

    <div style={{marginTop:18,fontSize:11,color:'#666',borderTop:'2px solid #111',paddingTop:12,lineHeight:1.6}}>DISCLAIMER: We are independent service provider in {area} PIN {areaData.pin}. We are NOT authorized center of {Brand}. {Brand} trademark belongs to owner. Used for reference only. Independent {Brand} chimney service repair in {area}.</div>
  </div>

  {showPopup && (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.85)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:200,padding:16}}>
      <div style={{background:'#fff',borderRadius:20,padding:20,maxWidth:360,width:'100%'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontWeight:900,fontSize:18}}>{Brand} Service Not Working</div><button onClick={()=>setShowPopup(false)} style={{border:0,background:'#f3f4f6',width:32,height:32,borderRadius:20,fontWeight:900}}>✕</button></div>
        <div style={{fontSize:12,color:'#666',marginTop:4}}>{area} PIN {areaData.pin} • 30 Min Visit</div>
        <div style={{background:'#f9fafb',borderRadius:12,padding:14,marginTop:14,textAlign:'center',fontSize:13,fontWeight:700}}>Professional {Brand} Technician in {area} Near {areaData.near}</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:16}}>
          <button onClick={handleCall} style={{padding:15,borderRadius:12,border:0,background:'#111',color:'#fff',fontWeight:900,animation:'pulse 1.5s infinite'}}>📞 Call Now</button>
          <button onClick={scrollToForm} style={{padding:15,borderRadius:12,border:0,background:isKaff?'#dc2626':'#111',color:'#fff',fontWeight:900}}>📅 Book Now</button>
        </div>
        <div style={{fontSize:10,color:'#999',textAlign:'center',marginTop:10}}>Number Hidden - Direct Call Connects</div>
      </div>
    </div>
  )}

  <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',borderTop:'3px solid #111',padding:10,display:'flex',gap:10,maxWidth:860,margin:'0 auto',zIndex:60}}>
    <button onClick={handleCall} style={{flex:1,background:'#111',color:'#fff',padding:16,borderRadius:14,fontWeight:900,border:0,fontSize:15,animation:'pulse 2s infinite'}}>Call Now</button>
    <button onClick={scrollToForm} style={{flex:1,background:isKaff?'#dc2626':'#111',color:'#fff',padding:16,borderRadius:14,fontWeight:900,border:0,fontSize:15,animation:'shake 3s infinite'}}>Book Now</button>
  </div>

  <style>{`@keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}} @keyframes pulse{0%{transform:scale(1);box-shadow:0 0 0 0 rgba(0,0,0,0.7)}70%{transform:scale(1.05);box-shadow:0 0 0 12px rgba(0,0,0,0)}100%{transform:scale(1);box-shadow:0 0 0 0 rgba(0,0,0,0)}} @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-2px)}75%{transform:translateX(2px)}} html{scroll-behavior:smooth}`}</style>
 </div>
 )
}
