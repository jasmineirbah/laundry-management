import { Link, useNavigate } from 'react-router-dom' // 1. Tambahkan useNavigate di sini

export default function Sidebar() {
  const navigate = useNavigate() // 2. Inisialisasi fungsi navigate

  return (
    <div
      className="bg-white border-end"
      style={{
        width: '260px',
        minHeight: '100vh'
      }}
    >
      <div className="p-4 border-bottom">
        <h4
          className="fw-bold mb-0"
          style={{
            color: '#EC4899'
          }}
        >
          Laundry
        </h4>

        <small className="text-muted">
          Cloud Laundry System
        </small>
      </div>

      <div className="p-3">

        <p className="text-uppercase text-muted small fw-bold">
          Customer
        </p>

        <Link
          to="/customer/dashboard"
          className="d-block text-decoration-none mb-3 text-dark"
        >
          Dashboard
        </Link>

        <Link
          to="/customer/new-order"
          className="d-block text-decoration-none mb-3 text-dark"
        >
          Pesan Laundry
        </Link>

        <Link
          to="/customer/history"
          className="d-block text-decoration-none mb-3 text-dark"
        >
          Riwayat
        </Link>
        
        <Link
          to="/customer/notifications"
          className="d-block text-decoration-none mb-3 text-dark"
        >
          Notifikasi
        </Link>

        <Link
          to="/customer/profile"
          className="d-block text-decoration-none mb-3 text-dark"
        >
          Profile
        </Link>

        <Link
          to="/customer/feedback"
          className="d-block text-decoration-none mb-3 text-dark"
        >
          Feedback
        </Link>

        {/* --- TAMBAHAN MENU LOGOUT TEPAT DI BAWAH PROFILE --- */}
        <button
          onClick={() => {
            alert('Logout berhasil!')
            navigate('/')
          }}
          className="d-block bg-transparent border-0 p-0 text-decoration-none text-dark w-100 text-start"
          style={{ fontSize: 'inherit' }}
        >
          Logout
        </button>
        {/* --- BATAS AKHIR TAMBAHAN --- */}

      </div>
    </div>
  )
}