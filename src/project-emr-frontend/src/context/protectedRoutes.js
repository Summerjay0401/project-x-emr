import {
    protectedRoute,
} from 'react'


export const protectedRoute = ({...rest }) => {
    let { user } = useAuth();
  
    if (!user || !user.token || user.token === "") {
      return (
        // component which inform the user that they must be logged in
        <protectedRoute.Provider>
        <protectedRoute path="/rtl" component={RtlLayout} />
        <Route path="/auth" component={AuthLayout} /> 
        </ protectedRoute.Provider>
    );
    }
  
    // let user through if they're logged in
    return <Route {...rest} />;
  };

 