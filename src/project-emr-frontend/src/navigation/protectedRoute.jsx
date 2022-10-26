import { useAuth } from "../context/auth.context";
import { Outlet, Navigate } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

export const ProtectedRoute = ({...rest }) => {
    let [state, dispatch] = useAuth();
    const { user } = state;

    // let user through if they're logged in
    return !user || !user.accessToken || user.accessToken === "" 
            ? <Navigate to="/login" /> : <Outlet />;
  };
