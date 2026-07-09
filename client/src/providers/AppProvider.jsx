import { NavigationProvider } from "../contexts/NavigationContext";
import { ProfileProvider } from "../contexts/ProfileContext";

function AppProvider({ children }) {
  return (
    <NavigationProvider>
      <ProfileProvider>
        {children}
      </ProfileProvider>
    </NavigationProvider>
  );
}

export default AppProvider;