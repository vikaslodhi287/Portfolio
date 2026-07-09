import { useEffect, useState } from "react";
import { getProjects } from "../services/api/project.api";

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProjects() {
  try {
    const response = await getProjects();
    setProjects(response.data);
  } catch (err) {
    console.error(err);
    setError("Failed to load projects.");
  } finally {
    setLoading(false);
  }
}

    loadProjects();
  }, []);

  return {
    projects,
    loading,
    error,
  };
}