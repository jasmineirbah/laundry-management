import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function DashboardLayout({
  children
}) {
  return (
    <div
      className="d-flex"
      style={{
        backgroundColor: '#F8FAFC',
        minHeight: '100vh'
      }}
    >
      <Sidebar />

      <div className="flex-grow-1">

        <Navbar />

        <div className="p-4">
          {children}
        </div>

      </div>
    </div>
  )
}