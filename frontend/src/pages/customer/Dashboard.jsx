import DashboardLayout from '../../components/common/DashboardLayout'
import { auth } from '../../firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { getOrdersByCustomer } from '../../services/orderService'
import {
  collection,
  onSnapshot
} from 'firebase/firestore'
import { db }
from '../../firebase/firebaseConfig'

export default function Dashboard() {

  const user = auth.currentUser

  const username =
    user?.email?.split('@')[0] || 'Customer'

  const [orders, setOrders] = useState([])

  const [tracking, setTracking] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  useEffect(() => {
    const unsubscribe =
      onSnapshot(
        collection(
          db,
          'tracking_status'
        ),
        snapshot => {

          const data =
            snapshot.docs.map(
              doc => ({
                id: doc.id,
                ...doc.data()
              })
            )

          setTracking(data)
        }
      )

    return () => unsubscribe()

  }, [])

  const fetchOrders = async () => {
    const pelangganId =
      localStorage.getItem('pelanggan_id')

    const data =
      await getOrdersByCustomer(pelangganId)

    if (data) {
      setOrders(data)
    }
  }

  const waitingOrders =
    orders.filter(
      order => order.status === 'Menunggu'
    ).length

  const processingOrders =
    orders.filter(
      order =>
        order.status === 'Diproses' ||
        order.status === 'Dicuci'
    ).length

  const finishedOrders =
    orders.filter(
      order =>
        order.status === 'Selesai' ||
        order.status === 'Diambil'
    ).length

  console.log(tracking)
  return (
    <DashboardLayout title="Dashboard">

      <div className="mb-4">
        <h2 className="fw-bold">
          Selamat Datang, {username} 👋
        </h2>

        <p className="text-muted">
          Pantau status laundry dan buat pesanan baru dengan mudah.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="stat-card waiting">
            <div className="stat-title">
              Order Menunggu
            </div>

            <div className="stat-value">
              {waitingOrders}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card processing">
            <div className="stat-title">
              Sedang Diproses
            </div>

            <div className="stat-value">
              {processingOrders}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card done">
            <div className="stat-title">
              Selesai
            </div>

            <div className="stat-value">
              {finishedOrders}
            </div>
          </div>
        </div>

      </div>

      <div className="table-card mt-4">

        <h5 className="fw-bold mb-3">
          Order Terbaru
        </h5>

        {orders.length > 0 ? (

          <table className="table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Paket</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>

              {orders.slice(0, 5).map(order => (

                <tr key={order.id}>
                  <td>{order.id}</td>

                  <td>{order.nama_paket}</td>

                  <td>{order.status}</td>

                  <td>
                    Rp {Number(order.total_harga)
                      .toLocaleString('id-ID')}
                  </td>
                </tr>

              ))}

            </tbody>

          </table>

        ) : (

          <div className="text-center py-5 text-muted">
            Belum ada order laundry
          </div>

        )}

      </div>

    </DashboardLayout>
  )
}