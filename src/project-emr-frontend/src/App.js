import { BrowserRouter } from 'react-router-dom';
import Routes from './navigation';
import { AuthProvider } from './context/auth.context'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import './App.css';

const App = () => {
  const [theme, colorMode] = useMode();

  // we get the user from the localStorage because that's where we will save their account on the login process
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthProvider userData={user}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App;
