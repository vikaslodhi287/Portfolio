import AppProvider from "../providers/AppProvider";

function Providers({ children }) {
  return <AppProvider>{children}</AppProvider>;
}

export default Providers;