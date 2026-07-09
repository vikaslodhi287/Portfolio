import { useEffect, useState } from "react";
import { getProfile } from "../services/api/profile.api";

function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const response = await getProfile();
      setProfile(response.data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    profile,
    loading,
    error,
    reload: loadProfile,
  };
}

export default useProfile;