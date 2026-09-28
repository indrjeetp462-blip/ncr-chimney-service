"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const slug = (params?.slug as string) || "test";
  return (
    <div style={{padding:20}}>
      <h1 style={{fontSize:30, fontWeight:900}}>Test OK - {slug}</h1>
      <p>Vercel build success! Agar ye dikh raha hai toh code sahi hai.</p>
      <a href="tel:8796284796" style={{display:'block', background:'green', color:'white', padding:15, borderRadius:30, textAlign:'center', marginTop:20, fontWeight:900}}>CALL NOW</a>
    </div>
  );
}
