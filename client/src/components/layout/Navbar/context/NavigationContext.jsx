import { createContext, useContext, useMemo, useState } from "react";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
    }),
    [activeSection]
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
      "useNavigationContext must be used inside NavigationProvider."
    );
  }

  return context;
}