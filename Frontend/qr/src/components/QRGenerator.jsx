import { useUserFileContext } from "../contexts/userFileContext";

const QRGenerator = ({ inputValue, setInputValue, placeholder, extraCSS }) => {
  const { setQrCode } = useUserFileContext();

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        className={`mt-1 ${extraCSS} w-full px-3 py-2 border rounded-lg`}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setQrCode(true);
        }}
      />
    </div>
  );
};

export default QRGenerator;