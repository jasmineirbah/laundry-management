import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({
  children,
  allowedRoles
}) {

  const employee =
    JSON.parse(
      localStorage.getItem('employee')
    )

  if (!employee) {
    return <Navigate to="/" />
  }

  if (
    !allowedRoles.includes(
      employee.jabatan
    )
  ) {
    return <Navigate to="/" />
  }

  return children
}