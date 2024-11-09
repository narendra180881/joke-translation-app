"use client"; // Ensure client-side use if needed

import { useState } from "react";
import translateText from "../services/translationService";

interface TranslationOptions {
  text: string | null;
  targetLang: string; // e.g., 'DE' for German, 'FR' for French
}

const useTranslate = () => {
  const [translatedText, setTranslation] = useState<string>("");
  const [translatingContent, setLoading] = useState<boolean>(false);
  const [translationError, setError] = useState<string | null>(null);

  const translateContent = async ({ text, targetLang }: TranslationOptions) => {
    setLoading(true);
    setError(null);

    try {
      const result = await translateText({ text, targetLang }); // Call the service
      setTranslation(result);
    } catch (err) {
      setError("Translation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    translatedText,
    translateContent,
    translatingContent,
    translationError,
  };
};

export default useTranslate;
