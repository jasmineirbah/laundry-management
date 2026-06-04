const express = require('express')
const cors = require('cors')

const employeeRoutes = require('./routes/employeeRoutes')
const orderRoutes = require('./routes/orderRoutes')
const customerRoutes = require('./routes/customerRoutes')
const packageRoutes = require('./routes/packageRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const reportRoutes = require('./routes/reportRoutes')

const app = express()

app.use(cors())
app.use(express.json())

// ROOT ROUTE
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Laundry Backend API Running 🚀'
  })
})

app.use('/api/employees', employeeRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/customers', customerRoutes)
app.use('/api/packages', packageRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/reports', reportRoutes)

module.exports = app