import { useEffect, useState } from "react";

import { getAllEducation } from "../services/api/education.api";

export default function useEducation() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEducation() {
      try {
        const data = await getAllEducation();

        setEducation(data.data);
      } catch (error) {
        console.error("Failed to load education:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEducation();
  }, []);

  return {
    education,
    loading,
  };
}