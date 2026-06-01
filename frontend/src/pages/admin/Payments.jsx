import Navbar from '../../components/admin/Navbar'

export default function Payments() {

  const payments = [
    {
      id: 'PAY001',
      customer: 'Budi',
      total: 'Rp 50.000',
      status: 'Lunas'
    },
    {
      id: 'PAY002',
      customer: 'Siti',
      total: 'Rp 75.000',
      status: 'Belum Bayar'
    },
    {
      id: 'PAY003',
      customer: 'Andi',
      total: 'Rp 120.000',
      status: 'Lunas'
    }
  ]

  return (
    <>
      <Navbar />

      <div className="container">

        <h1 className="page-title">
          Data Pembayaran
        </h1>

        <div className="table-container">

          {/* HEADER */}
          <div className="custom-table-header">

            <div>ID Pembayaran</div>
            <div>Customer</div>
            <div>Total</div>
            <div>Status</div>
            <div>Aksi</div>

          </div>

          {/* DATA */}
          {payments.map((payment, index) => (

            <div className="payment-row" key={index}>

              <div>{payment.id}</div>

              <div>{payment.customer}</div>

              <div>{payment.total}</div>

              <div>

                <span
                  className={
                    payment.status === 'Lunas'
                    ? 'badge bg-success'
                    : 'badge bg-warning'
                  }
                >
                  {payment.status}
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