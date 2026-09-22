const areas: any = {
  "jaypee-greens-greater-noida": "Jaypee Greens Greater Noida",
  "sector-150-noida": "Sector 150 Noida",
  "indirapuram-ghaziabad": "Indirapuram Ghaziabad",
  "vaishali-sector-5-ghaziabad": "Vaishali Ghaziabad",
};

export default function Page({ params }: { params: { slug: string } }) {
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
    <div style={{background:'#f6f6f6', minHeight:'100vh', paddingBottom:'90px', fontFamily:'system-ui'}}>

      {/* HEADER */}
      <div style={{background:'black', color:'white', padding:'18px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:10}}>
        <div style={{fontWeight:900, lineHeight:'14px', fontSize:'16px'}}>NCR CHIMNEY<br/>SERVICE</div>
        <a href="tel:8796284796" style={{background:'#facc15', color:'black', padding:'10px 18px', borderRadius:'999px', fontWeight:900, textDecoration:'none'}}>8796284796</a>
      </div>

      {/* HERO - BADA */}
      <div style={{background:'white', margin:'14px', borderRadius:'32px', padding:'32px 24px', border:'1px solid #eee', textAlign:'center' as any, boxShadow:'0 10px 30px rgba(0,0,0,0.05)'}}>
        <span style={{fontSize:'12px', background:'#f3f3f3', border:'1px solid #e5e5e5', padding:'8px 14px', borderRadius:'999px', fontWeight:600}}>⚡ 60 MINS SERVICE IN {areaName.toUpperCase()}</span>
        <h1 style={{fontSize:'38px', fontWeight:900, marginTop:'20px', lineHeight:'36px', color:'black', letterSpacing:'-1px'}}>{brand} Chimney Service in {areaName}</h1>
        <p style={{fontSize:'16px', color:'#555', marginTop:'14px', lineHeight:'22px'}}>Professional Repair, Deep Cleaning & Installation. Same Day Expert Technician Visit.</p>
        <div style={{display:'flex', gap:'12px', marginTop:'28px'}}>
          <a href="tel:8796284796" style={{flex:1, background:'#16a34a', color:'white', padding:'18px', borderRadius:'999px', fontWeight:900, textDecoration:'none', fontSize:'16px'}}>CALL NOW</a>
          <a href="https://wa.me/918796284796" style={{flex:1, background:'black', color:'white', padding:'18px', borderRadius:'999px', fontWeight:900, textDecoration:'none', fontSize:'16px'}}>WhatsApp</a>
        </div>
        <div style={{marginTop:'18px', display:'flex', justifyContent:'center', gap:'12px', fontSize:'13px', color:'#333'}}><span>⭐ 4.8/5</span><span>•</span><span>10,000+ Customers</span><span>•</span><span>90 Days Warranty</span></div>
      </div>

      {/* SERVICES GRID - BADA */}
      <div style={{padding:'0 14px'}}>
        <h2 style={{fontSize:'22px', fontWeight:900, padding:'10px 6px'}}>Our Services</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
          <div style={{background:'white', padding:'22px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'32px'}}>🧹</div><b style={{fontSize:'16px', display:'block', marginTop:'8px'}}>Deep Cleaning</b><p style={{fontSize:'12px', color:'#777', marginTop:'4px'}}>Oil & Grease Removal</p></div>
          <div style={{background:'white', padding:'22px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'32px'}}>⚙️</div><b style={{fontSize:'16px', display:'block', marginTop:'8px'}}>Motor Repair</b><p style={{fontSize:'12px', color:'#777', marginTop:'4px'}}>Noise & Speed Issue</p></div>
          <div style={{background:'white', padding:'22px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'32px'}}>🔄</div><b style={{fontSize:'16px', display:'block', marginTop:'8px'}}>Filter Change</b><p style={{fontSize:'12px', color:'#777', marginTop:'4px'}}>Charcoal & Baffle</p></div>
          <div style={{background:'white', padding:'22px', borderRadius:'22px', border:'1px solid #eee'}}><div style={{fontSize:'32px'}}>🔧</div><b style={{fontSize:'16px', display:'block', marginTop:'8px'}}>Installation</b><p style={{fontSize:'12px', color:'#777', marginTop:'4px'}}>New & Shifting</p></div>
        </div>
      </div>

      {/* WHY US */}
      <div style={{background:'white', margin:'18px 14px', borderRadius:'26px', padding:'26px', border:'1px solid #eee'}}>
        <h2 style={{fontSize:'20px', fontWeight:900}}>Why Choose Us in {areaName}?</h2>
        <div style={{marginTop:'18px'}}>
          <div style={{display:'flex', gap:'12px', marginBottom:'16px'}}><span style={{background:'#facc15', width:'32px', height:'32px', borderRadius:'999px', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900}}>✓</span><div><b style={{fontSize:'14px'}}>60 Mins Technician Visit</b><p style={{fontSize:'12px', color:'#666'}}>We reach {areaName} in 60 mins</p></div></div>
          <div style={{display:'flex', gap:'12px', marginBottom:'16px'}}><span style={{background:'#facc15', width:'32px', height:'32px', borderRadius:'999px', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900}}>✓</span><div><b style={{fontSize:'14px'}}>All {brand} Models Repaired</b><p style={{fontSize:'12px', color:'#666'}}>Expert in all models</p></div></div>
          <div style={{display:'flex', gap:'12px'}}><span style={{background:'#facc15', width:'32px', height:'32px', borderRadius:'999px', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900}}>✓</span><div><b style={{fontSize:'14px'}}>90 Days Warranty</b><p style={{fontSize:'12px', color:'#666'}}>On service & parts</p></div></div>
        </div>
      </div>

      {/* PROCESS */}
      <div style={{margin:'0 14px', background:'black', color:'white', borderRadius:'26px', padding:'26px'}}>
        <h2 style={{fontSize:'18px', fontWeight:900, color:'#facc15'}}>How It Works</h2>
        <p style={{fontSize:'13px', marginTop:'16px', lineHeight:'20px'}}>1. Call / WhatsApp 8796284796<br/>2. Technician in 60 Mins in {areaName}<br/>3. Repair & Service at Home<br/>4. Pay After Service + Warranty</p>
      </div>

      {/* FOOTER */}
      <div style={{margin:'18px 14px', background:'black', borderRadius:'20px', padding:'20px', textAlign:'center' as any}}>
        <p style={{fontSize:'12px', fontWeight:800, color:'#facc15'}}>NCR CHIMNEY SERVICE - {areaName}</p>
        <p style={{fontSize:'9px', color:'#666', marginTop:'10px', lineHeight:'13px'}}>We are independent service provider not authorized by any brand. {brand} is used for reference only. Service available in Noida & Ghaziabad only. Call 8796284796 for same day service in {areaName}.</p>
      </div>

      <div style={{position:'fixed', bottom:0, left:0, right:0, background:'white', padding:'12px', display:'flex', gap:'12px', borderTop:'1px solid #e5e5e5', boxShadow:'0 -4px 20px rgba(0,0,0,0.1)'}}>
        <a href="tel:8796284796" style={{flex:1, background:'#16a34a', color:'white', padding:'16px', borderRadius:'999px', fontWeight:900, textAlign:'center' as any, textDecoration:'none'}}>CALL NOW</a>
        <a href="https://wa.me/918796284796" style={{flex:1, background:'black', color:'white', padding:'16px', borderRadius:'999px', fontWeight:900, textAlign:'center' as any, textDecoration:'none'}}>WhatsApp</a>
      </div>
    </div>
  )
}
