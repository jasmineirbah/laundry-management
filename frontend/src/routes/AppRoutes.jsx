import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Dashboard from '../pages/customer/Dashboard'
import NewOrder from '../pages/customer/NewOrder'
import History from '../pages/customer/History'
import Profile from '../pages/customer/Profile'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/customer/dashboard"
          element={<Dashboard />}
        />
        
        <Route
          path="/customer/new-order"
          element={<NewOrder />}
        />

        <Route
          path="/customer/history"
          element={<History />}
        />

        <Route
          path="/customer/profile"
          element={<Profile />}
        />

      </Routes>
    </BrowserRouter>
  )
}