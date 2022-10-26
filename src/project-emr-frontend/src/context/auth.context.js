import {
  createContext,
  useContext,
  useState,
  useReducer
} from 'react';

import authReducer from './reducers/authReducer'

const initialState = {
  user: null,
  error: null
};

const AuthContext = createContext(initialState);

export const AuthProvider = ({ userData, children }) => {
  let [user, setUser] = useState(userData);

  initialState.user = user ? user : null;
  
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);