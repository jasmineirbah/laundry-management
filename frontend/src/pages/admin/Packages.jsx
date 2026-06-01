import Sidebar from '../../components/admin/Sidebar'

export default function Packages() {
  const trackingData = [
    {
      id: 'ORD001',
      customer: 'Budi',
      status: 'Diproses',
      progress: 60
    },
    {
      id: 'ORD002',
      customer: 'Siti',
      status: 'Selesai',
      progress: 100
    },
    {
      id: 'ORD003',
      customer: 'Andi',
      status: 'Menunggu',
      progress: 25
    }
  ]

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
            Tracking Laundry
          </h1>

          <p className="text-muted">
            Pantau progres pengerjaan laundry secara realtime.
          </p>

        </div>

        {/* Statistik */}
        <div className="row g-4 mb-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Total Order
                </h6>

                <h2 className="fw-bold">
                  3
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Sedang Diproses
                </h6>

                <h2 className="fw-bold text-warning">
                  1
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">
                  Selesai
                </h6>

                <h2 className="fw-bold text-success">
                  1
                </h2>
              </div>
            </div>
          </div>

        </div>

        {/* Tracking List */}
        <div className="card border-0 shadow-sm">

          <div className="card-header bg-white">
            <h4 className="mb-0">
              Status Tracking Laundry
            </h4>
          </div>

          <div className="card-body">

            {trackingData.map((item, index) => (

              <div
                key={index}
                className="mb-4 p-3 border rounded bg-white"
              >

                <div className="d-flex justify-content-between">

                  <div>
                    <h5>{item.id}</h5>
                    <p className="mb-1 text-muted">
                      Customer: {item.customer}
                    </p>
                  </div>

                  <div>

                    <span
                      className={`badge ${
                        item.status === 'Selesai'
                          ? 'bg-success'
                          : item.status === 'Diproses'
                          ? 'bg-warning text-dark'
                          : 'bg-secondary'
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>

                </div>

                <div className="progress mt-3">

                  <div
                    className={`progress-bar ${
                      item.progress === 100
                        ? 'bg-success'
                        : 'bg-primary'
                    }`}
                    style={{
                      width: `${item.progress}%`
                    }}
                  >
                    {item.progress}%
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}