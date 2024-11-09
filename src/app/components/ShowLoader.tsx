import React from "react";

interface ShowLoaderProps {
  loading: boolean;
  text: string;
}

const ShowLoader: React.FC<ShowLoaderProps> = ({ loading, text }) => {
  return <> {loading && <p className="loading">{text}</p>}</>;
};

export default ShowLoader;
