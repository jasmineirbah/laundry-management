import Navbar from '../../components/admin/Navbar'

export default function Customers() {

  const customers = [
    {
      id: 'CUS001',
      nama: 'Budi',
      nohp: '08123456789',
      alamat: 'Jakarta'
    },
    {
      id: 'CUS002',
      nama: 'Siti',
      nohp: '08987654321',
      alamat: 'Bandung'
    },
    {
      id: 'CUS003',
      nama: 'Andi',
      nohp: '082233445566',
      alamat: 'Surabaya'
    }
  ]

  return (
    <>
      <Navbar />

      <div className="container">

        <h1 className="page-title">
          Data Customers
        </h1>

        <div className="table-container">

          {/* HEADER */}
          <div className="custom-table-header">

            <div>ID Customer</div>
            <div>Nama</div>
            <div>No HP</div>
            <div>Alamat</div>
            <div>Aksi</div>

          </div>

          {/* DATA */}
          {customers.map((customer, index) => (

            <div className="payment-row" key={index}>

              <div>{customer.id}</div>

              <div>{customer.nama}</div>

              <div>{customer.nohp}</div>

              <div>{customer.alamat}</div>

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