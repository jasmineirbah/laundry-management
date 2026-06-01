import Navbar from '../../components/admin/Navbar'
import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function Orders() {

  const [orders, setOrders] = useState([])

  // AMBIL DATA
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

  // UPDATE STATUS
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

  // DELETE
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
    <>
      <Navbar />

      <div className="container">

        <h1 className="page-title">
          Data Orders
        </h1>

        <div className="table-container">

          {/* HEADER */}
          <div className="custom-table-header">

            <div>ID Order</div>
            <div>Customer</div>
            <div>Paket</div>
            <div>Status</div>
            <div>Update</div>
            <div>Aksi</div>

          </div>

          {/* DATA */}
          {orders.map((order, index) => (

            <div className="payment-row" key={index}>

              <div>{order.id}</div>

              <div>{order.customer}</div>

              <div>{order.package}</div>

              <div>

                <span className="badge bg-primary">
                  {order.status}
                </span>

              </div>

              <div>

                <select
                  className="form-control"
                  defaultValue={order.status}
                  onChange={(e) =>
                    updateStatus(order.id, e.target.value)
                  }
                >
                  <option>Menunggu</option>
                  <option>Diproses</option>
                  <option>Selesai</option>
                </select>

              </div>

              <div>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteOrder(order.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  )
}