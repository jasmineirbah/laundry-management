import { Link, useNavigate } from 'react-router-dom'

export default function NavbarCustomer() {
  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/customer/dashboard">
          🧺 Laundry Ku
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavCustomer"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavCustomer">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/customer/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/customer/new-order">
                Pesan Laundry
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/customer/history">
                Riwayat Saya
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <button 
                className="btn btn-danger btn-sm px-3"
                onClick={() => {
                  alert('Logout berhasil!')
                  navigate('/login')
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}