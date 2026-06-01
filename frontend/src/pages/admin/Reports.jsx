import Navbar from '../../components/admin/Navbar'

export default function Reports() {

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h1 className="mb-4">
          Reports Laundry
        </h1>

        <div className="row">

          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5>Total Orders</h5>
              <h2>120</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5>Total Income</h5>
              <h2>Rp 5.200.000</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5>Total Customers</h5>
              <h2>58</h2>
            </div>
          </div>

        </div>

        <div className="card mt-4 p-4 shadow-sm">

          <h4>Laporan Bulanan</h4>

          <table className="table table-bordered mt-3">

            <thead className="table-dark">
              <tr>
                <th>Bulan</th>
                <th>Orders</th>
                <th>Pendapatan</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Januari</td>
                <td>100</td>
                <td>Rp 4.000.000</td>
              </tr>

              <tr>
                <td>Februari</td>
                <td>120</td>
                <td>Rp 5.200.000</td>
              </tr>

              <tr>
                <td>Maret</td>
                <td>140</td>
                <td>Rp 6.000.000</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </>
  )
}