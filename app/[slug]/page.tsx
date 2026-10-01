import type { Metadata } from "next";
import ClientSlug from "./ClientSlug";

const areaInfo:any = {
  "jaypee-greens-greater-noida": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk", map: "Jaypee Greens Greater Noida" },
  "sector-150-noida": { full: "Sector 150 Noida", pin: "201310", near: "Sports City", map: "Sector 150 Noida" },
  "jaypee-wishtown-sector-128-noida": { full: "Wishtown Sector 128 Noida", pin: "201304", near: "JP Hospital", map: "Jaypee Wishtown Sector 128 Noida" },
  "indirapuram-ghaziabad": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall", map: "Indirapuram Ghaziabad" },
  "vaishali-sector-5-ghaziabad": { full: "Vaishali Sector 5 Ghaziabad", pin: "201010", near: "Vaishali Metro", map: "Vaishali Sector 5 Ghaziabad" },
  "raj-nagar-ghaziabad": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC", map: "Raj Nagar Ghaziabad" },
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
  if(!info) info = { full: areaKey.replace(/-/g," ").replace(/\b\w/g:(l:any)=>l.toUpperCase()), pin: "201301", near: "NCR", map: areaKey };
  return { Brand, brandRaw, area: info.full, pin: info.pin, near: info.near, map: info.map };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { Brand, area } = getData(params.slug);
  return {
    title: `${Brand} Chimney Service in ${area} - 30 Min Visit`,
    description: `${Brand} Chimney Service in ${area} - Same Day Service, 45 Min Arrival, 30 Day Warranty. Call 8796284796`,
  };
}

export default function Page({ params }: { params: { slug: string } }){
  const data = getData(params.slug);
  return <ClientSlug {...data} />
}
