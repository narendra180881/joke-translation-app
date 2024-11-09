import { renderHook, act, waitFor } from "@testing-library/react";
import useFetchJoke from "../../hooks/useFetchJoke";
import { fetchJoke } from "../../services/jokeService";

// Mock the fetchJoke service
jest.mock("../../services/jokeService", () => ({
  fetchJoke: jest.fn(),
}));

describe("useFetchJoke Hook", () => {
  it("should fetch and return a joke successfully", async () => {
    (fetchJoke as jest.Mock).mockResolvedValue("This is a test joke.");

    const { result } = renderHook(() => useFetchJoke());

    // Initially, fetchingJoke should be true
    expect(result.current.fetchingJoke).toBe(true);

    // Wait for the hook to update after fetching the joke
    await waitFor(() => {
      expect(result.current.fetchingJoke).toBe(false);
    });

    // Check that joke has been set
    expect(result.current.joke).toBe("This is a test joke.");
    expect(result.current.jokeError).toBe(null);
  });

  it("should handle fetch error", async () => {
    (fetchJoke as jest.Mock).mockRejectedValue(new Error("Failed to fetch"));

    const { result } = renderHook(() => useFetchJoke());

    // Initially, fetchingJoke should be true
    expect(result.current.fetchingJoke).toBe(true);

    // Wait for the hook to update after the error
    await waitFor(() => {
      expect(result.current.fetchingJoke).toBe(false);
    });

    // Check that error is set
    expect(result.current.joke).toBe(null);
    expect(result.current.jokeError).toBe(
      "Failed fetching jokes, please try again."
    );
  });
});
