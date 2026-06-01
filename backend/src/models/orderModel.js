const db = require('../config/db')

const getAllOrders = async () => {

  const [rows] = await db.query(`
    SELECT o.*,
           p.nama AS nama_pelanggan,
           pk.nama_paket
    FROM order_laundry o
    LEFT JOIN pelanggan p
      ON o.pelanggan_id = p.id
    LEFT JOIN paket_layanan pk
      ON o.paket_id = pk.id
  `)

  return rows
}

const getOrdersByCustomer = async (id) => {

  const [rows] = await db.query(
    'SELECT * FROM order_laundry WHERE pelanggan_id=?',
    [id]
  )

  return rows
}

module.exports = {
  getAllOrders,
  getOrdersByCustomer
}