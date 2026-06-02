import Sidebar from '../../components/admin/Sidebar'
import { useEffect, useState } from 'react'
import { getPayments } from '../../services/paymentService'

export default function Payments() {
  const [payments, setPayments] = useState([])

  useEffect(() => {
    fetchPayments()
  }, [])

  const fetchPayments = async () => {
    const data =
      await getPayments()
    setPayments(data)
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
            Data Pembayaran
          </h1>

          <p className="text-muted">
            Kelola seluruh transaksi pembayaran pelanggan.
          </p>

        </div>

        {/* Statistik */}
        <div className="row g-4 mb-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Total Pembayaran
                </h6>

                <h2 className="fw-bold">
                  {payments.length}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Pembayaran Lunas
                </h6>

                <h2 className="fw-bold text-success">
                  {
                    payments.filter(
                      (p) => p.status === 'Lunas'
                    ).length
                  }
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Belum Bayar
                </h6>

                <h2 className="fw-bold text-warning">
                  {
                    payments.filter(
                      (p) => p.status === 'Belum Bayar'
                    ).length
                  }
                </h2>
              </div>
            </div>
          </div>

        </div>

        {/* Tabel Pembayaran */}
        <div className="card border-0 shadow-sm">

          <div className="card-header bg-white">
            <h4 className="mb-0">
              Daftar Pembayaran
            </h4>
          </div>

          <div className="card-body">

            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead className="table-light">
                  <tr>
                    <th>ID Pembayaran</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>

                  {payments.map((payment, index) => (

                    <tr key={index}>

                      <td>{payment.id}</td>

                      <td>Order #{payment.order_id}</td>

                      <td>
                        Rp {Number(payment.total).toLocaleString('id-ID')}
                      </td>

                      <td>

                        <span
                          className={
                            payment.status === 'Lunas'
                              ? 'badge bg-success'
                              : 'badge bg-warning text-dark'
                          }
                        >
                          {payment.status}
                        </span>

                      </td>

                      <td>

                        <button
                          className="btn btn-primary btn-sm me-2"
                          disabled
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          disabled
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