import React from "react";

interface LanguageSelectorProps {
  onSelect: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  return (
    <select
      className="languageSelector"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      {/* Add more languages as needed */}
    </select>
  );
};

export default LanguageSelector;
