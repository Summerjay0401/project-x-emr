import {
    useAuth
} from '../context/auth.context'

export const ProtectedRoute = ({...rest }) => {
    let { user } = useAuth();
  
    // if (!user || !user.token || user.token === "") {
    //   return (
    //     // component which inform the user that they must be logged in
    //   );
    // }
  
    // let user through if they're logged in
    return <Route {...rest} />;
  };