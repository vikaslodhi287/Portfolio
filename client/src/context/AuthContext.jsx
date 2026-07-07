import  { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext.js';

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('portfolio_admin_token');
    if (token) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAdmin({ authenticated: true });
    }
    setLoading(false);
  }, []);

  const loginSession = (token) => {
    localStorage.setItem('portfolio_admin_token', token);
    setAdmin({ authenticated: true });
  };

  const logoutSession = () => {
    localStorage.removeItem('portfolio_admin_token');
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, loading, loginSession, logoutSession }}>
      {children}
    </AuthContext.Provider>
  );
};