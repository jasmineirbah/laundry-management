export default function OrderCard({
  id,
  customer,
  status
}) {
  return (
    <div className="card shadow-sm p-3">
      <h5>{id}</h5>

      <p>Customer: {customer}</p>

      <span className="badge bg-primary">
        {status}
      </span>
    </div>
  )
}