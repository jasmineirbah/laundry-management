import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/common/DashboardLayout'

import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where
} from 'firebase/firestore'

import { db } from '../../firebase/firebaseConfig'

export default function Notifications() {

  const [notifications, setNotifications] =
    useState([])

  useEffect(() => {
    const customerData =
      JSON.parse(
        localStorage.getItem('customer')
      )

    if (!customerData) return

    const q = query(
      collection(db, 'notifications'),
      where(
        'customer',
        '==',
        customerData.nama
      ),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe =
      onSnapshot(q, (snapshot) => {

        const data =
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))

        setNotifications(data)
      })

    return () => unsubscribe()

  }, [])

  return (
    <DashboardLayout>

      <div className="page-card">

        <h3 className="fw-bold mb-4">
          Notifikasi
        </h3>

        {notifications.length > 0 ? (

          notifications.map(item => (

            <div
              key={item.id}
              className="card border-0 shadow-sm mb-3"
            >

              <div className="card-body">

                <h6 className="fw-bold mb-2">
                  📢 Update Status Laundry
                </h6>

                {item.orderId && (
                  <div className="mb-2">
                    <span className="badge bg-primary">
                      Order #{item.orderId}
                    </span>
                  </div>
                )}

                <p className="mb-2">
                  {item.message}
                </p>

                <small className="text-muted">

                  {item.createdAt
                    ? item.createdAt
                        .toDate()
                        .toLocaleString(
                          'id-ID',
                          {
                            dateStyle: 'full',
                            timeStyle: 'medium'
                          }
                        )
                    : 'Baru saja'}

                </small>

              </div>

            </div>

          ))

        ) : (

          <div className="alert alert-secondary">
            Belum ada notifikasi
          </div>

        )}

      </div>

    </DashboardLayout>
  )
}