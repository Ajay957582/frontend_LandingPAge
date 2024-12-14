import React from "react";
import App from "../App";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard";
import AdminProtectedRoute from "./AdminProtectedRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LocalStorageCleaner from "./LocalStorageCleaner";
function ParentApp() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <LocalStorageCleaner>
              <App />
            </LocalStorageCleaner>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <Dashboard />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default ParentApp;
