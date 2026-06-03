import Sidebar from '../../components/admin/Sidebar'
import { useEffect, useState } from 'react'

import {
  collection,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore'

import { db } from '../../firebase/firebaseConfig'

export default function Packages() {

  const [trackingData, setTrackingData] =
    useState([])

  useEffect(() => {

    const q = query(
      collection(db, 'tracking_status'),
      orderBy('updatedAt', 'desc')
    )

    const unsubscribe =
      onSnapshot(q, (snapshot) => {

        const data =
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))

        setTrackingData(data)
      })

    return () => unsubscribe()

  }, [])

  const totalOrders =
    trackingData.length

  const processingOrders =
    trackingData.filter(
      item =>
        item.status === 'Diproses' ||
        item.status === 'Dicuci'
    ).length

  const completedOrders =
    trackingData.filter(
      item =>
        item.status === 'Selesai' ||
        item.status === 'Diambil'
    ).length

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
            Tracking Laundry
          </h1>

          <p className="text-muted">
            Pantau status laundry customer secara realtime.
          </p>

        </div>

        <div className="row g-4 mb-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">

                <h6 className="text-muted">
                  Total Tracking
                </h6>

                <h2 className="fw-bold">
                  {totalOrders}
                </h2>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">

                <h6 className="text-muted">
                  Sedang Diproses
                </h6>

                <h2 className="fw-bold text-warning">
                  {processingOrders}
                </h2>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">

                <h6 className="text-muted">
                  Selesai
                </h6>

                <h2 className="fw-bold text-success">
                  {completedOrders}
                </h2>

              </div>
            </div>
          </div>

        </div>

        <div className="card border-0 shadow-sm">

          <div className="card-header bg-white">
            <h4 className="mb-0">
              Riwayat Tracking Status
            </h4>
          </div>

          <div className="card-body">

            {trackingData.length > 0 ? (

              trackingData.map(item => (

                <div
                  key={item.id}
                  className="border rounded p-3 mb-3 bg-white"
                >

                  <div className="d-flex justify-content-between">

                    <div>

                      <h5>
                        Order #{item.orderId}
                      </h5>

                      <p className="mb-1 text-muted">
                        Customer: {item.customer}
                      </p>

                    </div>

                    <span
                      className={`badge ${
                        item.status === 'Selesai'
                          ? 'bg-success'
                          : item.status === 'Dicuci'
                          ? 'bg-info'
                          : item.status === 'Diproses'
                          ? 'bg-warning text-dark'
                          : 'bg-secondary'
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>

                  <small className="text-muted">

                    {item.updatedAt
                      ? item.updatedAt
                          .toDate()
                          .toLocaleString('id-ID')
                      : 'Baru saja'}

                  </small>

                </div>

              ))

            ) : (

              <div className="text-muted">
                Belum ada data tracking
              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  )
}