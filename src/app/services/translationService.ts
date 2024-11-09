import axios from "axios";

interface TranslationOptions {
  text: string | null;
  targetLang: string; // e.g., 'DE' for German, 'FR' for French
}

const translateText = async ({ text, targetLang }: TranslationOptions) => {
  const auth_key = process.env.SECRET_API_KEY;

  try {
    const response = await axios.post(
      "https://api-free.deepl.com/v2/translate",
      null,
      {
        params: {
          auth_key: auth_key, // Use the auth key from the environment variable
          text: text,
          target_lang: targetLang,
        },
      }
    );

    return response.data.translations[0].text;
  } catch (err) {
    throw new Error("Translation failed. Please try again.");
  }
};

export default translateText;
