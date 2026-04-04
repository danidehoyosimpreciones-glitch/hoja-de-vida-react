import { Link } from 'react-router-dom'

const WA_SVG = (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.002 2C8.268 2 2 8.268 2 16a13.94 13.94 0 0 0 1.988 7.145L2 30l7.07-1.962A13.94 13.94 0 0 0 16.002 30C23.734 30 30 23.732 30 16S23.734 2 16.002 2zm0 25.5a11.44 11.44 0 0 1-5.844-1.604l-.42-.25-4.196 1.165 1.135-4.078-.274-.436A11.44 11.44 0 0 1 4.5 16c0-6.351 5.151-11.5 11.502-11.5S27.5 9.649 27.5 16 22.352 27.5 16.002 27.5zm6.305-8.59c-.344-.172-2.04-1.006-2.355-1.12-.315-.115-.545-.172-.774.172-.23.344-.888 1.12-1.088 1.35-.2.23-.4.258-.743.086-.344-.172-1.453-.536-2.767-1.708-1.022-.912-1.712-2.037-1.912-2.381-.2-.344-.021-.53.15-.701.155-.154.344-.4.516-.6.172-.2.229-.344.344-.573.115-.23.058-.43-.029-.601-.086-.172-.774-1.866-1.06-2.556-.28-.67-.563-.578-.774-.59l-.659-.01c-.23 0-.6.086-.915.43-.314.344-1.2 1.17-1.2 2.857s1.229 3.313 1.4 3.542c.172.23 2.42 3.696 5.862 5.183.82.354 1.46.565 1.958.724.823.261 1.572.224 2.163.136.66-.099 2.04-.834 2.326-1.638.287-.805.287-1.493.2-1.638-.085-.143-.315-.229-.659-.4z"/>
  </svg>
)

export default function Layout({ children }) {
  return (
    <>
      <header className="site-header">
        <h1>HOJA DE VIDA</h1>
        <p className="subtitle">Daniela Judith Villalba De Hoyos</p>
      </header>

      <nav className="site-nav">
        <ul>
          <li><Link to="/inicio">Inicio</Link></li>
          <li><Link to="/datos">Datos Personales</Link></li>
          <li><Link to="/estudios">Estudios</Link></li>
          <li><Link to="/experiencia">Experiencia</Link></li>
          <li><Link to="/referencias">Referencias</Link></li>
          <li><Link to="/documentos">Documentos</Link></li>
          <li><Link to="/soportes">Soportes</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      <main>{children}</main>

      <footer className="site-footer">
        <p>© 2026 — Daniela Judith Villalba De Hoyos</p>
      </footer>

      <a href="https://wa.me/573147103816" className="whatsapp-btn" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        {WA_SVG}
      </a>
    </>
  )
}
