// src/pages/Login.jsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../../firebase/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
const API_URL = import.meta.env.VITE_API_URL

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  

  const handleLogin = async (e) => {
    e.preventDefault()

    setError('')
    setLoading(true)

    try {

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        )

      const user = userCredential.user

      await fetch(
       `${API_URL}/employees/sync-uid`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: user.email,
            firebase_uid: user.uid
          })
        }
      )

      const userEmail =
        userCredential.user.email

      const response = await fetch(
        `${API_URL}/employees/check-employee/${userEmail}`
      )

      const result = await response.json()

      if (result.isEmployee) {

        localStorage.setItem(
          'employee',
          JSON.stringify(result.data)
        )

        const jabatan = result.data.jabatan

        if (jabatan === 'Admin') {

          alert('Login sebagai Admin')
          navigate('/admin/dashboard')

        } else if (jabatan === 'Kasir') {

          alert('Login sebagai Kasir')
          navigate('/kasir/dashboard')

        } else if (jabatan === 'Kurir') {

          alert('Login sebagai Kurir')
          navigate('/kurir/dashboard')

        }

      } else {

        const customerResponse =
          await fetch(
            `${API_URL}/customers/${user.uid}`
          )

        const customerResult =
          await customerResponse.json()

        if (customerResult.success) {

          localStorage.setItem(
            'pelanggan_id',
            customerResult.data.id
          )

          localStorage.setItem(
            'customer',
            JSON.stringify(customerResult.data)
          )
        }

        alert('Login berhasil sebagai Customer!')
        navigate('/customer/dashboard')

      }
    } catch (err) {
      console.error(err)
      setError(
        'Gagal Masuk: Email atau Password salah.'
      )
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