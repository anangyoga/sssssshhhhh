import { Navigate } from "react-router-dom";
import { StoreContext } from "../context/dataContext";

const ProtectedRoute = ({ children }) => {
  const { isUserLoggedIn } = StoreContext();
  if (!isUserLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
