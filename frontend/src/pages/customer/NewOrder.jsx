import DashboardLayout from '../../components/common/DashboardLayout'

export default function NewOrder() {
  return (
    <DashboardLayout title="Pesan Laundry">

      <div className="page-card">

        <h3 className="fw-bold mb-4">
          Buat Pesanan Baru
        </h3>

        <form>

          <div className="mb-3">
            <label className="form-label">
              Paket Laundry
            </label>

            <select className="form-select">
              <option>Pilih Paket</option>
              <option>Cuci Kering</option>
              <option>Cuci Setrika</option>
              <option>Setrika Saja</option>
              <option>Express</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Berat (Kg)
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Masukkan berat cucian"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Alamat Penjemputan
            </label>

            <textarea
              className="form-control"
              rows="3"
            />
          </div>

          <button
            className="btn btn-primary"
          >
            Buat Pesanan
          </button>

        </form>

      </div>

    </DashboardLayout>
  )
}