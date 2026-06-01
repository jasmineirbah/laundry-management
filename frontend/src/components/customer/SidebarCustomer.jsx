import { Link, useNavigate } from 'react-router-dom'

export default function SidebarCustomer() {
  const navigate = useNavigate()

  return (
    <div
      className="bg-dark text-white p-3 d-flex flex-column"
      style={{
        width: '250px',
        minHeight: '100vh'
      }}
    >
      <h3 className="mb-4 text-primary fw-bold">🧺 Laundry Ku</h3>

      <ul className="nav flex-column gap-2 flex-grow-1">
        <li className="nav-item">
          <Link className="nav-link text-white hover-overlay" to="/customer/dashboard">
            🏠 Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/customer/new-order">
            ➕ Pesan Laundry
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/customer/history">
            📜 Riwayat Laundry
          </Link>
        </li>
      </ul>

      <div className="mt-auto pt-3">
        <button 
          className="btn btn-danger w-100"
          onClick={() => {
            alert('Logout berhasil!')
            navigate('/login')
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}