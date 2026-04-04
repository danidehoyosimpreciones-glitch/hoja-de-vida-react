import Layout from '../components/Layout'

const docs = [
  { icono: '', label: 'Cédula de Ciudadanía', valor: '1133809034' },
  { icono: '', label: 'Certificado Contraloría', valor: 'Sin antecedentes' },
  { icono: '', label: 'Certificado Procuraduría', valor: 'Sin antecedentes' },
  { icono: '', label: 'Antecedentes Policía Nacional', valor: 'Sin antecedentes' },
]

export default function Documentos() {
  return (
    <Layout>
      <section className="page-section">
        <h2>Información de Documentos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginTop: 24 }}>
          {docs.map(d => (
            <div key={d.label} className="doc-card">
              <div className="doc-icono">{d.icono}</div>
              <div>
                <p className="doc-label">{d.label}</p>
                <p className="doc-valor">{d.valor}</p>
              </div>
              <span className="doc-estado vigente">Vigente</span>
            </div>
          ))}
        </div>
        <p style={{ fontStyle: 'italic', color: 'var(--texto-suave)', textAlign: 'center', marginTop: 30, borderTop: '1px solid var(--crema-dark)', paddingTop: 20 }}>
          Todos los documentos están vigentes. Los soportes físicos están en la sección{' '}
          <a href="/soportes" style={{ color: 'var(--morado)' }}>Soportes</a>.
        </p>
      </section>
    </Layout>
  )
}
