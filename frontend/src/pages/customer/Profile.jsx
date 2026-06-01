import DashboardLayout from '../../components/common/DashboardLayout'
import { auth } from '../../firebase/firebaseConfig'

export default function Profile() {

  const user = auth.currentUser

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
            placeholder="Masukkan nama"
          />
        </div>

        <div className="mb-3">
          <label>No Telepon</label>

          <input
            className="form-control"
            placeholder="085xx"
          />
        </div> 

        <div className="mb-3">
          <label className="form-label">
            Alamat Penjemputan
          </label>

          <textarea
            className="form-control"
            rows="3"
          />
        </div>

        <button className="btn btn-primary">
          Simpan Perubahan
        </button>

      </div>

    </DashboardLayout>
  )
}