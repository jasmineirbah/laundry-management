import { Link } from 'react-router-dom'

export default function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg">

      <div className="container-fluid">

        <Link
          className="navbar-brand"
          to="/"
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
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                Orders
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/payments">
                Payments
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/customers">
                Customers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/employees">
                Employees
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/tracking">
                Tracking
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  )
}