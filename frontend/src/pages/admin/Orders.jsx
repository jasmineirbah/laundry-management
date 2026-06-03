import { useEffect, useState } from 'react'
import Sidebar from '../../components/admin/Sidebar'
import api from '../../services/api'
import {
  saveTrackingStatus,
  saveNotification,
  saveHandoverPhoto,
  saveOutletSync,
  saveFeedback
} from '../../services/trackingService'

export default function Orders() {
  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    try {
      const response =
        await api.get('/api/orders')
      setOrders(response.data.data)
    } catch (error) {
      console.error(error)
      setOrders([])
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const updateStatus = async (
    id,
    customerName,
    newStatus
  ) => {
    try {
      await api.put(`/api/orders/${id}/status`, {
        status_cucian: newStatus
      })
      await saveTrackingStatus(
        id,
        customerName,
        newStatus
      )
      await saveNotification(
        customerName,
        `Pesanan laundry Anda sedang ${newStatus}`
      )
      alert('Status berhasil diupdate')
      fetchOrders()
    } catch (error) {
        console.log(error)
        console.log(error.response)
        console.log(error.response?.data)
        alert(
          JSON.stringify(
            error.response?.data || error.message
          )
        )
      }
  }

  const deleteOrder = async (id) => {
    try {
      await api.delete(`/api/orders/${id}`)

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
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Paket</th>
                    <th>Berat (Kg)</th>
                    <th>Total</th>
                    <th>Tanggal</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>

                  {orders.map((order, index) => (

                    <tr key={index}>

                      <td>{order.id}</td>

                      <td>{order.nama_pelanggan}</td>

                      <td>{order.nama_paket}</td>

                      <td>{order.berat_kg} Kg</td>

                      <td>
                        Rp {Number(order.total_harga).toLocaleString('id-ID')}
                      </td>

                      <td>
                        {new Date(order.tanggal_masuk)
                          .toLocaleDateString('id-ID')}
                      </td>

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
                          value={order.status}
                          onChange={(e) =>
                            updateStatus(
                              order.id,
                              order.nama_pelanggan,
                              e.target.value
                            )
                          }
                        >
                          <option value="Menunggu">Menunggu</option>
                          <option value="Diproses">Diproses</option>
                          <option value="Dicuci">Dicuci</option>
                          <option value="Selesai">Selesai</option>
                          <option value="Diambil">Diambil</option>
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

                      <td>
                        <button
                          className="btn btn-success btn-sm ms-2"
                          onClick={async () => {

                            await saveHandoverPhoto(
                              order.id,
                              order.nama_pelanggan,
                              'foto_serah_terima.jpg'
                            )

                              alert('Foto handover tersimpan')
                            }}
                          >
                            Handover
                        </button>
                      </td>

                      <td>
                        <button
                          className="btn btn-success btn-sm ms-2"
                          onClick={async () => {

                            await saveOutletSync(
                              'Outlet Pusat',
                              'Sinkronisasi berhasil'
                            )

                              alert('Outlet sync tersimpan')
                            }}
                          >
                            Sync
                        </button>
                      </td>

                      <td>
                        <button
                          className="btn btn-info btn-sm ms-2"
                          onClick={async () => {

                            await saveFeedback(
                              'akuhebat',
                              5,
                              'Pelayanan sangat memuaskan'
                            )

                              alert('Feedback tersimpan')
                            }}
                          >
                            Feedback
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