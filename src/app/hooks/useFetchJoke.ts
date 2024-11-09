import { useEffect, useState } from "react";
import { fetchJoke } from "../services/jokeService";

const useFetchJoke = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [fetchingJoke, setFetchingJoke] = useState(true);
  const [jokeError, setJokeError] = useState<string | null>(null);

  useEffect(() => {
    const getJoke = async () => {
      setFetchingJoke(true);
      setJokeError(null); // Reset error before each fetch attempt
      try {
        const joke = await fetchJoke();
        setJoke(joke);
      } catch (err: any) {
        setJokeError("Failed fetching jokes, please try again.");
      } finally {
        setFetchingJoke(false);
      }
    };

    getJoke();
  }, []);

  return { joke, fetchingJoke, jokeError };
};

export default useFetchJoke;
