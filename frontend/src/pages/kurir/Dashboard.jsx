import { useState } from 'react'
import Sidebar from '../../components/admin/Sidebar'

export default function Dashboard() {
  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      customer: 'Budi',
      paket: 'Cuci Kering',
      status: 'Diproses',
      total: 'Rp 45.000'
    },
    {
      id: 'ORD002',
      customer: 'Siti',
      paket: 'Setrika',
      status: 'Selesai',
      total: 'Rp 30.000'
    },
    {
      id: 'ORD003',
      customer: 'Andi',
      paket: 'Cuci Express',
      status: 'Menunggu',
      total: 'Rp 60.000'
    }
  ])

  const [customer, setCustomer] = useState('')
  const [paket, setPaket] = useState('')
  const [total, setTotal] = useState('')

  const addOrder = () => {
    if (!customer || !paket || !total) {
      alert('Isi semua data')
      return
    }

    const newOrder = {
      id: `ORD00${orders.length + 1}`,
      customer,
      paket,
      status: 'Menunggu',
      total: `Rp ${total}`
    }

    setOrders([...orders, newOrder])

    setCustomer('')
    setPaket('')
    setTotal('')

    alert('Order berhasil ditambahkan')
  }

  return (
    <div className="d-flex">

      <Sidebar />

      <div
        className="flex-grow-1 p-4"
        style={{
          background: '#f5f6fa',
          minHeight: '100vh'
        }}
      >

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h1 className="fw-bold mb-1">
              Dashboard Kurir 👋
            </h1>

            <p className="text-muted mb-0">
              Kelola seluruh aktivitas laundry dari satu tempat.
            </p>
          </div>

          <div className="d-flex align-items-center gap-3">

            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#0d6efd',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold'
              }}
            >
              A
            </div>

            <div>
              <h6 className="mb-0">
                admin@gmail.com
              </h6>

              <small className="text-muted">
                Kasir
              </small>
            </div>

          </div>

        </div>

        {/* Statistik */}
        <div className="row g-4 mb-4">

          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Total Orders
                </h6>

                <h2 className="fw-bold">
                  {orders.length}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Total Customer
                </h6>

                <h2 className="fw-bold">
                  75
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Karyawan
                </h6>

                <h2 className="fw-bold">
                  12
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Pendapatan
                </h6>

                <h2 className="fw-bold text-success">
                  Rp 5.2 JT
                </h2>
              </div>
            </div>
          </div>

        </div>

        {/* Recent Orders */}
        <div className="card border-0 shadow-sm mb-4">

          <div className="card-header bg-white">
            <h4 className="mb-0">
              Order Terbaru
            </h4>
          </div>

          <div className="card-body">

            <div className="table-responsive">

              <table className="table align-middle">

                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Paket</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>

                  {orders.map((order, index) => (
                    <tr key={index}>

                      <td>{order.id}</td>

                      <td>{order.customer}</td>

                      <td>{order.paket}</td>

                      <td>
                        <span
                          className={`badge ${
                            order.status === 'Selesai'
                              ? 'bg-success'
                              : order.status === 'Diproses'
                              ? 'bg-warning text-dark'
                              : 'bg-secondary'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td>{order.total}</td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

        {/* Tambah Order */}
        <div className="card border-0 shadow-sm">

          <div className="card-header bg-white">
            <h4 className="mb-0">
              Tambah Order Baru
            </h4>
          </div>

          <div className="card-body">

            <div className="row">

              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Customer"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                />
              </div>

              <div className="col-md-4 mb-3">
                <select
                  className="form-select"
                  value={paket}
                  onChange={(e) => setPaket(e.target.value)}
                >
                  <option value="">Pilih Paket</option>
                  <option>Cuci Kering</option>
                  <option>Setrika</option>
                  <option>Cuci Express</option>
                </select>
              </div>

              <div className="col-md-3 mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Total Harga"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                />
              </div>

              <div className="col-md-1 mb-3">
                <button
                  className="btn btn-primary w-100"
                  onClick={addOrder}
                >
                  +
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}