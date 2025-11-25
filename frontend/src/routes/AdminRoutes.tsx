import { Navigate } from "react-router-dom";
import AdminLayout from "../components/Admin Components/AdminLayout";

const AdminRoutes = () => {
  const isLoggedIn = localStorage.getItem("adminToken");

  if (!isLoggedIn) {
    return <Navigate to="/portfolio/admin/login" replace />;
  }

  return <AdminLayout />;
};

export default AdminRoutes;
