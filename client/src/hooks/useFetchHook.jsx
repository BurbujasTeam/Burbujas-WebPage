import { useEffect, useState } from "react";

export default function useFetchHook(setData, url) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      let response = await fetch(url);
      let result = await response.json();

      if (result.length > 0) {
        setTimeout(() => {
          setData(result);
          setLoading(false);
          setErrors(null);
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      setErrors(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, errors };
}
