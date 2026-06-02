const db = require('../config/db')

const getReport = async (req, res) => {
  try {

    const [orders] = await db.query(
      'SELECT COUNT(*) AS total_orders FROM order_laundry'
    )

    const [customers] = await db.query(
      'SELECT COUNT(*) AS total_customers FROM pelanggan'
    )

    const [income] = await db.query(`
      SELECT IFNULL(SUM(total_harga),0) AS total_income
      FROM order_laundry
    `)

    res.json({
      success: true,
      data: {
        totalOrders: orders[0].total_orders,
        totalCustomers: customers[0].total_customers,
        totalIncome: income[0].total_income
      }
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })

  }
}

module.exports = {
  getReport
}