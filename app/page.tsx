"use client"
import { useState, useEffect } from "react"

export default function Home(){
 const [showPopup, setShowPopup] = useState(false)
 useEffect(()=>{ setTimeout(()=>setShowPopup(true), 3000) }, [])

 return (
 <main className="min-h-screen bg-white text-black pb-20">
  <header className="max-w-5xl mx-auto flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
   <p className="font-black leading-none">NCR CHIMNEY<br/><span className="text-[10px] tracking-[2px]">SERVICE • NOIDA GZB ONLY</span></p>
   <div className="flex gap-2">
    <a href="tel:8796284796" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold">Call</a>
    <a href="https://wa.me/918796284796" className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold">WhatsApp</a>
   </div>
  </header>

  <section className="max-w-5xl mx-auto px-4 py-8">
   <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Trusted • 10k+ Customers • 4.8★</span>
   <h1 className="text-[32px] md:text-5xl font-black mt-4 leading-[1.1]">Kitchen Chimney<br/>Repair & Cleaning<br/>At Your Doorstep</h1>
   <p className="text-gray-500 mt-3">Professional repair, cleaning & installation • Same-day service in Noida & Ghaziabad</p>

   <div className="flex gap-3 mt-6">
    <a href="tel:8796284796" className="bg-[#0F4C2E] text-white px-8 py-3.5 rounded-xl font-bold">Book Now ↗</a>
    <a href="https://wa.me/918796284796" className="border border-black px-8 py-3.5 rounded-xl font-bold">Get a Quote</a>
   </div>

   <h2 className="text-2xl font-black mt-12 mb-4">Our Services</h2>
   <div className="grid gap-3">
    <div className="border rounded-xl p-5 flex justify-between items-center"><div><p className="font-bold">🔧 Repair @ ₹299</p><p className="text-sm text-gray-500">Motor, fan & suction issues • Quick diagnosis</p></div><span>›</span></div>
    <div className="border rounded-xl p-5 flex justify-between items-center"><div><p className="font-bold">✨ Cleaning @ ₹499</p><p className="text-sm text-gray-500">Deep cleaning • Filter & duct cleaning</p></div><span>›</span></div>
    <div className="border rounded-xl p-5 flex justify-between items-center"><div><p className="font-bold">📦 Installation @ ₹799</p><p className="text-sm text-gray-500">New chimney installation • Safe & neat fitting</p></div><span>›</span></div>
   </div>

   <div className="bg-gray-100 rounded-xl p-4 flex flex-wrap gap-4 justify-center text-xs font-bold mt-8">
    <span>✓ 30-Day Warranty</span><span>✓ Verified Professionals</span><span>✓ Transparent Pricing</span>
   </div>

   <div className="mt-12 border-t pt-6">
    <p className="font-bold text-sm">Noida & Ghaziabad Only - All Brands Service</p>
    <p className="text-[10px] text-gray-400 leading-4 mt-2 text-justify">Faber chimney service Noida Ghaziabad 8796284796, Elica chimney service Noida Ghaziabad, Hindware chimney service, Kaff chimney service, Glen chimney service, Sunflame, Prestige, Pigeon, Inalsa, Kutchina, Blowhot, Bosch, Siemens, Hafele chimney repair Noida Sector 62 18 15 50 150 Indirapuram Vaishali Kaushambi Crossing Republik Raj Nagar Vasundhara kitchen chimney service near me chimney cleaning near me chimney repair near me chimney installation Noida Ghaziabad chimney motor PCB suction noise auto clean filter duct cleaning best chimney service Noida Ghaziabad same day 45 min arrival call 8796284796</p>
   </div>
   <p className="text-center text-[10px] text-gray-400 mt-6">© NCR Chimney Service - Noida & Ghaziabad Only • 8796284796</p>
  </section>

  {showPopup && (
   <div className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center z-50 p-4" onClick={()=>setShowPopup(false)}>
    <div className="bg-white rounded-[20px] p-6 w-full max-w-sm" onClick={e=>e.stopPropagation()}>
     <div className="flex justify-between items-center"><p className="font-black text-lg">📞 Need Chimney Service?</p><button onClick={()=>setShowPopup(false)} className="text-xl">✕</button></div>
     <p className="text-sm text-gray-500 mt-2">45 Mins me technician ayega - Noida & Ghaziabad Only</p>
     <div className="grid gap-2 mt-5">
      <a href="tel:8796284796" className="bg-black text-white py-3.5 rounded-xl font-bold text-center">Call Now: 8796284796</a>
      <a href="https://wa.me/918796284796" className="bg-green-600 text-white py-3.5 rounded-xl font-bold text-center">WhatsApp Now</a>
     </div>
    </div>
   </div>
  )}

  <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex gap-2 md:hidden z-40">
   <a href="tel:8796284796" className="flex-1 bg-black text-white py-3 rounded-xl font-bold text-center">Call: 8796284796</a>
   <a href="https://wa.me/918796284796" className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold text-center">WhatsApp</a>
  </div>
 </main>
 )
}
