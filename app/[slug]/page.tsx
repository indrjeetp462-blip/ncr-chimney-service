"use client"
import { useState, useEffect, useRef } from "react"

const areaInfo:any = {
  "jaypee-greens": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk" },
  "sector-150": { full: "Sector 150 Noida", pin: "201310", near: "Sports City" },
  "wishtown-128": { full: "Wishtown Sector 128", pin: "201304", near: "JP Hospital" },
  "indirapuram": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall" },
  "vaishali-sec-5": { full: "Vaishali Sector 5", pin: "201010", near: "Vaishali Metro" },
  "raj-nagar": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC" }
}

export default function Page({ params }: any){
 const slug = (params?.slug || "kaff-vaishali-sec-5").toLowerCase()
 const brandRaw = slug.split("-")[0] || "kaff"
 const areaKey = slug.split("-").slice(1).join("-") || "vaishali-sec-5"
 const areaData = areaInfo[areaKey] || { full: areaKey.replace(/-/g," "), pin: "201301", near: "NCR" }
 const Brand = brandRaw.charAt(0).toUpperCase()+brandRaw.slice(1)
 const area = areaData.full
 const isKaff = brandRaw==="kaff"
 const formRef = useRef<any>(null)
 const [showPopup, setShowPopup] = useState(false)
 const [showNum, setShowNum] = useState(false)
 const [typed, setTyped] = useState("")
 const phone="8796284796"
 const hide="8796XXXX96"
 const fullText = `Professional ${Brand} chimney service repair in ${area} near ${areaData.near}. We repair not working, heavy noise, low suction, auto clean failure, oil leakage, motor burning, PCB failure same day in PIN ${areaData.pin}.`

 useEffect(()=>{
   document.title=`${Brand} Chimney Service Not Working in ${area} - ${areaData.pin}`
   const t=setTimeout(()=>setShowPopup(true),4000)
   let i=0
   const ti=setInterval(()=>{ setTyped(fullText.slice(0,i)); i++; if(i>fullText.length) clearInterval(ti) },65)
   return()=>{ clearTimeout(t); clearInterval(ti) }
 },[fullText])

 const scrollToForm=()=>{ formRef.current?.scrollIntoView({behavior:'smooth'}); setShowPopup(false) }
 const handleCall=()=>{ setShowNum(true); window.location.href=`tel:${phone}` }

 return(
 <div style={{maxWidth:860,margin:'0 auto',background:'#fff',fontFamily:'system-ui',paddingBottom:100,overflowX:'hidden'}}>
  <div style={{background:'#111',color:'#fff',fontSize:13,fontWeight:800,padding:'10px 14px',textAlign:'center'}}>📞 CALL {hide} FOR {Brand.toUpperCase()} SERVICE IN {area.toUpperCase()} PIN {areaData.pin} • 30 MIN VISIT</div>

  <div style={{background:'#fff',borderBottom:'2px solid #111',padding:'12px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:0,zIndex:50}}>
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      <div style={{width:42,height:42,background:isKaff?'#dc2626':'#111',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,color:'#fff'}}>🍳</div>
      <div><div style={{fontWeight:900,fontSize:14,color:isKaff?'#dc2626':'#111',lineHeight:1.1}}>{Brand.toUpperCase()} CHIMNEY SERVICE REPAIR</div><div style={{fontSize:11,color:'#666',fontWeight:700}}>{area.toUpperCase()} • PIN {areaData.pin}</div></div>
    </div>
    <button onClick={()=>{setShowNum(true); setShowPopup(true)}} style={{background:'#111',color:'#fff',padding:'10px 16px',borderRadius:30,fontWeight:900,border:0,fontSize:13}}>Call {hide}</button>
  </div>

  <div style={{padding:14}}>
    <div style={{background:isKaff?'#dc2626':'#111',color:'#fff',padding:'20px 18px',borderRadius:18}}>
      <h1 style={{fontSize:isKaff?28:24,fontWeight:900,lineHeight:1.25,margin:0}}>{Brand} Chimney Service Not Working in {area} - Pincode {areaData.pin} - 30 Min Visit</h1>
      <div style={{marginTop:10,fontSize:12,background:'rgba(255,255,255,0.22)',display:'inline-block',padding:'6px 12px',borderRadius:20}}>Professional {Brand} Service Repair • {areaData.near}</div>
    </div>

    <div style={{marginTop:14,borderRadius:18,overflow:'hidden',border:'2px solid #111'}}>
      <img src="/chimney.jpg" alt="Kitchen Chimney" style={{width:'100%',height:230,objectFit:'cover',display:'block'}}/>
      <div style={{background:'#111',color:'#fff',padding:'8px 12px',fontSize:12,fontWeight:700,textAlign:'center'}}>{Brand} Kitchen Chimney - Not Working Repair in {area}</div>
    </div>

    <div style={{fontSize:15,color:'#111',background:'#fffbeb',padding:14,borderRadius:14,border:'1px solid #fde68a',marginTop:14,lineHeight:1.7,minHeight:90}}>
      {typed}<span style={{animation:'blink 1s infinite',color:'#dc2626',fontWeight:900}}>|</span>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'1fr',gap:12,marginTop:16}}>
      {[
        {t:`${Brand} Deep Cleaning`,d:`Complete oil grease filter blower wash. Suction restore in PIN ${areaData.pin}.`,i:'🧹',b:'Most Booked'},
        {t:`${Brand} Not Working`,d:`Chimney not working no power no suction switch fail motor burn PCB fail fix same day in ${area}.`,i:'⚡',b:'90 Days Warranty'},
        {t:`${Brand} Installation`,d:`New chimney ducting core cutting fitting clamp installation same day near ${areaData.near}.`,i:'🏠',b:'Same Day'},
      ].map(c=>(
        <div key={c.t} style={{border:'2px solid #111',borderRadius:16,padding:14,display:'flex',gap:12,alignItems:'center',background:'#fff'}}>
          <div style={{width:52,height:52,background:'#fef2f2',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,flexShrink:0}}>{c.i}</div>
          <div style={{flex:1}}><div style={{fontWeight:900,fontSize:15,color:isKaff?'#dc2626':'#111'}}>{c.t} <span style={{background:'#dcfce7',color:'#15803d',fontSize:9,padding:'2px 6px',borderRadius:10,marginLeft:6}}>{c.b}</span></div><div style={{fontSize:13,color:'#555',marginTop:4,lineHeight:1.5}}>{c.d}</div></div>
        </div>
      ))}
    </div>

    <div ref={formRef} style={{marginTop:18,border:isKaff?'3px solid #dc2626':'3px solid #111',borderRadius:18,padding:16,background:'#fff',boxSizing:'border-box'}}>
      <div style={{fontWeight:900,fontSize:18,color:isKaff?'#dc2626':'#111'}}>📅 Book {Brand} Service Not Working in {area}</div>
      <div style={{fontSize:12,color:'#666',marginTop:4}}>PIN {areaData.pin} • 30 Min • Number Hidden {hide}</div>
      <form onSubmit={(e)=>{e.preventDefault(); setShowNum(true); setShowPopup(true)}} style={{display:'grid',gap:10,marginTop:14}}>
        <input required placeholder="Your Full Name" style={{width:'100%',boxSizing:'border-box',padding:14,borderRadius:12,border:'2px solid #e5e7eb',fontSize:14}}/>
        <input required placeholder="Mobile Number" style={{width:'100%',boxSizing:'border-box',padding:14,borderRadius:12,border:'2px solid #e5e7eb',fontSize:14}}/>
        <input placeholder={`${area} Address`} style={{width:'100%',boxSizing:'border-box',padding:14,borderRadius:12,border:'2px solid #e5e7eb',fontSize:14}}/>
        <select style={{width:'100%',boxSizing:'border-box',padding:14,borderRadius:12,border:'2px solid #e5e7eb',fontSize:14}}><option>{Brand} Service Not Working in {area}</option><option>{Brand} Deep Cleaning</option><option>{Brand} Installation</option></select>
        <button type="submit" style={{width:'100%',background:isKaff?'#dc2626':'#111',color:'#fff',padding:16,borderRadius:12,fontWeight:900,border:0,fontSize:16}}>BOOK NOW - {hide}</button>
      </form>
    </div>

    <div style={{marginTop:18,fontSize:11,color:'#666',borderTop:'2px solid #111',paddingTop:12}}>DISCLAIMER: Independent service provider in {area} PIN {areaData.pin}. Not authorized center of {Brand}. Call {hide} for booking.</div>
  </div>

  {showPopup && (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.8)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:200,padding:16}}>
      <div style={{background:'#fff',borderRadius:20,padding:20,maxWidth:360,width:'100%'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}><div style={{fontWeight:900}}>{Brand} Service Not Working</div><button onClick={()=>setShowPopup(false)} style={{border:0,background:'#f3f4f6',width:30,height:30,borderRadius:20,fontWeight:900}}>✕</button></div>
        <div style={{fontSize:12,color:'#666',marginTop:4}}>{area} PIN {areaData.pin}</div>
        <div style={{background:'#f9fafb',borderRadius:12,padding:12,marginTop:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><div style={{fontSize:11,color:'#666'}}>Number Hidden</div><div style={{fontWeight:900,fontSize:16}}>{showNum?phone:hide}</div></div>
          <button onClick={()=>setShowNum(!showNum)} style={{fontSize:11,padding:'6px 10px',borderRadius:8,border:'1px solid #ddd',background:'#fff',fontWeight:700}}>{showNum?'Hide':'Reveal'}</button>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:14}}>
          <button onClick={handleCall} style={{padding:14,borderRadius:12,border:0,background:'#111',color:'#fff',fontWeight:900}}>📞 Call</button>
          <button onClick={scrollToForm} style={{padding:14,borderRadius:12,border:0,background:isKaff?'#dc2626':'#111',color:'#fff',fontWeight:900}}>📅 Book</button>
        </div>
      </div>
    </div>
  )}

  <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',borderTop:'3px solid #111',padding:10,display:'flex',gap:10,maxWidth:860,margin:'0 auto',zIndex:60}}>
    <button onClick={handleCall} style={{flex:1,background:'#111',color:'#fff',padding:15,borderRadius:14,fontWeight:900,border:0,fontSize:14}}>Call {showNum?phone:hide}</button>
    <button onClick={scrollToForm} style={{flex:1,background:isKaff?'#dc2626':'#111',color:'#fff',padding:15,borderRadius:14,fontWeight:900,border:0,fontSize:14}}>Book Now</button>
  </div>

  <style>{`@keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}`}</style>
 </div>
 )
}
