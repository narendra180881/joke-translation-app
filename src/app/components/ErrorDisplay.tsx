import React from "react";

interface ErrorProps {
  error: string | null;
}

const ErrorDisplay: React.FC<ErrorProps> = ({ error }) => {
  return <>{error && <p className="error">Error: {error}</p>}</>;
};

export default ErrorDisplay;
