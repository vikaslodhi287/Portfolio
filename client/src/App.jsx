import { useEffect } from "react";
import { getProfile } from "./services/api/profile.api";

function App() {
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getProfile();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadProfile();
  }, []);

  return (
    <div className="app">
      <h1>Portfolio Frontend</h1>
    </div>
  );
}

export default App;