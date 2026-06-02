const db = require('../config/db')

const getAllCustomers = async () => {
  const [rows] = await db.query(
    'SELECT * FROM pelanggan'
  )

  return rows
}

const getCustomerByUid = async (uid) => {
  const [rows] = await db.query(
    'SELECT * FROM pelanggan WHERE firebase_uid = ?',
    [uid]
  )

  return rows[0]
}

const createCustomer = async (data) => {
  const {
    firebase_uid,
    nama,
    email,
    nomor_telepon,
    alamat
  } = data

  const [result] = await db.query(
    `
    INSERT INTO pelanggan
    (
      firebase_uid,
      nama,
      email,
      nomor_telepon,
      alamat
    )
    VALUES (?, ?, ?, ?, ?)
    `,
    [
      firebase_uid,
      nama,
      email,
      nomor_telepon,
      alamat
    ]
  )

  return result
}

const updateCustomer = async (uid, data) => {
  const {
    nama,
    nomor_telepon,
    alamat
  } = data

  const [result] = await db.query(
    `
    UPDATE pelanggan
    SET
      nama = ?,
      nomor_telepon = ?,
      alamat = ?
    WHERE firebase_uid = ?
    `,
    [
      nama,
      nomor_telepon,
      alamat,
      uid
    ]
  )

  return result
}

const deleteCustomer = async (uid) => {

  const [result] = await db.query(
    `
    DELETE FROM pelanggan
    WHERE firebase_uid = ?
    `,
    [uid]
  )

  return result
}

module.exports = {
  getAllCustomers,
  getCustomerByUid,
  createCustomer,
  updateCustomer,
  deleteCustomer
}