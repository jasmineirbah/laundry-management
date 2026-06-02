const express = require('express')
const router = express.Router()

const {
  checkEmployee,
  syncFirebaseUid
} = require('../controllers/employeeController')

router.get(
  '/check-employee/:email',
  checkEmployee
)

router.post(
  '/sync-uid',
  syncFirebaseUid
)

module.exports = router