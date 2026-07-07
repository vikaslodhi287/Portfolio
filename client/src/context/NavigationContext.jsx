import React, { createContext, useState, useEffect, useCallback } from 'react';

export const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoize the fetch function using useCallback to avoid re-renders
  const fetchPublicNavigation = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Import the API service dynamically inside the callback
      const { getNavigationItems } = await import('/src/services/api/navigation.api.js');
      const response = await getNavigationItems(false);
      
      // Ensure data is parsed correctly based on standard backend wrappers
      setNavItems(response?.data || response || []);
    } catch (err) {
      console.error('Failed to stream application navigation matrix:', err);
      setError(err?.message || 'Failed to retrieve navigation nodes.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPublicNavigation();
  }, [fetchPublicNavigation]);

  return (
    <NavigationContext.Provider value={{ navItems, loading, error, refreshNavigation: fetchPublicNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};