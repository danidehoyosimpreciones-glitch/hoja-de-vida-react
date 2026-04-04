import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const USUARIO = 'daniela'
const PASSWORD = 'Daniela2026'

export default function Login() {
  const [user, setUser]   = useState('')
  const [pass, setPass]   = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    if (user === USUARIO && pass === PASSWORD) {
      localStorage.setItem('admin_auth', 'true')
      navigate('/admin')
    } else {
      setError('Usuario o contraseña incorrectos.')
    }
  }

  return (
    <div className="login-wrap">
      <div className="login-box">
        <h2>⚙ Admin</h2>
        <p className="login-subtitle">Panel de administración — Hoja de Vida</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label className="form-label" htmlFor="user">Usuario</label>
            <input className="form-control" id="user" value={user} onChange={e => setUser(e.target.value)} placeholder="Usuario" autoComplete="username" />
          </div>
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label className="form-label" htmlFor="pass">Contraseña</label>
            <input className="form-control" id="pass" type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Contraseña" autoComplete="current-password" />
          </div>
          {error && <p className="msg-error">{error}</p>}
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 16 }}>
            Ingresar
          </button>
        </form>

        <p style={{ marginTop: 20, fontSize: '0.8rem', color: 'var(--texto-suave)', fontStyle: 'italic' }}>
          Usuario: <strong>daniela</strong> · Contraseña: <strong>Daniela2026</strong>
        </p>
      </div>
    </div>
  )
}
