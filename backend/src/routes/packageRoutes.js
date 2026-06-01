const express = require('express');
const router = express.Router();
const { 
    getAllPaket, 
    createPaket, 
    updatePaket, 
    deletePaket 
} = require('../controllers/packageController');

// ==========================================
// ENDPOINT CRUD - TABEL PAKET LAYANAN
// ==========================================

// 1. Ambil semua data paket
// URL Akses: GET http://localhost:3000/api/paket
router.get('/', getAllPaket);

// 2. Tambah data paket baru
// URL Akses: POST http://localhost:3000/api/paket
router.post('/', createPaket);

// 3. Update data paket berdasarkan ID
// URL Akses: PUT http://localhost:3000/api/paket/:id
router.put('/:id', updatePaket);

// 4. Hapus data paket berdasarkan ID
// URL Akses: DELETE http://localhost:3000/api/paket/:id
router.delete('/:id', deletePaket);

module.exports = router;