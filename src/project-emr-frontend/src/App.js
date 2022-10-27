import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './navigation';
import { AuthProvider } from './context/auth.context'

const App = () => {

  // we get the user from the localStorage because that's where we will save their account on the login process
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthProvider userData={user}>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App;
