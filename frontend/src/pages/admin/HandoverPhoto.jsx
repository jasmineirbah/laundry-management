import Sidebar from '../../components/admin/Sidebar'
import { useState } from 'react'

import {
  saveHandoverPhoto
} from '../../services/trackingService'

export default function HandoverPhoto() {

  const [orderId, setOrderId] =
    useState('')

  const [customer, setCustomer] =
    useState('')

  const [photo, setPhoto] =
    useState('')

  const handleFileChange = (e) => {

    const file = e.target.files[0]

    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      setPhoto(reader.result)
    }

    reader.readAsDataURL(file)
  }

  const handleSubmit = async () => {

    try {

      await saveHandoverPhoto(
        orderId,
        customer,
        photo
      )

      alert(
        'Bukti serah terima berhasil disimpan'
      )

      setOrderId('')
      setCustomer('')
      setPhoto('')

    } catch (error) {

      console.log(error)

      alert(
        'Gagal menyimpan bukti'
      )
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

        <h1 className="fw-bold mb-4">
          Bukti Serah Terima
        </h1>

        <div className="card border-0 shadow-sm">

          <div className="card-body">

            <div className="mb-3">

              <label className="form-label">
                Order ID
              </label>

              <input
                className="form-control"
                value={orderId}
                onChange={(e) =>
                  setOrderId(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Customer
              </label>

              <input
                className="form-control"
                value={customer}
                onChange={(e) =>
                  setCustomer(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Upload Foto
              </label>

              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleFileChange}
              />

            </div>

            {photo && (

              <div className="mb-3">

                <label className="form-label">
                  Preview Foto
                </label>

                <br />

                <img
                  src={photo}
                  alt="Preview"
                  className="img-fluid rounded border"
                  style={{
                    maxHeight: '300px'
                  }}
                />

              </div>

            )}

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={!photo}
            >
              Simpan Bukti
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}