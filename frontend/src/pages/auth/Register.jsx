// src/pages/Register.jsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../../firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { createCustomer } from '../../services/customerService'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    if (password.length < 6) {
      setError('Password minimal harus berisi 6 karakter!')
      return
    }
    if (password !== confirmPassword) {
      setError('Konfirmasi password tidak cocok dengan password utama!')
      return
    }

    setLoading(true)

    try {
      // Daftarkan akun baru ke Firebase. Akun yang lahir dari sini otomatis adalah Customer
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const firebaseUser = userCredential.user

      await createCustomer({
        firebase_uid: firebaseUser.uid,
        nama: email.split('@')[0],
        email: email,
        nomor_telepon: '',
        alamat: ''
      })

      alert('Pendaftaran Pelanggan Berhasil!')
      navigate('/') // Dilempar kembali ke halaman login utama setelah sukses

    } catch (err) {
      console.error(err)
      setError('Gagal Mendaftar: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'Arial, sans-serif', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#28a745', marginBottom: '5px' }}>Daftar Akun Baru</h2>
      <p style={{ textAlign: 'center', color: '#777', fontSize: '14px', marginTop: '0' }}>Pendaftaran khusus untuk Pelanggan Baru</p>
      
      {error && <p style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>{error}</p>}
      
      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email Anda:</label>
          <input 
            type="email" 
            placeholder="Contoh: pelangganbaru@gmail.com"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            disabled={loading} // Cegah input diganti saat loading kirim data
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Buat Password:</label>
          <input 
            type="password" 
            placeholder="Minimal 6 karakter"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            disabled={loading}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Ulangi Password:</label>
          <input 
            type="password" 
            placeholder="Ketik ulang password..."
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            disabled={loading}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
          />
        </div>

        {/* PERBAIKAN: Menambahkan disabled={loading} dan opacity warna agar tombol tidak bisa diklik ganda */}
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            width: '100%', 
            padding: '12px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Mendaftarkan Customer Baru...' : 'Daftar Sebagai Pelanggan'}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#555' }}>
        Sudah punya akun? <Link to="/" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>Masuk di sini</Link>
      </p>
    </div>
  )
}