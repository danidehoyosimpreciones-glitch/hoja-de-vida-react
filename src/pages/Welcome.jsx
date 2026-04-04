import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/inicio')
    }, 5800)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #2D1B3D, #6B4F8C)',
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* Orbes decorativos */}
      <div style={{ position:'fixed', width:400, height:400, borderRadius:'50%', background:'#6B4F8C', filter:'blur(80px)', opacity:0.35, top:-80, left:-80, animation:'float 8s ease-in-out infinite' }} />
      <div style={{ position:'fixed', width:300, height:300, borderRadius:'50%', background:'#C9956A', filter:'blur(80px)', opacity:0.35, bottom:-60, right:-60, animation:'float 8s ease-in-out infinite 3s' }} />
      <div style={{ position:'fixed', width:200, height:200, borderRadius:'50%', background:'#9B6B9E', filter:'blur(80px)', opacity:0.35, top:'50%', left:'60%', animation:'float 8s ease-in-out infinite 5s' }} />

      {/* Contenido */}
      <div style={{ textAlign:'center', padding:'60px 50px', maxWidth:600, width:'90%', animation:'boxIn 1.2s cubic-bezier(0.22,1,0.36,1) forwards' }}>

        <p style={{
          fontFamily: "'Old Standard TT', serif",
          fontSize: '0.85rem',
          letterSpacing: 5,
          color: '#D4A574',
          textTransform: 'uppercase',
          marginBottom: 18,
          animation: 'fadeUp 1s 0.3s ease forwards',
          opacity: 0,
        }}>¡Bienvenido a mi</p>

        <h1 style={{
          fontFamily: "'Abril Fatface', serif",
          fontSize: 'clamp(2rem, 7vw, 3.8rem)',
          color: '#F7EDE2',
          lineHeight: 1.1,
          marginBottom: 10,
          animation: 'fadeUp 1s 0.6s ease forwards',
          opacity: 0,
        }}>Hoja de Vida</h1>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '1.2rem',
          color: '#9B6B9E',
          marginBottom: 40,
          animation: 'fadeUp 1s 0.9s ease forwards',
          opacity: 0,
        }}>Daniela Judith Villalba De Hoyos</p>

        <div style={{
          width: 60, height: 2,
          background: 'linear-gradient(90deg, transparent, #D4A574, transparent)',
          margin: '0 auto 28px',
          animation: 'fadeUp 1s 1s ease forwards',
          opacity: 0,
        }} />

        <button
          onClick={() => navigate('/inicio')}
          style={{
            fontFamily: "'Old Standard TT', serif",
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#F7EDE2',
            background: 'transparent',
            padding: '16px 48px',
            border: '1.5px solid rgba(212,165,116,0.5)',
            borderRadius: 40,
            cursor: 'pointer',
            transition: 'all 0.35s',
            animation: 'fadeUp 1s 1.2s ease forwards',
            opacity: 0,
          }}
          onMouseOver={e => { e.target.style.background = 'linear-gradient(135deg, #C9956A, #6B4F8C)'; e.target.style.borderColor = 'transparent' }}
          onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(212,165,116,0.5)' }}
        >
          Ingresar
        </button>
      </div>

      {/* Barra de progreso */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0,
        height: 3,
        background: 'linear-gradient(90deg, #6B4F8C, #D4A574, #C9956A)',
        animation: 'progress 4s 1.5s linear forwards',
        width: 0,
      }} />

      {/* Skip */}
      <p
        onClick={() => navigate('/inicio')}
        style={{
          position: 'fixed', bottom: 20, right: 24,
          fontFamily: "'Old Standard TT', serif",
          fontSize: '0.7rem',
          letterSpacing: 1,
          color: 'rgba(247,237,226,0.3)',
          textTransform: 'uppercase',
          cursor: 'pointer',
          animation: 'fadeUp 1s 2s ease forwards',
          opacity: 0,
          transition: 'color 0.3s',
        }}
        onMouseOver={e => e.target.style.color = 'rgba(247,237,226,0.7)'}
        onMouseOut={e => e.target.style.color = 'rgba(247,237,226,0.3)'}
      >Saltar →</p>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Old+Standard+TT:wght@400;700&family=Cormorant+Garamond:ital@1&display=swap');
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes boxIn { from{opacity:0;transform:scale(0.85) translateY(30px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes progress { to{width:100%} }
      `}</style>
    </div>
  )
}
