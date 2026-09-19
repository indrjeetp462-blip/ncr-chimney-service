import "./globals.css";
export const metadata = {
  title: "Chimney Service Noida & Ghaziabad | Repair & Cleaning",
  description: "Only Noida & Ghaziabad Chimney Service. Same day repair, cleaning, installation. All brands. Call now.",
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en"><body>
      <header style={{padding:'14px',borderBottom:'1px solid #eee',display:'flex',justifyContent:'space-between'}}>
        <b style={{color:'#e11d48',fontSize:'20px'}}>NCR CHIMNEY SERVICE</b>
        <div>
          <a href="tel:+919999999999" style={{background:'#e11d48',color:'#fff',padding:'8px 12px',borderRadius:'8px',textDecoration:'none',marginRight:'6px'}}>Call</a>
          <a href="https://wa.me/919999999999" style={{background:'#25D366',color:'#fff',padding:'8px 12px',borderRadius:'8px',textDecoration:'none'}}>WhatsApp</a>
        </div>
      </header>
      {children}
      <footer style={{background:'#111',color:'#ccc',padding:'20px',marginTop:'30px',textAlign:'center'}}>
        <p>Only Noida & Ghaziabad | Indirapuram | Vaishali | Crossing Republik | Sector 62, 150</p>
        <p>© 2026 NCR Chimney Service</p>
      </footer>
    </body></html>
  )
}
