export default function CustomerTable({ customers }) {
  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>No HP</th>
          <th>Alamat</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer, index) => (
          <tr key={index}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.phone}</td>
            <td>{customer.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}