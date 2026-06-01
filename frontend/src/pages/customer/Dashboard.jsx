import DashboardLayout from '../../components/common/DashboardLayout'
import { auth } from '../../firebase/firebaseConfig'

export default function Dashboard() {

  const user = auth.currentUser

  const username =
    user?.email?.split('@')[0] || 'Customer'

  return (
    <DashboardLayout title="Dashboard">

      <div className="mb-4">
        <h2 className="fw-bold">
          Selamat Datang, {username} 👋
        </h2>

        <p className="text-muted">
          Pantau status laundry dan buat pesanan baru dengan mudah.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="stat-card waiting">
            <div className="stat-title">
              Order Menunggu
            </div>

            <div className="stat-value">
              0
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card processing">
            <div className="stat-title">
              Sedang Diproses
            </div>

            <div className="stat-value">
              0
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card done">
            <div className="stat-title">
              Selesai
            </div>

            <div className="stat-value">
              0
            </div>
          </div>
        </div>

      </div>

      <div className="table-card mt-4">

        <h5 className="fw-bold mb-3">
          Order Terbaru
        </h5>

        <div className="text-center py-5 text-muted">
          Belum ada order laundry
        </div>

      </div>

    </DashboardLayout>
  )
}