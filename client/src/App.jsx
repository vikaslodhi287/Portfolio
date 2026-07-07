import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext.jsx';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider } from './context/NavigationContext.jsx'; // Imported Context Wrapper

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationProvider>
          <AppRoutes />
        </NavigationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;