import { useState } from 'react'
import DashboardLayout from '../../components/common/DashboardLayout'

import {
  collection,
  addDoc,
  serverTimestamp
} from 'firebase/firestore'

import { db } from '../../firebase/firebaseConfig'

export default function Feedback() {

  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')

  const submitFeedback = async () => {

    try {

      const customer =
        JSON.parse(
          localStorage.getItem('customer')
        )

      await addDoc(
        collection(
          db,
          'customer_feedback'
        ),
        {
          customer:
            customer?.nama || 'Customer',
          rating,
          comment,
          createdAt:
            serverTimestamp()
        }
      )

      alert(
        'Feedback berhasil dikirim'
      )

      setComment('')
      setRating(5)

    } catch (error) {

      console.log(error)

      alert(
        'Gagal mengirim feedback'
      )
    }
  }

  return (
    <DashboardLayout>

      <div className="page-card">

        <h3 className="fw-bold mb-4">
          Feedback Pelanggan
        </h3>

        <div className="mb-3">

          <label className="form-label">
            Rating
          </label>

          <select
            className="form-select"
            value={rating}
            onChange={(e) =>
              setRating(
                Number(e.target.value)
              )
            }
          >
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>

        </div>

        <div className="mb-3">

          <label className="form-label">
            Komentar
          </label>

          <textarea
            className="form-control"
            rows="4"
            value={comment}
            onChange={(e) =>
              setComment(
                e.target.value
              )
            }
          />

        </div>

        <button
          className="btn btn-primary"
          onClick={submitFeedback}
        >
          Kirim Feedback
        </button>

      </div>

    </DashboardLayout>
  )
}