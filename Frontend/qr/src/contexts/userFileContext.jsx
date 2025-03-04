import { createContext, useState, useContext } from "react";

//global state store
const userFileContext = createContext(null);

//context provider
export const UserFileContextProvider = ({ children }) => {
  const [messageType, setMessageType] = useState("Text");
  const [download, setDownload] = useState(null);
  const [qrCode, setQrCode] = useState(false);
  const [file, setFile] = useState(null);
  // const [enableCustomization, setEnableCustomization] = useState(false)
  const [enableCustomization, setEnableCustomization] = useState(true)
  const [themeStyle, setThemeStyle] = useState(null);
  const [cloudinaryFileUrl, setCloudinaryFileUrl] = useState(null)
  const [qrStringInput, setQrStringInput] = useState("")
  const [qrFileInput, setQrFileInput] = useState("")
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <userFileContext.Provider
      value={{
        messageType,
        setMessageType,
        download,
        setDownload,
        qrCode,
        setQrCode,
        file,
        setFile,
        themeStyle,
        setThemeStyle,
        enableCustomization,
        setEnableCustomization,
        cloudinaryFileUrl,
        setCloudinaryFileUrl,
        qrStringInput,
        setQrStringInput,
        qrFileInput,
        setQrFileInput,
        selectedFile,
        setSelectedFile
      }}
    >
      {children}
    </userFileContext.Provider>
  );
};

//custom hook to access context in other component
export const useUserFileContext = () => useContext(userFileContext);