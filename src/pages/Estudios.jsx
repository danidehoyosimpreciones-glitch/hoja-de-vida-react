import Layout from '../components/Layout'

const cursosSENA = ['Técnicas de Comunicación en el Nivel Operativo','Atención Integral en Salud a las Víctimas de Violencias Sexuales','Bases de Datos: Generalidades y Sistemas de Gestión','Aplicación del Marco de Trabajo Scrum','Fundamentos de Diseño']
const cursosPROFUTURO = ['Introducción al ABP (IABP)','Gamifica tu Proyecto (GAPR)','HTML5 y JavaScript. Programación con Código (HJPC)','Docentes Digitales: Páginas Web Educativas (DDPW)']
const cursosHP = ['Gestión de Proyectos con Agile','Presentación de Datos','Ciencia y Análisis de Datos']
const cursosSANTANDER = ['Storytelling en el Marketing Digital']

function CursoGrid({ cursos }) {
  return (
    <div className="curso-grid">
      {cursos.map(c => <div key={c} className="curso-item">{c}</div>)}
    </div>
  )
}

export default function Estudios() {
  return (
    <Layout>
      <section className="page-section">
        <h2 style={{ textAlign: 'center' }}>Estudios Realizados</h2>

        <div className="estudio-card">
          <div className="estudio-icon">🎓</div>
          <div>
            <h4>Bachiller Académico</h4>
            <p className="estudio-inst">I.E. Dolores Garrido De González</p>
            <span className="estudio-badge">2022</span>
          </div>
        </div>

        <div className="estudio-card destacado">
          <div className="estudio-icon">🏛️</div>
          <div>
            <h4>Ingeniería de Software</h4>
            <p className="estudio-inst">Universidad de Cartagena</p>
            <span className="estudio-badge en-curso">Cursando 6° Semestre</span>
          </div>
        </div>

        <h3>Cursos Realizados</h3>
        <h4>SENA</h4>
        <CursoGrid cursos={cursosSENA} />
        <h4>Profuturo</h4>
        <CursoGrid cursos={cursosPROFUTURO} />
        <h4>HP Life</h4>
        <CursoGrid cursos={cursosHP} />
        <h4>Santander Open Academy</h4>
        <CursoGrid cursos={cursosSANTANDER} />

        <h3>Seminarios</h3>
        <div className="estudio-card" style={{ marginTop: 12 }}>
          <div className="estudio-icon">📋</div>
          <div>
            <h4>IV Seminario de Investigación y Emprendimiento</h4>
            <p className="estudio-inst">Programa Ingeniería de Software</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
