import DashboardLayout from '../../components/common/DashboardLayout'

export default function History() {

  return (
    <DashboardLayout title="Riwayat Laundry">

      <div className="table-card">

        <h3 className="fw-bold mb-4">
          Riwayat Pesanan
        </h3>

        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Paket</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td colSpan="4" className="text-center">
                Belum ada riwayat pesanan
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  )
}