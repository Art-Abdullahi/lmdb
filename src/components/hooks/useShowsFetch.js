import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";

export const useShowsFetch = () => {
  const [tv, setState] = useState({ shows: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchShows = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();

      setState((prev) => ({
        ...prev,
        shows: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchShows(`${API_URL}tv/popular?api_key=${API_KEY}`);
  }, []);

  return [{ tv, loading, error }, fetchShows];
};
