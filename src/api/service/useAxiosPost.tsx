import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosPost = (url: string, payload: any) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      (async () => {
        try {
          const response = await axios.post(
            url,
            payload
          );
  
          setData(response.data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoaded(true);
        }
      })();
    }, []);
  
    return { data, error, loaded };
};

export default useAxiosPost;