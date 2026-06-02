import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {

  const navigate = useNavigate()

  const employee =
    JSON.parse(
      localStorage.getItem('employee')
    )

  const jabatan =
    employee?.jabatan || 'Admin'

  const logout = () => {

    localStorage.removeItem('employee')

    navigate('/')

  }

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
        {jabatan.toUpperCase()}
      </h6>

      <ul className="nav flex-column gap-3 flex-grow-1">

        {/* Dashboard */}

        <li>
          <Link
            className="nav-link text-dark"
            to={`/${jabatan.toLowerCase()}/dashboard`}
          >
            Dashboard
          </Link>
        </li>

        {/* KASIR + ADMIN */}

        {(jabatan === 'Admin' ||
          jabatan === 'Kasir') && (
          <>
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
          </>
        )}

        {/* ADMIN ONLY */}

        {jabatan === 'Admin' && (
          <>
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
          </>
        )}

        {/* ADMIN + KURIR */}

        {(jabatan === 'Admin' ||
          jabatan === 'Kurir') && (
          <li>
            <Link
              className="nav-link text-dark"
              to="/admin/packages"
            >
              Tracking
            </Link>
          </li>
        )}

      </ul>

      <button
        className="btn btn-danger mt-auto"
        onClick={logout}
      >
        Logout
      </button>

    </div>
  )
}