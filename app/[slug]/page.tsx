"use client"
import { useState, useEffect } from "react"

const areas: any = {
  "jaypee-greens-greater-noida": "Jaypee Greens Greater Noida",
  "sector-150-noida": "Sector 150 Noida",
  "indirapuram-ghaziabad": "Indirapuram Ghaziabad",
  "vaishali-sector-5-ghaziabad": "Vaishali Ghaziabad",
  "vaishali": "Vaishali",
  "sector-150": "Sector 150",
  "jaypee-greens": "Jaypee Greens",
};

export default function Page({ params }: { params: { slug: string } }) {
  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 4000)
    return () => clearTimeout(t)
  }, [])

  const slug = params.slug;
  let brand = "Faber";
  let areaKey = slug;
  if (slug.includes("-chimney-service-")) {
    const p = slug.split("-chimney-service-");
    brand = p[0].charAt(0).toUpperCase() + p[0].slice(1);
    areaKey = p[1];
  }
  const areaName = areas[areaKey] || areaKey.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase());

  return (
    <div style={{background:'#f5f5f5', minHeight:'100vh', paddingBottom:'100px', fontFamily:'system-ui, sans-serif'}}>

      {/* POPUP */}
      {showPopup && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.75)', zIndex:999, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
          <div style={{background:'white', borderRadius:'32px', padding:'30px 24px', textAlign:'center' as any, maxWidth:'360px', width:'100%'}}>
            <div style={{width:'60px', height:'60px', background:'#16a34a', borderRadius:'999px', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto', fontSize:'28px'}}>📞</div>
            <h2 style={{fontSize:'22px', fontWeight:900, marginTop:'16px', lineHeight:'24px', color:'black'}}>Expert Available in {areaName}!</h2>
            <p style={{fontSize:'14px', color:'#666', marginTop:'8px'}}>Need {brand} Chimney Service? Technician 60 Mins me pahuchega.</p>
            <a href="tel:8796284796" style={{display:'block', background:'#16a34a', color:'white', padding:'18px', borderRadius:'999px', fontWeight:900, textDecoration:'none', marginTop:'22px', fontSize:'16px'}}>CALL NOW - 8796284796</a>
            <button onClick={()=>setShowPopup(false)} style={{marginTop:'14px', background:'none', border:'none', color:'#aaa', fontSize:'13px'}}>Close</button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div style={{background:'black', color:'white', padding:'18px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:10}}>
        <div style={{fontWeight:900, lineHeight:'14px', fontSize:'15px'}}>NCR CHIMNEY<br/>SERVICE</div>
        <a href="tel:8796284796" style={{background:'#facc15', color:'black', padding:'10px 18px', borderRadius:'999px', fontWeight:900, textDecoration:'none', fontSize:'13px'}}>8796284796</a>
      </div>

      {/* HERO */}
      <div style={{background:'white', margin:'14px', borderRadius:'32px', padding:'36px 24px', border:'1px solid #e9e9e9', textAlign:'center' as any, boxShadow:'0 8px 24px rgba(0,0,0,0.04)'}}>
        <span style={{fontSize:'11px', background:'#f1f1f1', border:'1px solid #e5e5e5', padding:'8px 14px', borderRadius:'999px', fontWeight:700, letterSpacing:'0.5px'}}>CERTIFIED SERVICE IN {areaName.toUpperCase()}</span>
        <h1 style={{fontSize:'38px', fontWeight:900, marginTop:'18px', lineHeight:'36px', color:'black', letterSpacing:'-1.5px'}}>{brand} Chimney Service in {areaName}</h1>
        <p style={{fontSize:'15px', color:'#666', marginTop:'14px', lineHeight:'21px'}}>Professional Repair, Deep Cleaning & Installation by Certified Experts. Same Day 60 Mins Visit.</p>
        <div style={{display:'flex', gap:'12px', marginTop:'28px'}}>
          <a href="tel:8796284796" style={{flex:1, background:'#16a34a', color:'white', padding:'18px', borderRadius:'999px', fontWeight:900, textDecoration:'none'}}>CALL NOW</a>
          <a href="https://wa.me/918796284796" style={{flex:1, background:'black', color:'white', padding:'18px', borderRadius:'999px', fontWeight:900, textDecoration:'none'}}>WhatsApp</a>
        </div>
        <div style={{marginTop:'16px', fontSize:'12px', fontWeight:700}}>⭐ 4.8/5 • 10,000+ Happy Customers • 90 Days Warranty</div>
      </div>

      {/* PROFESSIONAL OUR SERVICES */}
      <div style={{padding:'0 14px', marginTop:'10px'}}>
        <h2 style={{fontSize:'22px', fontWeight:900, margin:'0 6px 14px'}}>Our Professional Services</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
          <div style={{background:'white', padding:'22px 18px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'28px'}}>🧹</div><b style={{fontSize:'14px', display:'block', marginTop:'10px'}}>Certified Deep Cleaning</b><p style={{fontSize:'11px', color:'#777', marginTop:'6px', lineHeight:'15px'}}>Advanced Oil & Carbon Removal Technology</p></div>
          <div style={{background:'white', padding:'22px 18px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'28px'}}>⚙️</div><b style={{fontSize:'14px', display:'block', marginTop:'10px'}}>Motor Restoration</b><p style={{fontSize:'11px', color:'#777', marginTop:'6px', lineHeight:'15px'}}>Suction & Noise Issue Expert Fix</p></div>
          <div style={{background:'white', padding:'22px 18px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'28px'}}>🔄</div><b style={{fontSize:'14px', display:'block', marginTop:'10px'}}>Premium Filter Replacement</b><p style={{fontSize:'11px', color:'#777', marginTop:'6px', lineHeight:'15px'}}>Genuine Baffle & Charcoal Filter</p></div>
          <div style={{background:'white', padding:'22px 18px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'28px'}}>🔧</div><b style={{fontSize:'14px', display:'block', marginTop:'10px'}}>Professional Installation</b><p style={{fontSize:'11px', color:'#777', marginTop:'6px', lineHeight:'15px'}}>Ducting & New Setup Solutions</p></div>
        </div>
      </div>
{/* PRICE SECTION - 1250 / 2250 - GOOGLE AI KE LIYE */}
      <div style={{background:'white', margin:'14px', borderRadius:'22px', padding:'22px', border:'1px solid #eee'}}>
        <h2 style={{fontSize:'19px', fontWeight:900}}>Service and Maintenance Estimates for {brand} in {areaName}</h2>
        <p style={{fontSize:'13px', color:'#666', marginTop:'8px'}}>Cleaning, inspection or basic service visit charges generally start around ₹250 to ₹300, while comprehensive deep cleaning and maintenance packages range from ₹499 up to ₹2,250.</p>
        <ul style={{marginTop:'16px', paddingLeft:'20px'}}>
          <li style={{fontSize:'14px', marginBottom:'10px'}}><b>Inspection / Visit Charge:</b> ₹299</li>
          <li style={{fontSize:'14px', marginBottom:'10px'}}><b>Basic General Service:</b> ₹249 – ₹599</li>
          <li style={{fontSize:'14px', marginBottom:'10px'}}><b>Deep Cleaning:</b> ₹1250</li>
          <li style={{fontSize:'14px', marginBottom:'10px'}}><b>Top Model / Heavy Cleaning:</b> ₹2250</li>
        </ul>
      </div>
      {/* WHY US BADA */}
      <div style={{background:'white', margin:'18px 14px', borderRadius:'26px', padding:'26px', border:'1px solid #eee'}}>
        <h2 style={{fontSize:'19px', fontWeight:900}}>Why {areaName} Trusts Us?</h2>
        <div style={{marginTop:'18px', fontSize:'14px', lineHeight:'22px', color:'#333'}}>
          ✓ 60 Mins Technician Visit in {areaName}<br/>✓ All {brand} Models Supported<br/>✓ 90 Days Service Warranty<br/>✓ Pay After Service - No Advance
        </div>
      </div>

      {/* FOOTER SAFE */}
      <div style={{background:'black', margin:'0 14px', borderRadius:'22px', padding:'20px', textAlign:'center' as any}}>
        <p style={{fontSize:'11px', fontWeight:800, color:'#facc15', letterSpacing:'1px'}}>NCR CHIMNEY SERVICE</p>
        <p style={{fontSize:'9px', color:'#666', marginTop:'10px', lineHeight:'13px'}}>Independent service provider. Not authorized by {brand}. {brand} name used for reference only. Service in Noida & Ghaziabad only.</p>
      </div>

      {/* FIXED BUTTON */}
      <div style={{position:'fixed', bottom:0, left:0, right:0, background:'white', padding:'12px', display:'flex', gap:'12px', borderTop:'1px solid #eee', zIndex:50, boxShadow:'0 -4px 20px rgba(0,0,0,0.08)'}}>
        <a href="tel:8796284796" style={{flex:1, background:'#16a34a', color:'white', padding:'16px', borderRadius:'999px', fontWeight:900, textAlign:'center' as any, textDecoration:'none', fontSize:'14px'}}>CALL 8796284796</a>
        <a href="https://wa.me/918796284796" style={{flex:1, background:'black', color:'white', padding:'16px', borderRadius:'999px', fontWeight:900, textAlign:'center' as any, textDecoration:'none', fontSize:'14px'}}>WhatsApp</a>
      </div>
    </div>
  )
}
