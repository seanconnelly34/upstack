import axios from "axios";
import react, { useState, useEffect } from "react";

const useFetchData = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/events.json");
        const eventsList = response.data.events;
        setData(eventsList);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
