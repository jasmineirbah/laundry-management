import { useEffect, useState } from 'react'
import Sidebar from '../../components/admin/Sidebar'
import api from '../../services/api'

export default function Orders() {
  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    try {
      const response = await api.get('/orders')
      setOrders(response.data)
    } catch (error) {
      console.log('Backend belum jalan, pakai dummy data')

      setOrders([
        {
          id: 'ORD001',
          customer: 'Budi',
          package: 'Cuci Kering',
          status: 'Diproses'
        },
        {
          id: 'ORD002',
          customer: 'Siti',
          package: 'Setrika',
          status: 'Selesai'
        },
        {
          id: 'ORD003',
          customer: 'Andi',
          package: 'Cuci Express',
          status: 'Menunggu'
        }
      ])
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const updateStatus = async (id, newStatus) => {
    try {
      await api.put(`/orders/${id}`, {
        status: newStatus
      })

      alert('Status berhasil diupdate')
      fetchOrders()
    } catch (error) {
      console.log(error)
      alert('Gagal update status')
    }
  }

  const deleteOrder = async (id) => {
    try {
      await api.delete(`/orders/${id}`)

      alert('Order berhasil dihapus')
      fetchOrders()
    } catch (error) {
      console.log(error)
      alert('Gagal hapus order')
    }
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

        <div className="mb-4">
          <h1 className="fw-bold">
            Manajemen Orders
          </h1>

          <p className="text-muted">
            Kelola seluruh pesanan laundry pelanggan.
          </p>
        </div>

        <div className="card border-0 shadow-sm">

          <div className="card-header bg-white">
            <h4 className="mb-0">
              Data Orders
            </h4>
          </div>

          <div className="card-body">

            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead className="table-light">
                  <tr>
                    <th>ID Order</th>
                    <th>Customer</th>
                    <th>Paket</th>
                    <th>Status</th>
                    <th>Update Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>

                  {orders.map((order, index) => (

                    <tr key={index}>

                      <td>{order.id}</td>

                      <td>{order.customer}</td>

                      <td>{order.package}</td>

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

                      <td style={{ width: '220px' }}>
                        <select
                          className="form-select"
                          defaultValue={order.status}
                          onChange={(e) =>
                            updateStatus(
                              order.id,
                              e.target.value
                            )
                          }
                        >
                          <option>Menunggu</option>
                          <option>Diproses</option>
                          <option>Selesai</option>
                        </select>
                      </td>

                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            deleteOrder(order.id)
                          }
                        >
                          Delete
                        </button>
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}