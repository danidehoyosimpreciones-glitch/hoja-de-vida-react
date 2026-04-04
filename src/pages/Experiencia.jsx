import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

const API = 'http://localhost:3000/api/experiencias'

function formatFecha(f) {
  if (!f) return 'Actualidad'
  const [y, m] = f.split('-')
  const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  return `${meses[parseInt(m) - 1]} ${y}`
}

export default function Experiencia() {
  const [experiencias, setExperiencias] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(API)
      .then(r => setExperiencias(r.data))
      .catch(() => setError('No se pudieron cargar las experiencias.'))
      .finally(() => setCargando(false))
  }, [])

  return (
    <Layout>
      <section className="page-section">
        <h2>Experiencia Profesional</h2>

        {cargando && <p style={{ fontStyle: 'italic', color: 'var(--texto-suave)' }}>Cargando experiencias...</p>}
        {error   && <p className="msg-error">{error}</p>}

        {!cargando && !error && experiencias.length === 0 && (
          <p style={{ fontStyle: 'italic', color: 'var(--texto-suave)', textAlign: 'center', padding: 30 }}>
            Aún no hay experiencias registradas.
          </p>
        )}

        {experiencias.map(exp => (
          <div key={exp._id} className="exp-card">
            <div className="exp-cargo">{exp.cargo}</div>
            <div className="exp-empresa">{exp.empresa}{exp.ciudad ? ` · ${exp.ciudad}` : ''}</div>
            <div className="exp-periodo">{formatFecha(exp.fechaInicio)} — {formatFecha(exp.fechaFin)}</div>
            {exp.descripcion && <div className="exp-desc">{exp.descripcion}</div>}
          </div>
        ))}
      </section>
    </Layout>
  )
}
