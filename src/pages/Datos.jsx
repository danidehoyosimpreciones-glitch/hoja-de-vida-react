import Layout from '../components/Layout'

const datos = [
  { label: 'Cédula', valor: '1133809034' },
  { label: 'Fecha de Nacimiento', valor: '03 / 03 / 2006' },
  { label: 'Lugar de Nacimiento', valor: 'Lorica — Córdoba' },
  { label: 'Estado Civil', valor: 'Soltera' },
  { label: 'Dirección', valor: 'B/ Alto de las Acacias' },
  { label: 'Celular', valor: '314 710 3816' },
  { label: 'Correo Electrónico', valor: 'dvillalbadh@unicartagena.edu.co' },
]

export default function Datos() {
  return (
    <Layout>
      <section className="page-section">
        <h2 style={{ textAlign: 'center' }}>Datos Personales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginTop: 24 }}>
          {datos.map(d => (
            <div key={d.label} className="dato-card">
              <span className="dato-label">{d.label}</span>
              <span className="dato-valor">{d.valor}</span>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
