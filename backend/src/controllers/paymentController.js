const Payment =
require('../models/paymentModel')

const getAllPayments = async (req,res) => {

  try {

    const data =
      await Payment.getAllPayments()

    res.json({
      success:true,
      data
    })

  } catch(error){

    res.status(500).json({
      success:false,
      error:error.message
    })

  }

}

module.exports = {
  getAllPayments
}