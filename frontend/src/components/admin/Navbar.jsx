import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        <Link
          className="navbar-brand"
          to="/admin/dashboard"
        >
          Laundry Admin
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/admin/dashboard"
              >
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/admin/orders"
              >
                Orders
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/admin/payments"
              >
                Payments
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/admin/customers"
              >
                Customers
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/admin/employees"
              >
                Employees
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/admin/reports"
              >
                Reports
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/admin/packages"
              >
                Tracking
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}