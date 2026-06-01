import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: '250px',
        minHeight: '100vh'
      }}
    >
      <h3 className="mb-4">Laundry Admin</h3>

      <ul className="nav flex-column gap-2">

        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/orders">
            Orders
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/payments">
            Payments
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/customers">
            Customers
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/employees">
            Employees
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/tracking">
            Tracking
          </Link>
        </li>

        <li className="nav-item mt-4">
          <button className="btn btn-danger w-100">
            Logout
          </button>
        </li>

      </ul>
    </div>
  )
}