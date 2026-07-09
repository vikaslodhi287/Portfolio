import { useEffect, useState } from "react";
import { getNavigation } from "../services/api/navigation.api";

export default function useNavigation() {
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

  return {
    navigation,
    loading,
    error,
  };
}