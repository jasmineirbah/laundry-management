import Sidebar from '../../components/admin/Sidebar'
import { useEffect, useState } from 'react'

import {
  collection,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore'

import { db } from '../../firebase/firebaseConfig'

export default function AdminFeedback() {

  const [feedbacks, setFeedbacks] =
    useState([])

  useEffect(() => {

    const q = query(
      collection(
        db,
        'customer_feedback'
      ),
      orderBy(
        'createdAt',
        'desc'
      )
    )

    const unsubscribe =
      onSnapshot(q, snapshot => {

        const data =
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))

        setFeedbacks(data)
      })

    return () => unsubscribe()

  }, [])

  const averageRating =
    feedbacks.length > 0
      ? (
          feedbacks.reduce(
            (sum, item) =>
              sum + item.rating,
            0
          ) / feedbacks.length
        ).toFixed(1)
      : 0

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
            Feedback Pelanggan
          </h1>

          <p className="text-muted">
            Review dan penilaian pelanggan.
          </p>

        </div>

        <div className="row g-4 mb-4">

          <div className="col-md-6">

            <div className="card border-0 shadow-sm">

              <div className="card-body">

                <h6 className="text-muted">
                  Total Feedback
                </h6>

                <h2 className="fw-bold">
                  {feedbacks.length}
                </h2>

              </div>

            </div>

          </div>

          <div className="col-md-6">

            <div className="card border-0 shadow-sm">

              <div className="card-body">

                <h6 className="text-muted">
                  Rating Rata-rata
                </h6>

                <h2 className="fw-bold text-warning">
                  ⭐ {averageRating}
                </h2>

              </div>

            </div>

          </div>

        </div>

        <div className="card border-0 shadow-sm">

          <div className="card-header bg-white">

            <h4 className="mb-0">
              Daftar Feedback
            </h4>

          </div>

          <div className="card-body">

            {feedbacks.length > 0 ? (

              feedbacks.map(item => (

                <div
                  key={item.id}
                  className="border rounded p-3 mb-3 bg-white"
                >

                  <div className="d-flex justify-content-between">

                    <div>

                      <h5>
                        {item.customer}
                      </h5>

                      <p className="mb-1">
                        {'⭐'.repeat(
                          item.rating
                        )}
                      </p>

                    </div>

                    <small className="text-muted">

                      {item.createdAt
                        ? item.createdAt
                            .toDate()
                            .toLocaleString(
                              'id-ID'
                            )
                        : 'Baru saja'}

                    </small>

                  </div>

                  <p className="mb-0 mt-2">
                    {item.comment}
                  </p>

                </div>

              ))

            ) : (

              <div className="text-muted">
                Belum ada feedback
              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  )
}