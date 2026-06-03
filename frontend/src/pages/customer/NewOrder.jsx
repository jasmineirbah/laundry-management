import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import DashboardLayout from '../../components/common/DashboardLayout'

import { auth } from '../../firebase/firebaseConfig'

import { getPackages } from '../../services/packageService'
import { getCustomerByUid } from '../../services/customerService'
import { addOrder } from '../../services/orderService'

export default function NewOrder() {

  const navigate = useNavigate()

  const [packages, setPackages] = useState([])

  const [form, setForm] = useState({
    paket_id: '',
    berat_kg: '',
    alamat: ''
  })

  useEffect(() => {
    loadPackages()
  }, [])

  const loadPackages = async () => {
    const data = await getPackages()
    setPackages(data)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const uid = auth.currentUser?.uid

      const customer =
        await getCustomerByUid(uid)

      if (!customer) {
        alert('Data customer tidak ditemukan')
        return
      }

      const selectedPackage =
        packages.find(
          p => p.id === Number(form.paket_id)
        )

      if (!selectedPackage) {
        alert('Pilih paket terlebih dahulu')
        return
      }

      const totalHarga =
        Number(selectedPackage.harga)
        * Number(form.berat_kg)

      await addOrder({
        pelanggan_id: customer.id,
        paket_id: Number(form.paket_id),
        berat_kg: Number(form.berat_kg),
        total_harga: totalHarga
      })

      alert('Pesanan berhasil dibuat!')

      navigate('/customer/history')

    } catch (error) {

      console.log(error)

      alert('Gagal membuat pesanan')
    }
  }

  return (
    <DashboardLayout title="Pesan Laundry">

      <div className="page-card">

        <h3 className="fw-bold mb-4">
          Buat Pesanan Baru
        </h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label className="form-label">
              Paket Laundry
            </label>

            <select
              className="form-select"
              name="paket_id"
              value={form.paket_id}
              onChange={handleChange}
            >

              <option value="">
                Pilih Paket
              </option>

              {packages.map((paket) => (

                <option
                  key={paket.id}
                  value={paket.id}
                >
                  {paket.nama_paket}
                  {' - Rp '}
                  {Number(paket.harga)
                    .toLocaleString('id-ID')}
                  /kg
                </option>

              ))}

            </select>

          </div>

          <div className="mb-3">

            <label className="form-label">
              Berat (Kg)
            </label>

            <input
              type="number"
              className="form-control"
              name="berat_kg"
              value={form.berat_kg}
              onChange={handleChange}
              placeholder="Masukkan berat cucian"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Alamat Penjemputan
            </label>

            <textarea
              className="form-control"
              rows="3"
              name="alamat"
              value={form.alamat}
              onChange={handleChange}
            />

          </div>

          {form.paket_id && form.berat_kg && (

            <div className="alert alert-info">

              Total Estimasi:

              <strong>
                {' '}
                Rp{' '}
                {(
                  Number(
                    packages.find(
                      p => p.id === Number(form.paket_id)
                    )?.harga || 0
                  ) * Number(form.berat_kg)
                ).toLocaleString('id-ID')}
              </strong>

            </div>

          )}

          <button
            type="submit"
            className="btn btn-primary"
          >
            Buat Pesanan
          </button>

        </form>

      </div>

    </DashboardLayout>
  )
}