import Sidebar from '../../components/admin/Sidebar'
import { useState, useEffect } from 'react'
import { getEmployees } from '../../services/employeeService'

export default function Employees() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    const data = await getEmployees()
    setEmployees(data)
  }

  return (
    <div className="d-flex">

      <Sidebar />

      <div
        className="flex-grow-1 p-4"
        style={{
          background: '#f5f6fa',
          minHeight: '100vh'
        }}
      >

        <div className="mb-4">

          <h1 className="fw-bold">
            Data Pegawai
          </h1>

          <p className="text-muted">
            Kelola data karyawan dan staf laundry.
          </p>

        </div>

        {/* Statistik */}
        <div className="row g-4 mb-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Total Pegawai
                </h6>

                <h2 className="fw-bold">
                  {employees.length}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Pegawai Aktif
                </h6>

                <h2 className="fw-bold text-success">
                  {employees.length}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Posisi Tersedia
                </h6>

                <h2 className="fw-bold text-primary">
                  3
                </h2>
              </div>
            </div>
          </div>

        </div>

        {/* Tabel Pegawai */}
        <div className="card border-0 shadow-sm">

          <div className="card-header bg-white">
            <h4 className="mb-0">
              Daftar Pegawai
            </h4>
          </div>

          <div className="card-body">

            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead className="table-light">
                  <tr>
                    <th>ID Pegawai</th>
                    <th>Nama</th>
                    <th>Posisi</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  {employees.map((employee, index) => (

                    <tr key={index}>

                      <td>
                        EMP{String(employee.id).padStart(3, '0')}
                      </td>

                      <td>{employee.nama}</td>

                      <td>{employee.jabatan}</td>

                      <td>
                        <span className="badge bg-success">
                          Aktif
                        </span>
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}