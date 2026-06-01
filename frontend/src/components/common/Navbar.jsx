import { auth } from '../../firebase/firebaseConfig'

export default function Navbar() {

  const user = auth.currentUser

  return (
    <div
      className="bg-white border-bottom px-4 d-flex align-items-center justify-content-between"
      style={{
        height: '70px'
      }}
    >
      <div>
        <h5 className="mb-0 fw-bold">
          Dashboard
        </h5>
      </div>

      <div className="d-flex align-items-center gap-3">

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#EC4899',
            color: '#fff',
            fontWeight: 'bold'
          }}
        >
          {user?.email?.charAt(0).toUpperCase()}
        </div>

        <div>
          <div className="fw-semibold">
            {user?.email}
          </div>

          <small className="text-muted">
            Customer
          </small>
        </div>

      </div>
    </div>
  )
}