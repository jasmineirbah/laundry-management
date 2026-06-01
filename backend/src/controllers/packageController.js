const db = require('../config/db');

// 1. READ: Mengambil semua data paket (Ini yang sudah jalan)
const getAllPaket = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM paket_layanan"); 
        res.status(200).json({ success: true, data: rows });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. CREATE: Menambah paket laundry baru
const createPaket = async (req, res) => {
    const { nama_paket, harga_per_kg, estimasi_waktu } = req.body;
    try {
        const [result] = await db.query(
            "INSERT INTO paket_layanan (nama_paket, harga_per_kg, estimasi_waktu) VALUES (?, ?, ?)",
            [nama_paket, harga_per_kg, estimasi_waktu]
        );
        res.status(201).json({
            success: true,
            message: "Paket berhasil ditambahkan!",
            insertedId: result.insertId
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 3. UPDATE: Mengubah data paket berdasarkan ID
const updatePaket = async (req, res) => {
    const { id } = req.params;
    const { nama_paket, harga_per_kg, estimasi_waktu } = req.body;
    try {
        const [result] = await db.query(
            "UPDATE paket_layanan SET nama_paket = ?, harga_per_kg = ?, estimasi_waktu = ? WHERE id = ?",
            [nama_paket, harga_per_kg, estimasi_waktu, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Paket tidak ditemukan" });
        }
        res.status(200).json({ success: true, message: "Paket berhasil diperbarui!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 4. DELETE: Menghapus paket berdasarkan ID
const deletePaket = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query("DELETE FROM paket_layanan WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Paket tidak ditemukan" });
        }
        res.status(200).json({ success: true, message: "Paket berhasil dihapus!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { getAllPaket, createPaket, updatePaket, deletePaket };