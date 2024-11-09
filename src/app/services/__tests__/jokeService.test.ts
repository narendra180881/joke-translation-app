import axios from "axios";
import { fetchJoke } from "../jokeService"; // Adjust the import path as needed

// Mock the axios module
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchJoke", () => {
  it("should return the joke if response contains a 'joke' field", async () => {
    // Mock axios response
    mockedAxios.get.mockResolvedValue({
      data: {
        joke: "Why did the chicken cross the road? To get to the other side!",
      },
    });

    const result = await fetchJoke();
    expect(result).toBe(
      "Why did the chicken cross the road? To get to the other side!"
    );
  });

  it("should return a combined joke if response contains 'setup' and 'delivery' fields", async () => {
    // Mock axios response
    mockedAxios.get.mockResolvedValue({
      data: {
        setup: "Why did the scarecrow win an award?",
        delivery: "Because he was outstanding in his field.",
      },
    });

    const result = await fetchJoke();
    expect(result).toBe(
      "Why did the scarecrow win an award? Because he was outstanding in his field."
    );
  });

  it("should throw an error if response format is unexpected", async () => {
    // Mock axios response with unexpected data structure
    mockedAxios.get.mockResolvedValue({
      data: {},
    });

    await expect(fetchJoke()).rejects.toThrow("Unexpected response format");
  });
});
