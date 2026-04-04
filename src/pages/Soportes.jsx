import Layout from '../components/Layout'

function SoporteItem({ src, label }) {
  return (
    <div className="soporte-wrap" style={{ marginBottom: 20 }}>
      <img src={src} alt={label} style={{ borderRadius: 10, boxShadow: '0 4px 15px rgba(45,27,61,0.15)', width: '100%', transition: 'transform 0.3s', cursor: 'pointer' }}
        onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
        onMouseOut={e => e.target.style.transform = 'scale(1)'}
        onError={e => { e.target.style.display = 'none' }}
      />
      <p className="soporte-label">{label}</p>
    </div>
  )
}

function Grid({ children }) {
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20, marginTop: 16 }}>{children}</div>
}

export default function Soportes() {
  return (
    <Layout>
      <section className="page-section">
        <h2 style={{ textAlign: 'center' }}>Soportes y Certificados</h2>

        <h3>Cédula</h3>
        <Grid><SoporteItem src="cedula.jpg" label="Cédula de Ciudadanía" /></Grid>

        <h3>Diploma de Bachiller</h3>
        <Grid><SoporteItem src="diploma_bachiller.jpg" label="Bachiller Académico · 2022" /></Grid>

        <h3>Cursos — SENA</h3>
        <Grid>
          {['curso1','curso4','curso5','curso6','curso7'].map((c,i) => (
            <SoporteItem key={c} src={`${c}.jpg`} label={['Técnicas de Comunicación','Atención Integral','Bases de Datos','Scrum','Fundamentos de Diseño'][i]} />
          ))}
        </Grid>

        <h3>Cursos — Profuturo</h3>
        <Grid>
          {['curso2','curso3','curso8','curso9'].map((c,i) => (
            <SoporteItem key={c} src={`${c}.jpg`} label={['Intro ABP','Gamifica tu Proyecto','HTML5 y JS','Páginas Web Educativas'][i]} />
          ))}
        </Grid>

        <h3>Cursos — HP Life</h3>
        <Grid>
          {['curso10','curso11','curso12'].map((c,i) => (
            <SoporteItem key={c} src={`${c}.jpg`} label={['Gestión con Agile','Presentación de Datos','Ciencia de Datos'][i]} />
          ))}
        </Grid>

        <h3>Cursos — Santander</h3>
        <Grid><SoporteItem src="curso13.jpg" label="Storytelling en Marketing Digital" /></Grid>

        <h3>Seminarios</h3>
        <Grid><SoporteItem src="seminario1.jpg" label="IV Seminario de Investigación" /></Grid>

        <h3>Contraloría</h3>
        <Grid><SoporteItem src="certificado_contraloria.jpg" label="Certificado Contraloría" /></Grid>

        <h3>Procuraduría</h3>
        <Grid><SoporteItem src="certificado_procuraduria.jpg" label="Certificado Procuraduría" /></Grid>

        <h3>Policía Nacional</h3>
        <Grid><SoporteItem src="antecedentes_policia.jpg" label="Antecedentes Policía" /></Grid>
      </section>
    </Layout>
  )
}
