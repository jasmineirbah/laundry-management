const db = require('../config/db')

const checkAdmin = async (req, res) => {
  try {

    const { email } = req.params

    const [rows] = await db.query(
      'SELECT * FROM pegawai WHERE email = ?',
      [email]
    )

    if (rows.length === 0) {
      return res.json({
        success: false,
        isAdmin: false
      })
    }

    return res.json({
      success: true,
      isAdmin: true,
      data: rows[0]
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

module.exports = {
  checkAdmin
}