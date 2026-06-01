const db = require('../config/db');

// 1. Ambil Semua Order Masuk + Join Data Pelanggan & Paket (Untuk Admin)
const getAllOrders = async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT o.*, p.nama AS nama_pelanggan, pk.nama_paket 
            FROM order_laundry o
            LEFT JOIN pelanggan p ON o.pelanggan_id = p.id
            LEFT JOIN paket_layanan pk ON o.paket_id = pk.id
            ORDER BY o.tanggal_masuk DESC
        `);
        res.json({ success: true, data: rows });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. Ambil Riwayat Order Spesifik Milik 1 Pelanggan (Untuk Halaman Riwayat CS)
const getOrdersByPelanggan = async (req, res) => {
    const { pelanggan_id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM order_laundry WHERE pelanggan_id = ?', [pelanggan_id]);
        res.json({ success: true, data: rows });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 3. Buat Order Laundry Baru
const createOrder = async (req, res) => {
    const { pelanggan_id, paket_id, pegawai_id, berat_kg, total_harga } = req.body;
    try {
        // Masukkan data ke tabel order_laundry
        const [result] = await db.query(
            'INSERT INTO order_laundry (pelanggan_id, paket_id, pegawai_id, berat_kg, total_harga) VALUES (?, ?, ?, ?, ?)',
            [pelanggan_id, paket_id, pegawai_id, berat_kg, total_harga]
        );
        
        const orderId = result.insertId;

        // Otomatis buatkan juga tagihan kosong di tabel pembayaran untuk order ini
        await db.query(
            'INSERT INTO pembayaran (order_id, jumlah_bayar, status_pembayaran) VALUES (?, ?, "belum_bayar")',
            [orderId, total_harga]
        );

        res.json({ success: true, message: "Order dan tagihan berhasil dibuat!", orderId });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 4. Update Status Cucian (Contoh: dari 'antrean' ke 'dicuci' oleh Admin)
const updateStatusCucian = async (req, res) => {
    const { id } = req.params;
    const { status_cucian } = req.body; // 'antrean', 'dicuci', 'disetrika', 'siap_ambil', 'selesai'
    try {
        await db.query('UPDATE order_laundry SET status_cucian = ? WHERE id = ?', [status_cucian, id]);
        res.json({ success: true, message: `Status cucian berhasil diubah menjadi ${status_cucian}` });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 5. Proses Pembayaran Kasir (Mengubah status tagihan jadi lunas)
const bayarOrder = async (req, res) => {
    const { id } = req.params; // ini ID order
    const { metode_pembayaran } = req.body; // 'tunai', 'qris', 'transfer'
    try {
        await db.query(
            'UPDATE pembayaran SET metode_pembayaran = ?, status_pembayaran = "lunas", waktu_bayar = NOW() WHERE order_id = ?',
            [metode_pembayaran, id]
        );
        res.json({ success: true, message: "Pembayaran berhasil diproses, status LUNAS!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 6. Hapus Order (Admin)
const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM order_laundry WHERE id = ?', [id]);
        res.json({ success: true, message: "Order berhasil dihapus dari sistem" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { getAllOrders, getOrdersByPelanggan, createOrder, updateStatusCucian, bayarOrder, deleteOrder };