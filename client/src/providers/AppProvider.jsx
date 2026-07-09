import { ThemeProvider } from "../context/ThemeContext";
import { NavigationProvider } from "../context/NavigationContext";

function AppProvider({ children }) {
  return (
    <ThemeProvider>
      <NavigationProvider>
        {children}
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default AppProvider;