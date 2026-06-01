import Sidebar from '../../components/admin/Sidebar'

export default function Reports() {
  const reports = [
    {
      bulan: 'Januari',
      orders: 100,
      pendapatan: 'Rp 4.000.000'
    },
    {
      bulan: 'Februari',
      orders: 120,
      pendapatan: 'Rp 5.200.000'
    },
    {
      bulan: 'Maret',
      orders: 140,
      pendapatan: 'Rp 6.000.000'
    }
  ]

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
                  120
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
                  Rp 5.200.000
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
                  58
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

                  {reports.map((report, index) => (

                    <tr key={index}>

                      <td>{report.bulan}</td>

                      <td>{report.orders}</td>

                      <td className="fw-semibold text-success">
                        {report.pendapatan}
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