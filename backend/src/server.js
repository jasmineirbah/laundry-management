const express = require('express');
const cors = require('cors');

const app = express();

// Middleware Utama
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use((req, res, next) => {
    console.log(`[LOG] Ada request masuk: ${req.method} ${req.url}`);
    next();
});

// 1. Rute Paket
const paketRoutes = require('./routes/packageRoutes');
app.use('/api/paket', paketRoutes);

// 2. Rute Pelanggan
const pelangganRoutes = require('./routes/customerRoutes');
app.use('/api/pelanggan', pelangganRoutes);

// 3. Rute Order
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

// route pembayaran
const paymentRoutes = require('./routes/paymentRoutes')

app.use(
  '/api/pembayaran',
  paymentRoutes
)

// Route 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Maaf, rute ${req.method} ${req.url} tidak ditemukan di server!`
    });
});

// Jalankan Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('=================================');
    console.log(`Server laundry berjalan di port ${PORT}`);
    console.log('=================================');
});

