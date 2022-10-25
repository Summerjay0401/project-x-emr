import {
  createContext,
  useContext,
  useState
} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ userData, children }) => {
  let [user, setUser] = useState(userData);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);