import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth
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

// Kasir & Kurir
import KasirDashboard from "../pages/kasir/Dashboard";
import KurirDashboard from "../pages/kurir/Dashboard";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* CUSTOMER */}
        <Route path="/customer/Dashboard" element={<Dashboard />} />
        <Route path="/customer/NewOrder" element={<NewOrder />} />
        <Route path="/customer/History" element={<History />} />
        <Route path="/customer/Profile" element={<Profile />} />

        {/* ================= ADMIN ================= */}

        <Route
          path="/admin/Dashboard"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/Orders"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Kasir"]}>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/Customers"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Kasir"]}>
              <Customers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/Payments"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Kasir"]}>
              <Payments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/Employees"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <Employees />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/Reports"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/Packages"
          element={
            <ProtectedRoute allowedRoles={["Admin", "Kurir"]}>
              <Packages />
            </ProtectedRoute>
          }
        />

        {/* ================= KASIR ================= */}

        <Route
          path="/kasir/Dashboard"
          element={
            <ProtectedRoute allowedRoles={["Kasir"]}>
              <KasirDashboard />
            </ProtectedRoute>
          }
        />

        {/* ================= KURIR ================= */}

        <Route
          path="/kurir/Dashboard"
          element={
            <ProtectedRoute allowedRoles={["Kurir"]}>
              <KurirDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;