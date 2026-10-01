import type { Metadata } from "next";
import ClientSlug from "./ClientSlug";

const areaInfo:any = {
  "jaypee-greens-greater-noida": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk" },
  "sector-150-noida": { full: "Sector 150 Noida", pin: "201310", near: "Sports City" },
  "jaypee-wishtown-sector-128-noida": { full: "Wishtown Sector 128 Noida", pin: "201304", near: "JP Hospital" },
  "indirapuram-ghaziabad": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall" },
  "vaishali-sector-5-ghaziabad": { full: "Vaishali Sector 5 Ghaziabad", pin: "201010", near: "Vaishali Metro" },
  "raj-nagar-ghaziabad": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC" },
}

function getData(slug:string){
  const lower = slug.toLowerCase();
  const brandRaw = lower.split("-")[0] || "chimney";
  const Brand = brandRaw.charAt(0).toUpperCase()+brandRaw.slice(1);
  let areaKey = lower.replace(brandRaw+"-","").replace(/^-/,"");
  let info = areaInfo[areaKey];
  if(!info){
    for(const k in areaInfo){
      if(lower.includes(k)){ info = areaInfo[k]; break; }
    }
  }
  if(!info){
    const nice = areaKey.replace(/-/g," ").replace(/\b\w/g, (l:string)=>l.toUpperCase());
    info = { full: nice, pin: "201301", near: "NCR" };
  }
  return { Brand, brandRaw, area: info.full, pin: info.pin, near: info.near };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { Brand, area } = getData(params.slug);
  return {
    title: `${Brand} Chimney Service in ${area} - 30 Min Visit`,
    description: `${Brand} Chimney Service in ${area} - Same Day Service. Call 8796284796`,
  };
}

export default function Page({ params }: { params: { slug: string } }){
  const data = getData(params.slug);
  return <ClientSlug {...data} />
}
