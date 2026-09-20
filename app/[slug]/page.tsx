import CallPopup from "./CallPopup";

const areas: any = {
  "jaypee-greens-greater-noida": "Jaypee Greens Greater Noida",
  "sector-150-noida": "Sector 150 Noida",
  "indirapuram-ghaziabad": "Indirapuram Ghaziabad",
  "vaishali-sector-5-ghaziabad": "Vaishali Ghaziabad",
  "jaypee-greens": "Jaypee Greens",
  "vaishali": "Vaishali",
  "sector-150": "Sector 150"
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

  const areaName = areas[areaKey] || areaKey.replace(/-/g, ' ').replace(/\b\w/g, (l:any) => l.toUpperCase());
  const PHONE = "8796284796";

  return (
    <div style={{fontFamily:'sans-serif'}}>
      <div style={{background:'black', color:'white', padding:'15px 20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <b>NCR CHIMNEY SERVICE</b>
        <a href={`tel:${PHONE}`} style={{background:'#facc15', color:'black', padding:'8px 16px', borderRadius:'20px', textDecoration:'none', fontWeight:'bold'}}>{PHONE}</a>
      </div>

      <div style={{background:'#f3f4f6', padding:'40px 20px', textAlign:'center'}}>
        <h1 style={{fontSize:'36px', fontWeight:'900', lineHeight:'1.1'}}>{brand} Chimney Service in {areaName}</h1>
        <p style={{marginTop:'15px', color:'#4b5563', maxWidth:'600px', margin:'15px auto'}}>Same Day Service in {areaName} - Repair, Cleaning, Installation. 60 Mins me Technician. 90 Days Warranty.</p>
        <div style={{marginTop:'25px'}}>
          <a href={`tel:${PHONE}`} style={{background:'#16a34a', color:'white', padding:'14px 28px', borderRadius:'30px', textDecoration:'none', fontWeight:'bold', marginRight:'10px'}}>CALL NOW</a>
          <a href={`https://wa.me/91${PHONE}`} style={{background:'white', border:'2px solid #16a34a', color:'#16a34a', padding:'14px 28px', borderRadius:'30px', textDecoration:'none', fontWeight:'bold'}}>WhatsApp</a>
        </div>
        <p style={{marginTop:'15px', fontSize:'13px'}}>⭐ 4.8/5 | 10,000+ Happy Customers</p>
      </div>

      <div style={{padding:'20px', textAlign:'center'}}>
        <h3>Services in {areaName}</h3>
        <p>✔️ Chimney Cleaning ✔️ Motor Repair ✔️ Filter Change ✔️ Installation</p>
        <br/><br/>
        <a href="/">← Back to Home</a>
      </div>
      <CallPopup />
    </div>
  )
}
