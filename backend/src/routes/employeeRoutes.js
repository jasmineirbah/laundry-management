const express = require('express')
const router = express.Router()

const {
  checkEmployee,
  syncFirebaseUid,
  getAllEmployees
} = require('../controllers/employeeController')

router.get(
  '/check-employee/:email',
  checkEmployee
)

router.post(
  '/sync-uid',
  syncFirebaseUid
)

router.get('/', getAllEmployees)

module.exports = router