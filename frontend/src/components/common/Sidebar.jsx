import { Link } from 'react-router-dom'

export default function Sidebar() {
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
          to="/customer/profile"
          className="d-block text-decoration-none mb-3 text-dark"
        >
          Profile
        </Link>

      </div>
    </div>
  )
}