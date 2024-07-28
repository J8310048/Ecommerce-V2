import { useEffect } from "react";
import axios from "axios";

function GenreFetch({ setGenres }) {
  useEffect(() => {
    axios
      .get(`https://laserfocus-disc-and-co-backend-server.onrender.com/genres`)
      .then((response) => {
        console.log("API response:", response.data);
        setGenres(response.data); // Update genres state with data from backend
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
      });
  }, [setGenres]);

  return null; // This component doesn't need to render anything
}

export default GenreFetch;
