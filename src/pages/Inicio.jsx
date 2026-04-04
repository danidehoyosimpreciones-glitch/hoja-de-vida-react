import Layout from '../components/Layout'
import foto from '../assets/foto.jpg'

export default function Inicio() {
  return (
    <Layout>
      <section className="page-section perfil">
        <img src={foto} alt="Daniela Villalba" className="perfil-foto" onError={e => e.target.style.display='none'} />
        <h2>DANIELA JUDITH VILLALBA DE HOYOS</h2>
        <p>
          Hola, soy Daniela Judith Villalba De Hoyos, tengo 20 años y actualmente curso
          el sexto semestre de Ingeniería de Software en la Universidad de Cartagena.
          Me considero una mujer responsable, comprometida y con gran capacidad para
          aprender y adaptarme a nuevos retos.
        </p>
        <div style={{ marginTop: 28 }}>
          {['Ingeniería de Software','Bases de Datos','Agile','Diseño Web','Análisis de Datos'].map(s => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </section>
    </Layout>
  )
}
