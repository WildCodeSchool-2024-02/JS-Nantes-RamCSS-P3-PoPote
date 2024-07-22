import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import AdminPage from "../pages/AdminPage";

function ProtectedRoute() {
  const token = Cookies.get("token");
  const isAdminController = localStorage.getItem("isAdmin");

  const hasRequiredRole = isAdminController === "1";

  if (!token || !hasRequiredRole) {
    return <Navigate to="/connexion" />;
  }
  return <AdminPage />;
}

export default ProtectedRoute;
