import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isUserLoggedIn, children }) => {
  if (!isUserLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
