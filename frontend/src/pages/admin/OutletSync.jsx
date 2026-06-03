import Sidebar from '../../components/admin/Sidebar'
import { useEffect, useState } from 'react'

import {
  collection,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore'

import { db } from '../../firebase/firebaseConfig'

export default function OutletSync() {

  const [syncData, setSyncData] =
    useState([])

  useEffect(() => {

    const q = query(
      collection(db, 'outlet_sync'),
      orderBy('syncedAt', 'desc')
    )

    const unsubscribe =
      onSnapshot(q, (snapshot) => {

        const data =
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))

        setSyncData(data)
      })

    return () => unsubscribe()

  }, [])

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

        <h1 className="fw-bold mb-4">
          Outlet Sync
        </h1>

        <div className="card border-0 shadow-sm">

          <div className="card-body">

            {syncData.length > 0 ? (

              syncData.map(item => (

                <div
                  key={item.id}
                  className="border rounded p-3 mb-3"
                >

                  <h5>
                    {item.outlet}
                  </h5>

                  <p className="mb-1">
                    Action: {item.action}
                  </p>

                  <small className="text-muted">

                    {item.syncedAt
                      ? item.syncedAt
                          .toDate()
                          .toLocaleString('id-ID')
                      : 'Baru saja'}

                  </small>

                </div>

              ))

            ) : (

              <div className="text-muted">
                Belum ada data sinkronisasi
              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  )
}