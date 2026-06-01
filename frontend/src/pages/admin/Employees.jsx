import Navbar from '../../components/admin/Navbar'

export default function Employees() {

  const employees = [
    {
      id: 'EMP001',
      nama: 'Rina',
      posisi: 'Kasir'
    },
    {
      id: 'EMP002',
      nama: 'Doni',
      posisi: 'Admin'
    },
    {
      id: 'EMP003',
      nama: 'Salsa',
      posisi: 'Kurir'
    }
  ]

  return (
    <>
      <Navbar />

      <div className="container">

        <h1 className="page-title">
          Data Pegawai
        </h1>

        <div className="table-container">

          {/* HEADER */}
          <div className="custom-table-header">

            <div>ID Pegawai</div>
            <div>Nama</div>
            <div>Posisi</div>
            <div>Status</div>
            <div>Aksi</div>

          </div>

          {/* DATA */}
          {employees.map((employee, index) => (

            <div className="payment-row" key={index}>

              <div>{employee.id}</div>

              <div>{employee.nama}</div>

              <div>{employee.posisi}</div>

              <div>

                <span className="badge bg-success">
                  Aktif
                </span>

              </div>

              <div>

                <button
                  className="btn btn-primary"
                  style={{ marginRight:'10px' }}
                >
                  Edit
                </button>

                <button className="btn btn-danger">
                  Hapus
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  )
}