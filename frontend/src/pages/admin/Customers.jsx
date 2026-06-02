import Sidebar from '../../components/admin/Sidebar'
import { useEffect, useState } from 'react'

import {
  getCustomers,
  deleteCustomer
} from '../../services/customerService'

export default function Customers() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    const data =
      await getCustomers()
    setCustomers(data)
  }

  const handleDelete = async (uid) => {
    const confirmDelete =
      window.confirm(
        'Yakin ingin menghapus customer?'
      )

    if (!confirmDelete) return

    try {

      await deleteCustomer(uid)

      alert('Customer berhasil dihapus')

      fetchCustomers()

    } catch (error) {

      console.log(error)

      alert('Gagal menghapus customer')
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

        <div className="mb-4">

          <h1 className="fw-bold">
            Data Customers
          </h1>

          <p className="text-muted">
            Kelola seluruh pelanggan laundry.
          </p>

        </div>

        {/* Statistik */}
        <div className="row g-4 mb-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Total Customers
                </h6>

                <h2 className="fw-bold">
                  {customers.length}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Customer Aktif
                </h6>

                <h2 className="fw-bold text-success">
                  {customers.length}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Member Baru
                </h6>

                <h2 className="fw-bold text-primary">
                  3
                </h2>
              </div>
            </div>
          </div>

        </div>

        {/* Tabel Customer */}
        <div className="card border-0 shadow-sm">

          <div className="card-header bg-white">
            <h4 className="mb-0">
              Daftar Customer
            </h4>
          </div>

          <div className="card-body">

            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead className="table-light">
                  <tr>
                    <th>ID Customer</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>No HP</th>
                    <th>Alamat</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>

                  {customers.map((customer, index) => (

                    <tr key={index}>

                      <td>CUS{String(customer.id).padStart(3, '0')}</td>

                      <td>{customer.nama}</td>

                      <td>{customer.email}</td>

                      <td>{customer.nomor_telepon || '-'}</td>

                      <td>{customer.alamat || '-'}</td>

                      <td>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            handleDelete(
                              customer.firebase_uid
                            )
                          }
                        >
                          Hapus
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}