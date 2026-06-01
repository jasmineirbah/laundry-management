const express = require('express');
const router = express.Router();
const { getAllOrders, getOrdersByPelanggan, createOrder, updateStatusCucian, bayarOrder, deleteOrder } = require('../controllers/orderController');

router.get('/', getAllOrders);                           // Ambil semua order (Admin)
router.get('/pelanggan/:pelanggan_id', getOrdersByPelanggan); // Riwayat per pelanggan
router.post('/', createOrder);                           // Buat order baru
router.put('/:id/status', updateStatusCucian);           // Update status laundry
router.put('/:id/bayar', bayarOrder);                     // Bayar laundry (Kasir)
router.delete('/:id', deleteOrder);                      // Hapon order

module.exports = router;