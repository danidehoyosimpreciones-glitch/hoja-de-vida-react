import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API = 'http://localhost:3000/api/experiencias'

const FORM_VACIO = { cargo: '', empresa: '', fechaInicio: '', fechaFin: '', ciudad: '', descripcion: '' }

function formatFecha(f) {
  if (!f) return 'Actualidad'
  const [y, m] = f.split('-')
  const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  return `${meses[parseInt(m) - 1]} ${y}`
}

export default function AdminExperiencias() {
  const [experiencias, setExperiencias] = useState([])
  const [form, setForm]     = useState(FORM_VACIO)
  const [editId, setEditId] = useState(null)
  const [error, setError]   = useState('')
  const [exito, setExito]   = useState('')
  const [cargando, setCargando] = useState(true)
  const navigate = useNavigate()

  const cargar = () => {
    setCargando(true)
    axios.get(API)
      .then(r => setExperiencias(r.data))
      .catch(() => setError('No se pudo conectar con la API.'))
      .finally(() => setCargando(false))
  }

  useEffect(() => { cargar() }, [])

  const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value })

  const limpiar = () => { setForm(FORM_VACIO); setEditId(null); setError(''); setExito('') }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.cargo || !form.empresa || !form.fechaInicio) {
      setError('Cargo, empresa y fecha de inicio son obligatorios.')
      return
    }
    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, form)
        setExito('¡Experiencia actualizada correctamente!')
      } else {
        await axios.post(API, form)
        setExito('¡Experiencia creada correctamente!')
      }
      limpiar()
      cargar()
    } catch {
      setError('Error al guardar. Verifica que la API esté activa.')
    }
  }

  const editar = exp => {
    setForm({
      cargo: exp.cargo, empresa: exp.empresa,
      fechaInicio: exp.fechaInicio, fechaFin: exp.fechaFin || '',
      ciudad: exp.ciudad || '', descripcion: exp.descripcion || ''
    })
    setEditId(exp._id)
    setExito('')
    setError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const eliminar = async id => {
    if (!window.confirm('¿Eliminar esta experiencia?')) return
    try {
      await axios.delete(`${API}/${id}`)
      setExito('Experiencia eliminada.')
      cargar()
    } catch {
      setError('No se pudo eliminar.')
    }
  }

  const cerrarSesion = () => {
    localStorage.removeItem('admin_auth')
    navigate('/admin/login')
  }

  return (
    <div style={{ background: 'var(--crema)', minHeight: '100vh' }}>

      {/* Header admin */}
      <div style={{ background: 'linear-gradient(135deg, var(--morado-deep), var(--morado))', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontFamily: "'Abril Fatface', serif", color: 'var(--crema)', fontSize: '1.6rem', letterSpacing: 3 }}>⚙ PANEL ADMIN</h1>
          <p style={{ fontFamily: "'Old Standard TT', serif", color: 'var(--ambar)', fontSize: '0.75rem', letterSpacing: 3, textTransform: 'uppercase' }}>Gestión de Experiencias Profesionales</p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn-secondary" style={{ color: 'var(--crema)', borderColor: 'var(--crema)' }} onClick={() => navigate('/')}>← Ver Hoja de Vida</button>
          <button className="btn-danger" onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
      </div>

      <div className="admin-wrap">

        {/* FORMULARIO */}
        <div style={{ background: 'white', borderRadius: 16, padding: '30px 35px', marginBottom: 32, borderTop: '4px solid var(--ambar)', boxShadow: '0 4px 20px rgba(45,27,61,0.08)' }}>
          <h3 style={{ marginTop: 0 }}>{editId ? 'Editar Experiencia' : 'Agregar Experiencia'}</h3>

          {exito && <div className="msg-exito">{exito}</div>}
          {error && <div className="msg-error">{error}</div>}

          <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="form-group">
                <label className="form-label" htmlFor="cargo">Cargo *</label>
                <input className="form-control" id="cargo" value={form.cargo} onChange={handleChange} placeholder="Ej: Desarrolladora Web" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="empresa">Empresa *</label>
                <input className="form-control" id="empresa" value={form.empresa} onChange={handleChange} placeholder="Ej: TechCo S.A.S" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="fechaInicio">Fecha Inicio *</label>
                <input className="form-control" id="fechaInicio" type="month" value={form.fechaInicio} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="fechaFin">Fecha Fin (vacío = actual)</label>
                <input className="form-control" id="fechaFin" type="month" value={form.fechaFin} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="ciudad">Ciudad</label>
                <input className="form-control" id="ciudad" value={form.ciudad} onChange={handleChange} placeholder="Ej: Cartagena" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="descripcion">Descripción</label>
              <textarea className="form-control" id="descripcion" rows="3" value={form.descripcion} onChange={handleChange} placeholder="Describe tus responsabilidades..." />
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <button type="submit" className="btn-primary">{editId ? 'Actualizar' : 'Guardar'}</button>
              {editId && <button type="button" className="btn-secondary" onClick={limpiar}>Cancelar</button>}
            </div>
          </form>
        </div>

        {/* LISTA */}
        <h3 style={{ marginBottom: 16 }}>
          Experiencias Registradas
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 400, color: 'var(--texto-suave)', marginLeft: 10 }}>
            ({experiencias.length})
          </span>
        </h3>

        {cargando && <p style={{ fontStyle: 'italic', color: 'var(--texto-suave)' }}>Cargando...</p>}

        {!cargando && experiencias.length === 0 && (
          <p style={{ fontStyle: 'italic', color: 'var(--texto-suave)', textAlign: 'center', padding: 30 }}>
            No hay experiencias. ¡Agrega la primera!
          </p>
        )}

        {experiencias.map(exp => (
          <div key={exp._id} className="exp-card">
            <div className="exp-acciones">
              <button className="btn-edit" onClick={() => editar(exp)}>Editar</button>
              <button className="btn-danger" onClick={() => eliminar(exp._id)}>Eliminar</button>
            </div>
            <div className="exp-cargo">{exp.cargo}</div>
            <div className="exp-empresa">{exp.empresa}{exp.ciudad ? ` · ${exp.ciudad}` : ''}</div>
            <div className="exp-periodo">{formatFecha(exp.fechaInicio)} — {formatFecha(exp.fechaFin)}</div>
            {exp.descripcion && <div className="exp-desc">{exp.descripcion}</div>}
          </div>
        ))}

      </div>
    </div>
  )
}
