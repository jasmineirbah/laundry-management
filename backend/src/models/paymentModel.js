const db = require('../config/db')

const getAllPayments = async () => {

  const [rows] = await db.query(
    'SELECT * FROM pembayaran'
  )

  return rows
}

module.exports = {
  getAllPayments
}