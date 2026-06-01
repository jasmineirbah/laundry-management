import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <div
      className="bg-white border-end p-4 d-flex flex-column"
      style={{
        width: '260px',
        minHeight: '100vh'
      }}
    >
      <h2
        className="fw-bold"
        style={{
          color: '#ec4899'
        }}
      >
        Laundry
      </h2>

      <p className="text-muted">
        Cloud Laundry System
      </p>

      <hr />

      <h6 className="fw-bold text-secondary mb-4">
        ADMIN
      </h6>

      <ul className="nav flex-column gap-3 flex-grow-1">

        <li>
          <Link
            className="nav-link text-dark"
            to="/admin/dashboard"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            className="nav-link text-dark"
            to="/admin/orders"
          >
            Orders
          </Link>
        </li>

        <li>
          <Link
            className="nav-link text-dark"
            to="/admin/payments"
          >
            Payments
          </Link>
        </li>

        <li>
          <Link
            className="nav-link text-dark"
            to="/admin/customers"
          >
            Customers
          </Link>
        </li>

        <li>
          <Link
            className="nav-link text-dark"
            to="/admin/employees"
          >
            Employees
          </Link>
        </li>

        <li>
          <Link
            className="nav-link text-dark"
            to="/admin/reports"
          >
            Reports
          </Link>
        </li>

        <li>
          <Link
            className="nav-link text-dark"
            to="/admin/packages"
          >
            Tracking
          </Link>
        </li>

      </ul>

      <button
        className="btn btn-danger mt-auto"
        onClick={() => navigate('/')}
      >
        Logout
      </button>
    </div>
  )
}