import React from "react";
import { useUserFileContext } from "../contexts/userFileContext";

function CustomizeQR() {
  const customizationThemes = [
    "🤝 Friendly",
    "💖 Romantic",
    "🤫 Secret",
    "🎁 Gift",
    "🎉 Fun",
    "💼 Professional",
  ];
  const { themeStyle, setThemeStyle, enableCustomization } = useUserFileContext();
  // console.log(themeStyle);

  return (
    <div className="flex flex-wrap items-center mt-1 gap-x-1 gap-y-2">
      {customizationThemes.map((type) => (
        <button
          disabled = {!enableCustomization}
          key={type}
          onClick={() => setThemeStyle(type)}
          className={`border md:min-w-[117px] px-4 py-1 me-1 rounded-lg ${
            themeStyle === type
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default CustomizeQR;