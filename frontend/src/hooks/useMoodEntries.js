import { useEffect, useState } from "react";
import api from "../services/api";

export function useMoodEntries() {
  const [entries, setEntries] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // Fetch latest moods
  const fetchEntries = async () => {
    try {
      setLoading(true);

      const response = await api.get("/mood");

      setEntries(response.data);
    } catch (err) {
      console.error(err);

      setError("Failed to load moods.");
    } finally {
      setLoading(false);
    }
  };

  // Create mood entry
  const createEntry = async (payload) => {
    try {
      setLoading(true);

      await api.post("/mood", payload);

      // Refresh timeline after submit
      await fetchEntries();
    } catch (err) {
      console.error(err);

      setError("Failed to save mood.");
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchEntries();
  }, []);

  return {
    entries,
    loading,
    error,
    createEntry,
  };
}