const express = require('express')
const router = express.Router()

const {
  checkAdmin
} = require('../controllers/employeeController')

router.get(
  '/check-admin/:email',
  checkAdmin
)

module.exports = router