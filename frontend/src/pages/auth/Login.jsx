// src/pages/Login.jsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../../firebase/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('customer') // Default otomatis ke customer
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Autentikasi email dan password ke Firebase Cloud
      await signInWithEmailAndPassword(auth, email, password)

      // Memeriksa pilihan role di dropdown untuk menentukan arah halaman
      if (role === 'admin') {
        alert('Login Berhasil sebagai Petugas Laundry (Admin)!')
        navigate('/admin/dashboard') // Mengarah ke Dashboard Admin
      } else {
        alert('Login Berhasil sebagai Pelanggan (Customer)!')
        navigate('/customer/dashboard') // Mengarah ke Home Pelanggan milikmu
      }

    } catch (err) {
      console.error(err)
      setError('Gagal Masuk: Email/Password salah atau akun belum terdaftar.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'Arial, sans-serif', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '5px' }}>Sistem Laundry B07</h2>
      <p style={{ textAlign: 'center', color: '#777', fontSize: '14px', marginTop: '0' }}>Kelompok Cloud Computing</p>
      
      {error && <p style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>{error}</p>}
      
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email Akun:</label>
          <input 
            type="email" 
            placeholder="budi@gmail.com / admin@laundry.com"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password:</label>
          <input 
            type="password" 
            placeholder="Masukkan password Anda..."
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Masuk Sebagai:</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: 'white' }}
          >
            <option value="customer">Pelanggan (Customer)</option>
            <option value="admin">Petugas Laundry (Admin / Kasir)</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {loading ? 'Memproses Cloud...' : 'Masuk'}
        </button>
      </form>

      {/* Link Registrasi KHUSUS untuk Customer */}
      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#555' }}>
        Belum punya akun pelanggan? <Link to="/register" style={{ color: '#28a745', fontWeight: 'bold', textDecoration: 'none' }}>Daftar Sekarang</Link>
      </p>
    </div>
  )
}