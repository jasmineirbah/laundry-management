const express = require('express');
const router = express.Router();
const { getAllPelanggan, getPelangganByUid, createPelanggan, updatePelanggan } = require('../controllers/customerController');

router.get('/', getAllPelanggan);          // Ambil semua (untuk Admin)
router.get('/:uid', getPelangganByUid);    // Ambil satu (untuk profil CS)
router.post('/', createPelanggan);         // Register profil baru
router.put('/:uid', updatePelanggan);      // Edit profil

module.exports = router;