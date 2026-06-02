const Customer = require('../models/customerModel')

const getAllPelanggan = async (req, res) => {
  try {

    const data = await Customer.getAllCustomers()

    res.json({
      success: true,
      data
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

const getPelangganByUid = async (req, res) => {

  try {

    const customer =
      await Customer.getCustomerByUid(
        req.params.uid
      )

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: 'Pelanggan tidak ditemukan'
      })
    }

    res.json({
      success: true,
      data: customer
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

const createPelanggan = async (req, res) => {
  try {

    console.log(req.body)

    const result =
      await Customer.createCustomer(req.body)

    res.status(201).json({
      success: true,
      message: 'Pelanggan berhasil dibuat',
      data: result
    })

  } catch (error) {

    console.error('ERROR CREATE CUSTOMER:')
    console.error(error)

    res.status(500).json({
      success: false,
      error: error.message
    })

  }
}

const updatePelanggan = async (req, res) => {

  try {

    await Customer.updateCustomer(
      req.params.uid,
      req.body
    )

    res.json({
      success: true,
      message: 'Pelanggan berhasil diperbarui'
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

const deletePelanggan = async (req, res) => {

  try {

    await Customer.deleteCustomer(
      req.params.uid
    )

    res.json({
      success: true,
      message: 'Pelanggan berhasil dihapus'
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

module.exports = {
  getAllPelanggan,
  getPelangganByUid,
  createPelanggan,
  updatePelanggan,
  deletePelanggan
}