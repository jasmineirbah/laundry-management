import Navbar from '../../components/admin/Navbar'

export default function Tracking() {
  return (
    <>
      <Navbar />

      <div style={{ padding: '20px' }}>
        <h1>Tracking Laundry Realtime</h1>

        <div
          style={{
            marginTop: '20px',
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            width: '400px'
          }}
        >
          <h3>Order: ORD001</h3>

          <p>Status: Diproses</p>

          <div
            style={{
              width: '100%',
              height: '20px',
              background: '#ddd',
              borderRadius: '10px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: '60%',
                height: '100%',
                background: 'green'
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}