import axios from "axios";
import translateText from "../translationService"; // Adjust the import path as needed

// Mock the axios module
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("translateText", () => {
  it("should return the translated text when API call is successful", async () => {
    // Mock the response from axios
    mockedAxios.post.mockResolvedValue({
      data: {
        translations: [{ text: "Hallo Welt" }],
      },
    });

    const result = await translateText({
      text: "Hello World",
      targetLang: "DE",
    });
    expect(result).toBe("Hallo Welt");
  });

  it("should throw an error if API call fails", async () => {
    // Mock an error response from axios
    mockedAxios.post.mockRejectedValue(new Error("Network Error"));

    await expect(
      translateText({ text: "Hello World", targetLang: "FR" })
    ).rejects.toThrow("Translation failed. Please try again.");
  });
});
