// useTranslate.test.tsx
import { waitFor, renderHook, act } from "@testing-library/react";
import useTranslate from "../useTranslate";
import translateText from "../../services/translationService";

// Mock the translation service
jest.mock("../../services/translationService");

// Mock function for translateText
const mockTranslateText = translateText as jest.MockedFunction<
  typeof translateText
>;

describe("useTranslate", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useTranslate());

    expect(result.current.translatedText).toBe("");
    expect(result.current.translatingContent).toBe(false);
    expect(result.current.translationError).toBe(null);
  });

  it("should set translatingContent to true while loading and false when done", async () => {
    mockTranslateText.mockResolvedValue("Hallo"); // Mock the translation result

    const { result } = renderHook(() => useTranslate());

    act(() => {
      result.current.translateContent({ text: "Hello", targetLang: "DE" });
    });

    expect(result.current.translatingContent).toBe(true);

    await waitFor(() => {
      expect(result.current.translatingContent).toBe(false);
    });
  });

  it("should update translatedText with the translated result on success", async () => {
    const mockResult = "Hallo";
    mockTranslateText.mockResolvedValue(mockResult);

    const { result } = renderHook(() => useTranslate());

    act(() => {
      result.current.translateContent({ text: "Hello", targetLang: "DE" });
    });

    await waitFor(() => {
      expect(result.current.translatedText).toBe(mockResult);
    });
    expect(result.current.translationError).toBe(null);
  });

  it("should set translationError when translation fails", async () => {
    mockTranslateText.mockRejectedValue(new Error("Translation failed"));

    const { result } = renderHook(() => useTranslate());

    act(() => {
      result.current.translateContent({ text: "Hello", targetLang: "DE" });
    });

    await waitFor(() => {
      expect(result.current.translationError).toBe(
        "Translation failed. Please try again."
      );
      expect(result.current.translatingContent).toBe(false);
    });
  });
});
