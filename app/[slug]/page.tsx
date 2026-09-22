"use client"
import { useState, useEffect } from "react"

function toTitleCase(str: string) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function Page({ params }: { params: { slug: string } }) {
  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 4000)
    return () => clearTimeout(t)
  }, [])

  const slug = params.slug;
  let brand = "Faber";
  let areaSlug = slug;

  if (slug.includes("-chimney-service-")) {
    const parts = slug.split("-chimney-service-");
    const brandSlug = parts[0].toLowerCase();
    const brandMap: any = {
      "faber": "Faber", "elica": "Elica", "hindware": "Hindware",
      "kaff": "Kaff", "glen": "Glen", "hafele": "Hafele",
      "kutchina": "Kutchina", "siemens": "Siemens", "bosch": "Bosch",
      "sunflame": "Sunflame", "chimney": "Chimney"
    };
    brand = brandMap[brandSlug] || toTitleCase(brandSlug);
    areaSlug = parts[1];
  }

  const areaName = toTitleCase(areaSlug);

  return (
    <div style={{background:'#f5f5f5', minHeight:'100vh', paddingBottom:'100px', fontFamily:'system-ui, sans-serif'}}>

      {showPopup && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.75)', zIndex:999, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
          <div style={{background:'white', borderRadius:'32px', padding:'30px 24px', textAlign:'center' as any, maxWidth:'360px', width:'100%'}}>
            <div style={{width:'60px', height:'60px', background:'#16a34a', borderRadius:'999px', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto', fontSize:'28px'}}>📞</div>
            <h2 style={{fontSize:'22px', fontWeight:900, marginTop:'16px', lineHeight:'24px', color:'black'}}>Expert Available in {areaName}!</h2>
            <p style={{fontSize:'14px', color:'#666', marginTop:'8px'}}>Need {brand} Chimney Service? 60 Mins Visit.</p>
            <a href="tel:8796284796" style={{display:'block', background:'#16a34a', color:'white', padding:'18px', borderRadius:'999px', fontWeight:900, textDecoration:'none', marginTop:'22px'}}>CALL NOW - 8796284796</a>
            <button onClick={()=>setShowPopup(false)} style={{marginTop:'14px', background:'none', border:'none', color:'#aaa', fontSize:'13px'}}>Close</button>
          </div>
        </div>
      )}

      <div style={{background:'black', color:'white', padding:'18px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:10}}>
        <div style={{fontWeight:900, lineHeight:'14px', fontSize:'15px'}}>NCR CHIMNEY<br/>SERVICE</div>
        <a href="tel:8796284796" style={{background:'#facc15', color:'black', padding:'10px 18px', borderRadius:'999px', fontWeight:900, textDecoration:'none', fontSize:'13px'}}>8796284796</a>
      </div>

      <div style={{background:'white', margin:'14px', borderRadius:'32px', padding:'36px 24px', border:'1px solid #e9e9e9', textAlign:'center' as any}}>
        <div style={{display:'inline-block', fontSize:'10px', background:'#f1f1f1', border:'1px solid #e5e5e5', padding:'10px 16px', borderRadius:'18px', fontWeight:700, letterSpacing:'0.5px', lineHeight:'14px', maxWidth:'90%'}}>CERTIFIED {brand.toUpperCase()} SERVICE IN {areaName.toUpperCase()}</div>
        <h1 style={{fontSize:'40px', fontWeight:900, marginTop:'18px', lineHeight:'38px', color:'black', letterSpacing:'-1.5px'}}>{brand} Chimney Service in {areaName}</h1>
        <p style={{fontSize:'15px', color:'#666', marginTop:'14px'}}>Professional Repair, Deep Cleaning & Installation by Certified Experts for {brand} in {areaName}. Same Day 60 Mins Visit.</p>
        <div style={{display:'flex', gap:'12px', marginTop:'28px'}}>
          <a href="tel:8796284796" style={{flex:1, background:'#16a34a', color:'white', padding:'18px', borderRadius:'999px', fontWeight:900, textDecoration:'none'}}>CALL NOW</a>
          <a href="https://wa.me/918796284796" style={{flex:1, background:'black', color:'white', padding:'18px', borderRadius:'999px', fontWeight:900, textDecoration:'none'}}>WhatsApp</a>
        </div>
        <div style={{marginTop:'16px', fontSize:'12px', fontWeight:700}}>⭐ 4.8/5 • 10,000+ Happy Customers • 90 Days Warranty</div>
      </div>

      <div style={{padding:'0 14px'}}>
        <h2 style={{fontSize:'22px', fontWeight:900, margin:'0 6px 14px'}}>Our Professional Services for {brand}</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
          <div style={{background:'white', padding:'22px 18px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'28px'}}>🧹</div><b style={{fontSize:'14px', display:'block', marginTop:'10px'}}>Certified Deep Cleaning</b><p style={{fontSize:'11px', color:'#777', marginTop:'6px'}}>Advanced Oil Removal for {brand}</p></div>
          <div style={{background:'white', padding:'22px 18px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'28px'}}>⚙️</div><b style={{fontSize:'14px', display:'block', marginTop:'10px'}}>Motor Restoration</b><p style={{fontSize:'11px', color:'#777', marginTop:'6px'}}>Suction & Noise Fix</p></div>
          <div style={{background:'white', padding:'22px 18px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'28px'}}>🔄</div><b style={{fontSize:'14px', display:'block', marginTop:'10px'}}>Premium Filter</b><p style={{fontSize:'11px', color:'#777', marginTop:'6px'}}>Genuine {brand} Filter</p></div>
          <div style={{background:'white', padding:'22px 18px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'28px'}}>🔧</div><b style={{fontSize:'14px', display:'block', marginTop:'10px'}}>Professional Installation</b><p style={{fontSize:'11px', color:'#777', marginTop:'6px'}}>Ducting & Setup in {areaName}</p></div>
        </div>
      </div>

      <div style={{background:'white', margin:'14px', marginTop:'20px', borderRadius:'22px', padding:'24px', border:'1px solid #eee'}}>
        <h3 style={{fontSize:'18px', fontWeight:900}}>Why Choose Us for {brand} in {areaName}?</h3>
        <ul style={{marginTop:'12px', fontSize:'14px', color:'#444', lineHeight:'22px', paddingLeft:'18px'}}>
          <li>Same Day Service in {areaName} - 60 Mins Visit</li>
          <li>Certified Technicians for {brand} Chimney</li>
          <li>90 Days Service Warranty</li>
          <li>Genuine Spare Parts</li>
          <li>10,000+ Happy Customers in NCR</li>
        </ul>
      </div>

      <div style={{position:'fixed', bottom:0, left:0, right:0, background:'white', padding:'12px', display:'flex', gap:'12px', borderTop:'1px solid #eee', zIndex:50}}>
        <a href="tel:8796284796" style={{flex:1, background:'#16a34a', color:'white', padding:'16px', borderRadius:'999px', fontWeight:900, textAlign:'center' as any, textDecoration:'none'}}>CALL 8796284796</a>
        <a href="https://wa.me/918796284796" style={{flex:1, background:'black', color:'white', padding:'16px', borderRadius:'999px', fontWeight:900, textAlign:'center' as any, textDecoration:'none'}}>WhatsApp</a>
      </div>
    </div>
  )
}
