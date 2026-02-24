import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  // 1️⃣ Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2️⃣ Logged in but wrong role
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  // 3️⃣ Correct user
  return children;
};

export default ProtectedRoute;  