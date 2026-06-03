import DashboardLayout from '../../components/common/DashboardLayout'
import { useEffect, useState } from 'react'
import { getOrdersByCustomer } from '../../services/orderService'

import {
  collection,
  onSnapshot
} from 'firebase/firestore'

import { db } from '../../firebase/firebaseConfig'

export default function History() {

  const [orders, setOrders] = useState([])
  const [tracking, setTracking] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  useEffect(() => {

    const unsubscribe =
      onSnapshot(
        collection(db, 'tracking_status'),
        (snapshot) => {

          const data =
            snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }))

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

  const getRealtimeStatus = (order) => {

    const latestTracking =
      tracking
        .filter(
          item =>
            Number(item.orderId) === Number(order.id)
        )
        .sort(
          (a, b) =>
            (b.updatedAt?.seconds || 0) -
            (a.updatedAt?.seconds || 0)
        )[0]

    return latestTracking
      ? latestTracking.status
      : order.status
  }

  return (
    <DashboardLayout title="Riwayat Laundry">

      <div className="table-card">

        <h3 className="fw-bold mb-4">
          Riwayat Pesanan
        </h3>

        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Paket</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {orders.length > 0 ? (

              orders.map((order) => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>
                    {order.nama_paket || order.paket_id}
                  </td>

                  <td>
                    Rp {Number(order.total_harga)
                      .toLocaleString('id-ID')}
                  </td>

                  <td>
                    {getRealtimeStatus(order)}
                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td
                  colSpan="4"
                  className="text-center"
                >
                  Belum ada riwayat pesanan
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  )
}