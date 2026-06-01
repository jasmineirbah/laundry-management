import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Customer
import Dashboard from "../pages/customer/Dashboard";
import NewOrder from "../pages/customer/NewOrder";
import History from "../pages/customer/History";
import Profile from "../pages/customer/Profile";

// Admin
import AdminDashboard from "../pages/admin/Dashboard";
import Orders from "../pages/admin/Orders";
import Customers from "../pages/admin/Customers";
import Employees from "../pages/admin/Employees";
import Payments from "../pages/admin/Payments";
import Reports from "../pages/admin/Reports";
import Packages from "../pages/admin/Packages";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/customer/new-order" element={<NewOrder />} />
        <Route path="/customer/history" element={<History />} />
        <Route path="/customer/profile" element={<Profile />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/employees" element={<Employees />} />
        <Route path="/admin/payments" element={<Payments />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/packages" element={<Packages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;