import './App.css';
import Routes from './navigation';
import { AuthProvider } from './context/auth.context'

const App = () => {
  // we get the user from the localStorage because that's where we will save their account on the login process
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  return (
    <AuthProvider userData={user}>
      <Routes />
    </AuthProvider>
  );
}


export default App;
