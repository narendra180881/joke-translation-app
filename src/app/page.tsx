"use client";
import React from "react";
import { useState } from "react";
import JokeDisplay from "./components/JokeDisplay";
import LanguageSelector from "./components/LanguageSelector";
import useFetchJoke from "./hooks/useFetchJoke";
import useTranslate from "./hooks/useTranslate";
import ErrorDisplay from "./components/ErrorDisplay";
import ShowLoader from "./components/ShowLoader";

const HomePage = () => {
  const { joke, fetchingJoke, jokeError } = useFetchJoke();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const {
    translatedText,
    translateContent,
    translatingContent,
    translationError,
  } = useTranslate();
  const [loadingText, setLoadingText] = useState<string>("Loading Joke...");

  const handleTranslate = () => {
    if (joke) {
      setLoadingText(`Translating text to ${selectedLanguage}`);
      translateContent({
        text: joke,
        targetLang: selectedLanguage,
      });
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Joke of the Day</h1>

      <div className="content">
        {/* Conditionally show the loader or the content */}
        {fetchingJoke || translatingContent ? (
          <ShowLoader loading={true} text={loadingText} />
        ) : (
          <>
            {/* Show content when not loading */}
            <ErrorDisplay error={jokeError || translationError} />
            <JokeDisplay joke={translatedText || joke} />
          </>
        )}
      </div>
      <div className="center-content">
        <LanguageSelector onSelect={setSelectedLanguage} />
        <button className="translate-btn" onClick={handleTranslate}>
          Translate
        </button>
      </div>
    </div>
  );
};

export default HomePage;
