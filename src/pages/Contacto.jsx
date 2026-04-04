import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Layout from '../components/Layout'

emailjs.init('dFDiovpoOXCruaNm0')

export default function Contacto() {
  const [form, setForm]       = useState({ nombre: '', correo: '', telefono: '', mensaje: '' })
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito]     = useState(false)
  const [error, setError]     = useState('')

  const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.nombre || !form.correo || !form.telefono || !form.mensaje) {
      setError('Por favor completa todos los campos.')
      return
    }
    setEnviando(true)
    setError('')
    try {
      await emailjs.send('service_a7lesf2', 'template_jrdk275', form)
      setExito(true)
    } catch {
      setError('Hubo un error al enviar. Intenta de nuevo.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <Layout>
      <section className="page-section">
        <h2 style={{ textAlign: 'center' }}>Contacto</h2>
        <p className="contacto-intro">
          Si deseas comunicarte conmigo para obtener más información sobre mi perfil
          académico o profesional, puedes escribirme directamente o usar el formulario.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, marginTop: 40 }}>

          {/* INFO */}
          <div>
            {[
              { icon: '✉', label: 'Correo', valor: 'dvillalbadh@unicartagena.edu.co', href: 'mailto:dvillalbadh@unicartagena.edu.co' },
              { icon: '📱', label: 'Teléfono', valor: '314 710 3816', href: 'tel:3147103816' },
              { icon: '📍', label: 'Ubicación', valor: 'Lorica — Córdoba, Colombia' },
              { icon: '🎓', label: 'Universidad', valor: 'Universidad de Cartagena' },
            ].map(item => (
              <div key={item.label} className="contacto-item">
                <div className="ci-icon">{item.icon}</div>
                <div>
                  <p className="ci-label">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="ci-valor">{item.valor}</a>
                    : <p className="ci-valor">{item.valor}</p>
                  }
                </div>
              </div>
            ))}
            <a href="https://wa.me/573147103816" target="_blank" rel="noreferrer"
              style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, background:'#25D366', color:'white', fontFamily:"'Old Standard TT',serif", fontSize:'0.78rem', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', textDecoration:'none', padding:'13px 24px', borderRadius:30, marginTop:6, transition:'background 0.25s' }}
              onMouseOver={e=>e.currentTarget.style.background='#1da851'}
              onMouseOut={e=>e.currentTarget.style.background='#25D366'}
            >
              <svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg" style={{fill:'white',flexShrink:0}}>
                <path d="M16.002 2C8.268 2 2 8.268 2 16a13.94 13.94 0 0 0 1.988 7.145L2 30l7.07-1.962A13.94 13.94 0 0 0 16.002 30C23.734 30 30 23.732 30 16S23.734 2 16.002 2zm0 25.5a11.44 11.44 0 0 1-5.844-1.604l-.42-.25-4.196 1.165 1.135-4.078-.274-.436A11.44 11.44 0 0 1 4.5 16c0-6.351 5.151-11.5 11.502-11.5S27.5 9.649 27.5 16 22.352 27.5 16.002 27.5zm6.305-8.59c-.344-.172-2.04-1.006-2.355-1.12-.315-.115-.545-.172-.774.172-.23.344-.888 1.12-1.088 1.35-.2.23-.4.258-.743.086-.344-.172-1.453-.536-2.767-1.708-1.022-.912-1.712-2.037-1.912-2.381-.2-.344-.021-.53.15-.701.155-.154.344-.4.516-.6.172-.2.229-.344.344-.573.115-.23.058-.43-.029-.601-.086-.172-.774-1.866-1.06-2.556-.28-.67-.563-.578-.774-.59l-.659-.01c-.23 0-.6.086-.915.43-.314.344-1.2 1.17-1.2 2.857s1.229 3.313 1.4 3.542c.172.23 2.42 3.696 5.862 5.183.82.354 1.46.565 1.958.724.823.261 1.572.224 2.163.136.66-.099 2.04-.834 2.326-1.638.287-.805.287-1.493.2-1.638-.085-.143-.315-.229-.659-.4z"/>
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          {/* FORMULARIO */}
          <div>
            {!exito ? (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="nombre">Nombre completo</label>
                    <input className="form-control" id="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="correo">Correo electrónico</label>
                    <input className="form-control" id="correo" type="email" value={form.correo} onChange={handleChange} placeholder="tu@correo.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="telefono">Teléfono</label>
                  <input className="form-control" id="telefono" value={form.telefono} onChange={handleChange} placeholder="300 000 0000" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="mensaje">Mensaje</label>
                  <textarea className="form-control" id="mensaje" rows="5" value={form.mensaje} onChange={handleChange} placeholder="Escribe tu mensaje aquí..." />
                </div>
                {error && <p className="msg-error">{error}</p>}
                <button type="submit" className="btn-primary" disabled={enviando} style={{ marginTop: 8 }}>
                  {enviando ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            ) : (
              <div className="msg-exito">¡Mensaje enviado! Me pondré en contacto contigo pronto. 🎉</div>
            )}
          </div>

        </div>
      </section>
    </Layout>
  )
}
