import { useAuth } from "../context/auth.context";
import { Route, useNavigate  } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";


export const ProtectedRoute = ({...rest }) => {
    const navigation = useNavigate();
    let { user } = useAuth();

    if (!user || !user.token || user.token === "") {
      return (
        // component which inform the user that they must be logged in
        <SweetAlert
          title="You must be signed in!"
          onCancel={() => navigation("/login")}
          onConfirm={() => navigation("/login")}
          confirmBtnCssClass={"px-5"}
        />
      );
    }
  
    // let user through if they're logged in
    return <Route {...rest} />;
  };

 