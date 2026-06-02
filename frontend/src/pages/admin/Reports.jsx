import Sidebar from '../../components/admin/Sidebar'
import { useEffect, useState } from 'react'
import { getReport } from '../../services/reportService'

export default function Reports() {
  const [report, setReport] = useState({
    totalOrders: 0,
    totalCustomers: 0,
    totalIncome: 0
  })

  useEffect(() => {
    fetchReport()
  }, [])

  const fetchReport = async () => {
    const data = await getReport()

    if (data) {
      setReport(data)
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
            Laporan Laundry
          </h1>

          <p className="text-muted">
            Ringkasan performa bisnis laundry berdasarkan data bulanan.
          </p>

        </div>

        {/* Statistik */}
        <div className="row g-4 mb-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Total Orders
                </h6>

                <h2 className="fw-bold">
                  {report.totalOrders}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Total Pendapatan
                </h6>

                <h2 className="fw-bold text-success">
                  Rp {Number(report.totalIncome).toLocaleString('id-ID')}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Total Customer
                </h6>

                <h2 className="fw-bold text-primary">
                  {report.totalCustomers}
                </h2>
              </div>
            </div>
          </div>

        </div>

        {/* Tabel Laporan */}
        <div className="card border-0 shadow-sm">

          <div className="card-header bg-white">
            <h4 className="mb-0">
              Laporan Bulanan
            </h4>
          </div>

          <div className="card-body">

            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead className="table-light">
                  <tr>
                    <th>Bulan</th>
                    <th>Total Orders</th>
                    <th>Pendapatan</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Juni 2026</td>

                    <td>{report.totalOrders}</td>

                    <td className="fw-semibold text-success">
                      Rp {Number(report.totalIncome).toLocaleString('id-ID')}
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}