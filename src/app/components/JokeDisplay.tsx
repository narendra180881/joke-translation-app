import React from "react";

interface JokeDisplayProps {
  joke: string | null;
}

const JokeDisplay: React.FC<JokeDisplayProps> = ({ joke }) => {
  if (!joke) {
    return null; // Return null to render nothing if the joke is null or empty
  }
  return <div className="joke-display">{joke}</div>;
};

export default JokeDisplay;
