import DashboardLayout from '../../components/common/DashboardLayout'
import { auth } from '../../firebase/firebaseConfig'
import { useEffect, useState } from 'react'

import {
  getCustomerByUid,
  updateCustomer
} from '../../services/customerService'

export default function Profile() {

  const user = auth.currentUser

  const [form, setForm] = useState({
    nama: '',
    nomor_telepon: '',
    alamat: ''
  })

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {

    if (!user) return

    const customer =
      await getCustomerByUid(user.uid)

    if (customer) {

      setForm({
        nama: customer.nama || '',
        nomor_telepon:
          customer.nomor_telepon || '',
        alamat:
          customer.alamat || ''
      })
    }
  }

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value
    })
  }

  const handleSubmit = async () => {

    try {

      await updateCustomer(
        user.uid,
        form
      )

      alert(
        'Profil berhasil diperbarui'
      )

    } catch (error) {

      console.log(error)

      alert(
        'Gagal memperbarui profil'
      )
    }
  }

  return (
    <DashboardLayout title="Profil">

      <div className="page-card">

        <h3 className="fw-bold mb-4">
          Profile Pelanggan
        </h3>

        <div className="mb-3">

          <label>Email</label>

          <input
            className="form-control"
            value={user?.email || ''}
            disabled
          />

        </div>

        <div className="mb-3">

          <label>Nama</label>

          <input
            className="form-control"
            name="nama"
            value={form.nama}
            onChange={handleChange}
          />

        </div>

        <div className="mb-3">

          <label>No Telepon</label>

          <input
            className="form-control"
            name="nomor_telepon"
            value={form.nomor_telepon}
            onChange={handleChange}
          />

        </div>

        <div className="mb-3">

          <label>
            Alamat 
          </label>

          <textarea
            className="form-control"
            rows="3"
            name="alamat"
            value={form.alamat}
            onChange={handleChange}
          />

        </div>

        <button
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Simpan Perubahan
        </button>

      </div>

    </DashboardLayout>
  )
}