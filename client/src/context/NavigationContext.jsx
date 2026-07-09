import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getNavigation } from "../services/api/navigation.api";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const [navigation, setNavigation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNavigation();
  }, []);

  async function loadNavigation() {
    try {
      const response = await getNavigation();
      setNavigation(response.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const value = useMemo(
    () => ({
      navigation,
      loading,
      reloadNavigation: loadNavigation,
    }),
    [navigation, loading]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used inside NavigationProvider");
  }

  return context;
}