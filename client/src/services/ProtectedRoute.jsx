import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute() {
    const token = Cookies.get("token");
    const user = JSON.parse(Cookies.get("user"));

    const hasRequiredRole = user && (user.is_admin === 1 || user.is_superadmin === 1);

    if (!token || !hasRequiredRole) {
        return <Navigate to="/connexion" />;
    }
    return <Outlet />;
}

export default ProtectedRoute;
