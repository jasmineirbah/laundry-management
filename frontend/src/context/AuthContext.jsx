import { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  // Login sementara
  const login = (username, password) => {

    if (username === 'admin' && password === 'admin') {

      setUser({
        username: 'admin'
      })

      alert('Login berhasil')

    } else {

      alert('Username atau password salah')

    }
  }

  // Logout
  const logout = () => {

    setUser(null)

    alert('Logout berhasil')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}