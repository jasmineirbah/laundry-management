import { useState } from 'react'
import Navbar from '../../components/admin/Navbar'

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
    <>
      <Navbar />

      <div className="container">

        <h1 className="page-title">
          Dashboard Admin Laundry
        </h1>

        {/* CARDS */}
        <div className="row g-4">

          <div className="col-md-3">
            <div className="dashboard-card">
              <h5>Total Orders</h5>
              <h2>{orders.length}</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card">
              <h5>Diproses</h5>
              <h2>35</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card">
              <h5>Selesai</h5>
              <h2>85</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card">
              <h5>Pendapatan</h5>
              <h2>Rp 5.2JT</h2>
            </div>
          </div>

        </div>

        {/* FORM TAMBAH ORDER */}
        <div className="table-container mt-5">

          <h3 className="mb-4">
            Tambah Order
          </h3>

          <div className="row">

            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nama Customer"
                value={customer}
                onChange={(e) =>
                  setCustomer(e.target.value)
                }
              />
            </div>

            <div className="col-md-4 mb-3">
              <select
                className="form-control"
                value={paket}
                onChange={(e) =>
                  setPaket(e.target.value)
                }
              >
                <option value="">
                  Pilih Paket
                </option>

                <option>
                  Cuci Kering
                </option>

                <option>
                  Setrika
                </option>

                <option>
                  Cuci Express
                </option>
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Total Harga"
                value={total}
                onChange={(e) =>
                  setTotal(e.target.value)
                }
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

        {/* TABLE */}
        <div className="table-container mt-5">

          <div className="d-flex justify-content-between align-items-center mb-3">

            <h3>Recent Orders</h3>

          </div>

          <table className="table table-hover">

            <thead>
              <tr>
                <th>ID Order</th>
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
                    <span className="badge bg-warning text-dark">
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
    </>
  )
}