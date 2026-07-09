import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { getNavigation } from "../services/api/navigation.api";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const [navigation, setNavigation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadNavigation() {
      try {
        const data = await getNavigation();
        setNavigation(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load navigation.");
      } finally {
        setLoading(false);
      }
    }

    loadNavigation();
  }, []);

const navItems = useMemo(() => {
  return navigation
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order);
}, [navigation]);

const value = useMemo(
  () => ({
    navigation,
    navItems,
    loading,
    error,
  }),
  [navigation, navItems, loading, error]
);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationContext() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      "useNavigationContext must be used inside NavigationProvider"
    );
  }

  return context;
}