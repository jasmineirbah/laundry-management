const db = require('../config/db')

const getAllServices = async () => {
  const [rows] = await db.query(
    'SELECT * FROM paket_layanan'
  )

  return rows
}

const createService = async (data) => {
  const {
    nama_paket,
    harga_per_kg,
    estimasi_waktu
  } = data

  const [result] = await db.query(
    `
    INSERT INTO paket_layanan
    (
      nama_paket,
      harga_per_kg,
      estimasi_waktu
    )
    VALUES (?, ?, ?)
    `,
    [
      nama_paket,
      harga_per_kg,
      estimasi_waktu
    ]
  )

  return result
}

const updateService = async (id, data) => {
  const {
    nama_paket,
    harga_per_kg,
    estimasi_waktu
  } = data

  const [result] = await db.query(
    `
    UPDATE paket_layanan
    SET
      nama_paket=?,
      harga_per_kg=?,
      estimasi_waktu=?
    WHERE id=?
    `,
    [
      nama_paket,
      harga_per_kg,
      estimasi_waktu,
      id
    ]
  )

  return result
}

const deleteService = async (id) => {
  const [result] = await db.query(
    'DELETE FROM paket_layanan WHERE id=?',
    [id]
  )

  return result
}

module.exports = {
  getAllServices,
  createService,
  updateService,
  deleteService
}