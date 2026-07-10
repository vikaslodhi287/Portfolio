import { useEffect, useState } from "react";
import { getAllCertificates } from "../services/api/certificate.api";

export default function useCertificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const data = await getAllCertificates();

        setCertificates(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCertificates();
  }, []);

  return {
    certificates,
    loading,
  };
}