import { QRCodeSVG } from "qrcode.react";
import { useUserFileContext } from "../contexts/userFileContext";
import friend from "../assets/friendIcon.png";
import romantic from "../assets/loveIcon.png";
import secret from "../assets/secretIcon.png";
import professional from "../assets/professionalIcon.png";
import gift from "../assets/giftIcon.png";
import fun from "../assets/funIcon.png";
import smile from "../assets/smileIcon.png"

function QRCode({ inputValue }) {
  const { themeStyle } = useUserFileContext();

  const themeStyles = {
    "🤝 Friendly": { fgColor: "#3B221F", bgColor: "#FFD54F", logo: friend },
    "💖 Romantic": { fgColor: "#7A0C45", bgColor: "#FCE4EC", logo: romantic },
    "🤫 Secret": { fgColor: "#2A177F", bgColor: "#E8E0F5", logo: secret },
    "🎁 Gift": { fgColor: "#A82E0A", bgColor: "#FFE0D4", logo: gift },
    "🎉 Fun": { fgColor: "#5E1790", bgColor: "#F1D5F5", logo: fun },
    "💼 Professional": {
      fgColor: "#000000",
      bgColor: "#f3f4f6",
      logo: professional,
    },
  };

  const defaultTheme = {
    fgColor: "#000000",
    bgColor: "#FFFFFF",
    logo: smile
  }

  const selectedTheme =
    themeStyles[themeStyle] || defaultTheme || themeStyles["💼 Professional"];

  return (
    <div>
      {inputValue && (
        <QRCodeSVG
          value={inputValue}
          size={256}
          fgColor={selectedTheme.fgColor}
          bgColor={selectedTheme.bgColor}
          level="H"
          imageSettings={{
            src: selectedTheme.logo, // Properly embed the logo
            height: 55,
            width: 55,
            excavate: true, // Reserves space inside QR for the logo
          }}
        />
      )}
    </div>
  );
}

export default QRCode;