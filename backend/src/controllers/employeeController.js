const db = require('../config/db')

const checkEmployee = async (req, res) => {

  const { email } = req.params

  try {

    const [rows] = await db.query(
      `
      SELECT *
      FROM pegawai
      WHERE email = ?
      `,
      [email]
    )

    if(rows.length === 0){

      return res.json({
        success:true,
        isEmployee:false
      })

    }

    res.json({
      success:true,
      isEmployee:true,
      data:rows[0]
    })

  } catch(error){

    res.status(500).json({
      success:false,
      error:error.message
    })

  }
}

const syncFirebaseUid = async (req, res) => {

  const { email, firebase_uid } = req.body

  try {

    await db.query(
      `
      UPDATE pegawai
      SET firebase_uid = ?
      WHERE email = ?
      `,
      [firebase_uid, email]
    )

    res.json({
      success: true,
      message: 'Firebase UID berhasil disimpan'
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })

  }
}

module.exports = {
  checkEmployee,
  syncFirebaseUid
}