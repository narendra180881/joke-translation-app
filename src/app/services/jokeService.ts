import axios from "axios";

export const fetchJoke = async (): Promise<string> => {
  const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
  if (response.data.joke) {
    return response.data.joke;
  } else if (response.data.setup && response.data.delivery) {
    return `${response.data.setup} ${response.data.delivery}`;
  } else {
    throw new Error("Unexpected response format");
  }
};
