"use client"
import { useState, useEffect, useRef } from "react"

const areaInfo:any = {
  "jaypee-greens": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk", map: "Jaypee Greens Greater Noida" },
  "sector-150": { full: "Sector 150 Noida", pin: "201310", near: "Sports City", map: "Sector 150 Noida" },
  "wishtown-128": { full: "Wishtown Sector 128", pin: "201304", near: "JP Hospital", map: "Jaypee Wishtown Sector 128" },
  "indirapuram": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall", map: "Indirapuram Ghaziabad" },
  "vaishali-sec-5": { full: "Vaishali Sector 5", pin: "201010", near: "Vaishali Metro", map: "Vaishali Sector 5 Ghaziabad" },
  "raj-nagar": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC", map: "Raj Nagar Ghaziabad" }
}

export default function Page({ params }: any){
 const slug = (params?.slug || "glen-vaishali-sec-5").toLowerCase()
 const brandRaw = slug.split("-")[0] || "glen"
 const areaKey = slug.split("-").slice(1).join("-") || "vaishali-sec-5"
 const areaData = areaInfo[areaKey] || { full: areaKey.replace(/-/g," "), pin: "201301", near: "NCR", map: areaKey }
 const Brand = brandRaw.charAt(0).toUpperCase()+brandRaw.slice(1)
 const area = areaData.full
 const isGlen = brandRaw==="glen"
 const isSiemens = brandRaw==="siemens"
 const red = isGlen || isSiemens
 const formRef = useRef<any>(null)
 const [showPopup, setShowPopup] = useState(false)
 const [showNum, setShowNum] = useState(false)
 const [typed, setTyped] = useState("")
 const phone="8796284796"
 const hide="8796XXXX96"
 const fullText = `Professional ${Brand} chimney service repair in ${area} near ${areaData.near}. We repair not working, heavy noise, low suction, auto clean failure, oil leakage, motor burning, PCB failure same day in PIN ${areaData.pin}.`

 useEffect(()=>{
   document.title=`${Brand} Chimney Service Repair in ${area}`
   const t=setTimeout(()=>setShowPopup(true),4000)
   let i=0
   const ti=setInterval(()=>{ setTyped(fullText.slice(0,i)); i++; if(i>fullText.length) clearInterval(ti) },70)
   return()=>{ clearTimeout(t); clearInterval(ti) }
 },[fullText])

 const scrollToForm=()=>{ formRef.current?.scrollIntoView({behavior:'smooth'}); setShowPopup(false) }
 const handleCall=()=>{ setShowNum(true); window.location.href=`tel:${phone}` }

 return(
 <div style={{maxWidth:860,margin:'0 auto',background:'#fff',fontFamily:'system-ui',paddingBottom:120}}>
  {/* RUNNING BIGGER + SLOWER */}
  <div style={{background:red?'#dc2626':'#111',color:'#fff',fontSize:14,fontWeight:800,padding:'10px 0',overflow:'hidden',whiteSpace:'nowrap',letterSpacing:0.5}}>
    <div style={{display:'inline-block',animation:'marquee 30s linear infinite'}}>📞 CALL ${hide} FOR ${Brand.toUpperCase()} CHIMNEY SERVICE IN ${area.toUpperCase()} PIN ${areaData.pin} • 30 MIN VISIT • NOT WORKING • NOISE REPAIR • DEEP CLEANING • SAME DAY • &nbsp;&nbsp;&nbsp; 📞 CALL ${hide} FOR ${Brand.toUpperCase()} SERVICE IN ${area.toUpperCase()} • </div>
  </div>

  {/* HEADER */}
  <div style={{background:'#fff',borderBottom:'3px solid #111',padding:'14px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:0,zIndex:50}}>
    <div style={{display:'flex',alignItems:'center',gap:12}}>
      <div style={{width:42,height:42,background:red?'#dc2626':'#111',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,color:'#fff'}}>🍳</div>
      <div><div style={{fontWeight:900,fontSize:16,color:red?'#dc2626':'#111'}}>{Brand.toUpperCase()} CHIMNEY SERVICE REPAIR</div><div style={{fontSize:11,color:'#666',fontWeight:700}}>{area.toUpperCase()} • PIN {areaData.pin}</div></div>
    </div>
    <button onClick={()=>{setShowNum(true); setShowPopup(true)}} style={{background:'#111',color:'#fff',padding:'12px 20px',borderRadius:30,fontWeight:900,border:0,fontSize:14,display:'flex',alignItems:'center',gap:8,boxShadow:'0 6px 18px rgba(0,0,0,0.25)',animation:'pulse 2s infinite'}}>
      <span style={{width:10,height:10,background:'#22c55e',borderRadius:10,display:'inline-block'}}></span> Call {showNum?phone:hide}
    </button>
  </div>

  <div style={{padding:20}}>
    {/* GLEN RED HEADING */}
    <h1 style={{fontSize:32,fontWeight:900,lineHeight:1.15,margin:'10px 0',color:red?'#dc2626':'#111'}}>{Brand} Chimney Service Repair in {area} - Pincode {areaData.pin} - 30 Min Visit</h1>

    {/* PROFESSIONAL TYPEWRITER HERE - SLOW */}
    <div style={{fontSize:16,color:'#222',background:'#f8fafc',padding:16,borderRadius:14,borderLeft:`5px solid ${red?'#dc2626':'#111'}`,minHeight:110,lineHeight:1.7}}>
      {typed}<span style={{animation:'blink 1s infinite',fontWeight:900}}>|</span>
    </div>

    {/* SERVICE CARD BIGGER */}
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14,marginTop:22}}>
      {[
        {t:`${Brand} Deep Cleaning`,d:'Complete oil, grease, filter, blower chemical wash. Heavy oil removal.',i:'🧹',b:'Most Booked'},
        {t:`${Brand} Not Working`,d:'Chimney not working, no power, no suction, switch fail, motor burn.',i:'⚡',b:'90 Days Warranty'},
        {t:`${Brand} Installation`,d:'New chimney ducting, core cutting, fitting, clamp installation.',i:'🏠',b:'Same Day Visit'},
      ].map(c=>(
        <div key={c.t} style={{border:'2px solid #e5e7eb',borderRadius:20,padding:18,background:'#fff',boxShadow:'0 8px 20px rgba(0,0,0,0.08)'}}>
          <div style={{display:'flex',justifyContent:'space-between'}}><div style={{fontSize:32}}>{c.i}</div><div style={{background:'#dcfce7',color:'#15803d',fontSize:10,fontWeight:900,padding:'4px 10px',borderRadius:20,height:20}}>{c.b}</div></div>
          <div style={{fontWeight:900,fontSize:16,marginTop:14,lineHeight:1.3,color:red?'#dc2626':'#111'}}>{c.t}</div>
          <div style={{fontSize:13,color:'#555',marginTop:8,lineHeight:1.5}}>{c.d}</div>
          <button onClick={scrollToForm} style={{marginTop:16,width:'100%',padding:'12px 0',borderRadius:12,border:0,background:'#111',color:'#fff',fontWeight:900,fontSize:14}}>Book Now</button>
        </div>
      ))}
    </div>

    {/* LONG PAGE CONTENT - BIG WORDS ENGLISH */}
    <div style={{marginTop:30,fontSize:16,lineHeight:2,color:'#1f2937'}}>
      <h2 style={{fontSize:22,fontWeight:900,color:red?'#dc2626':'#111'}}>{Brand} Chimney Service in {area} - Not Working Repair Specialist</h2>
      <p><b>{Brand} chimney service repair in {area} PIN {areaData.pin}</b> is available daily near {areaData.near}. Our expert technician provides complete {Brand} chimney service repair solutions for residential kitchens, villas, apartments, builder floors in {area}. If your {Brand} chimney is not working, making heavy noise, low suction, oil leakage, auto clean failure, motor burning, PCB failure, we fix same day in 30 minutes visit.</p>

      <h3 style={{fontSize:20,fontWeight:900,marginTop:28}}>{Brand} Chimney Not Working in {area} - Quick Repair</h3>
      <p>{Brand} chimney not working is most common complaint in {area}. Reasons are power failure, switch failure, capacitor failure, PCB failure, motor burning due to oil. Our technician in {area} near {areaData.near} checks power cable, fuse, PCB continuity, motor winding, capacitor, and repairs on spot. We have original {Brand} motor, PCB, capacitor stock for {area} PIN {areaData.pin}. 90 percent not working problems solved in first visit.</p>

      <h3 style={{fontSize:20,fontWeight:900,marginTop:28}}>{Brand} Chimney Deep Cleaning Service in {area}</h3>
      <p>{Brand} deep cleaning in {area} is required every 3 to 4 months. Oil blocks filter, blower, oil collector. Our team does full disassembly, chemical cleaning of baffle filter, mesh filter, blower fan, motor housing, oil tray. After deep cleaning suction power restores to 100 percent. Service available in {areaData.near} apartments, high rise societies, villas.</p>

      <h3 style={{fontSize:20,fontWeight:900,marginTop:28}}>{Brand} Chimney Noise Repair in {area}</h3>
      <p>{Brand} noise repair in {area} is speciality. Heavy noise due to loose blower, dust in motor bearing, oil jam, broken fan blade. In {area} high rise flats noise complaint very common. Our technician does blower tightening, bearing oiling, motor cleaning, blade alignment. Noise repair done in 1 hour same day in PIN {areaData.pin}.</p>

      <h3 style={{fontSize:20,fontWeight:900,marginTop:28}}>{Brand} Chimney Installation Service in {area}</h3>
      <p>{Brand} installation in {area} includes ducting, core cutting for outlet, electric point, clamp fitting. We follow building guidelines in societies. Proper duct size important for suction. Installation same day in {area} PIN {areaData.pin}.</p>

      <h3 style={{fontSize:20,fontWeight:900,marginTop:28}}>Why Choose Us for {Brand} Service in {area}?</h3>
      <p>1. 30 Minutes Visit in {area} PIN {areaData.pin} near {areaData.near}<br/>2. {Brand} Specialist - 8 Plus Years Experience<br/>3. Original Spare Parts - Motor, PCB, Filter<br/>4. 90 Days Warranty on Service<br/>5. Transparent Work - No Hidden Charges<br/>6. 1000 Plus Customers in {area} Noida Ghaziabad<br/>7. Same Day Service - Morning Evening Slot<br/>8. Expert for {Brand} Not Working, Noise, Low Suction</p>

      <h3 style={{fontSize:20,fontWeight:900,marginTop:28}}>Service Coverage in Noida Ghaziabad</h3>
      <p>We cover entire Noida Ghaziabad: Jaypee Greens Greater Noida, Sector 150 Noida Sports City, Wishtown Sector 128, Indirapuram Ghaziabad, Vaishali Sector 5, Raj Nagar, Kaushambi, Crossing Republik, Noida Extension. {Brand} chimney service repair available in all societies in PIN {areaData.pin}. Call {hide} for booking.</p>
    </div>

    {/* KEYWORDS BIG */}
    <div style={{marginTop:32}}>
      <h2 style={{fontSize:26,fontWeight:900,background:red?'#dc2626':'#111',color:'#fff',padding:'16px 18px',borderRadius:14}}>{Brand} Chimney Noise Repair in {area} - Not Working Service</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:14}}>
        {[
          `${Brand.toLowerCase()} chimney service in ${area}`,
          `${Brand.toLowerCase()} chimney not working in ${area}`,
          `${Brand.toLowerCase()} chimney noise repair in ${area}`,
          `${Brand.toLowerCase()} chimney repair in ${area}`,
          `${Brand.toLowerCase()} chimney deep cleaning in ${area}`,
          `${Brand.toLowerCase()} chimney installation in ${area}`,
          `${Brand.toLowerCase()} chimney service repair in ${area}`,
          `${Brand.toLowerCase()} chimney service in ${area} noida`,
        ].map(k=><div key={k} style={{background:'#f9fafb',border:'1px solid #eee',padding:14,borderRadius:12,fontSize:14,fontWeight:700}}>{k}</div>)}
      </div>
    </div>

    <div style={{marginTop:28}}>
      <iframe title="map" width="100%" height="320" style={{border:0,borderRadius:18}} src={`https://maps.google.com/maps?q=${encodeURIComponent(areaData.map)}&z=14&output=embed`}></iframe>
    </div>

    <div style={{marginTop:30,borderTop:'3px solid #111',paddingTop:16,fontSize:12,color:'#666',lineHeight:1.7}}>
      <b>DISCLAIMER - WE ARE INDEPENDENT SERVICE PROVIDER</b><br/>We are independent service provider in {area} PIN {areaData.pin}. We are NOT authorized center of {Brand}. {Brand} trademark belongs to owner. Used for reference to describe expertise for {Brand} service repair in {area} Noida Ghaziabad {areaData.near}. For brand authorized service contact brand directly. Call {hide} for {Brand} service repair in {area}.
    </div>
  </div>

  {showPopup && (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.75)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:200,padding:18}}>
      <div style={{background:'#fff',borderRadius:22,padding:22,maxWidth:380,width:'100%'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}><div style={{width:46,height:46,background:'#f3f4f6',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22}}>🍳</div><button onClick={()=>setShowPopup(false)} style={{border:0,background:'#f3f4f6',width:34,height:34,borderRadius:20,fontWeight:900}}>✕</button></div>
        <div style={{fontWeight:900,fontSize:21,marginTop:12}}>{Brand} Service in {area}</div>
        <div style={{fontSize:13,color:'#666'}}>PIN {areaData.pin} • 30 Min Visit • {areaData.near}</div>
        <div style={{background:'#f9fafb',borderRadius:12,padding:12,marginTop:14,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><div style={{fontSize:11,color:'#666'}}>Number Hidden</div><div style={{fontWeight:900,fontSize:18}}>{showNum?phone:hide}</div></div>
          <button onClick={()=>setShowNum(!showNum)} style={{fontSize:11,padding:'6px 12px',borderRadius:8,border:'1px solid #ddd',background:'#fff',fontWeight:700}}>{showNum?'Hide':'Reveal'}</button>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:16}}>
          <button onClick={handleCall} style={{padding:14,borderRadius:12,border:0,background:'#111',color:'#fff',fontWeight:900}}>📞 Call</button>
          <button onClick={scrollToForm} style={{padding:14,borderRadius:12,border:0,background:red?'#dc2626':'#16a34a',color:'#fff',fontWeight:900}}>📅 Book Now</button>
        </div>
      </div>
    </div>
  )}

  <div ref={formRef} style={{display:'none'}}></div>

  <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',borderTop:'3px solid #111',padding:12,display:'flex',gap:10,maxWidth:860,margin:'0 auto',zIndex:60}}>
    <button onClick={handleCall} style={{flex:1,background:'#111',color:'#fff',padding:16,borderRadius:14,fontWeight:900,border:0,fontSize:15}}>{showNum?`Call ${phone}`:`Call ${hide}`}</button>
    <button onClick={scrollToForm} style={{flex:1,background:red?'#dc2626':'#16a34a',color:'#fff',padding:16,borderRadius:14,fontWeight:900,border:0,fontSize:15}}>Book Now</button>
  </div>

  <style>{`@keyframes marquee{0%{transform:translateX(20%)}100%{transform:translateX(-100%)}} @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,0,0,0.7)}70%{box-shadow:0 0 0 14px rgba(0,0,0,0)}100%{box-shadow:0 0 0 0 rgba(0,0,0,0)}} @keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}`}</style>
 </div>
 )
}
