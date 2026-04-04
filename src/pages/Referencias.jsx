import Layout from '../components/Layout'

const personales = [
  { iniciales: 'WR', nombre: 'Wendy Paola Rodelo Reyes', ocup: 'Técnico en Archivo y Registro', tel: '304 492 2304', href: 'tel:3044922304' },
  { iniciales: 'JS', nombre: 'Jesús Manuel Serpa Hernández', ocup: 'Técnico en Refrigeración', tel: '300 335 8924', href: 'tel:3003358924' },
]
const familiares = [
  { iniciales: 'CD', nombre: 'Ceris Paola De Hoyos Cantero', ocup: 'Administradora de Tienda de Abastos', tel: '314 726 4090', href: 'tel:3147264090' },
  { iniciales: 'DV', nombre: 'Danilza Judith Villalba Berrocal', ocup: 'Técnico Auxiliar en Farmacia', tel: '301 230 1445', href: 'tel:3012301445' },
]

export default function Referencias() {
  return (
    <Layout>
      <section className="page-section">
        <h2>Referencias</h2>

        <h3>Personales</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginTop: 12 }}>
          {personales.map(r => (
            <div key={r.nombre} className="ref-card">
              <div className="ref-avatar">{r.iniciales}</div>
              <div>
                <p className="ref-nombre">{r.nombre}</p>
                <p className="ref-ocup">{r.ocup}</p>
                <a href={r.href} className="ref-tel">{r.tel}</a>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: 32 }}>Familiares</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginTop: 12 }}>
          {familiares.map(r => (
            <div key={r.nombre} className="ref-card familiar">
              <div className="ref-avatar fam">{r.iniciales}</div>
              <div>
                <p className="ref-nombre">{r.nombre}</p>
                <p className="ref-ocup">{r.ocup}</p>
                <a href={r.href} className="ref-tel">{r.tel}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
