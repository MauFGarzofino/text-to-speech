import { useState } from "react";
import Select from "../../atoms/inputs/Select";
import Option from "../../atoms/inputs/Option";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="language-selector">Language: </label>
      <Select value={selectedLanguage} onChange={handleLanguageChange}>
        <Option value="en-US" label="English (US)" />
        <Option value="es-ES" label="Spanish (ES)" />
        <Option value="pt-BR" label="Portuguese (BR)" />
        {/* ... */}
      </Select>
    </div>
  );
};

export default LanguageSelector;
