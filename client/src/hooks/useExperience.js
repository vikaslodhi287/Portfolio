import { useEffect, useState } from "react";
import { getAllExperiences } from "../services/api/experience.api";

export default function useExperience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const data = await getAllExperiences();

        setExperiences(data.data);
      } catch (error) {
        console.error("Failed to load experiences:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchExperiences();
  }, []);

  return {
    experiences,
    loading,
  };
}