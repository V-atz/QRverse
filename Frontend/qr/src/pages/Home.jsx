import React, { useEffect, useState } from "react";
import { FaDownload, FaQrcode } from "react-icons/fa";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import defaultQR from "../assets/defaultQR.png";
import FileUploader from "../components/FileUploader";
import { useUserFileContext } from "../contexts/userFileContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomizeQR from "../components/CustomizeQR";
import QRGenerator from "../components/QrGenerator";
import QRCode from "../components/QRCode";

function Home() {
  const {
    qrCode,
    setQrCode,
    messageType,
    setMessageType,
    setFile,
    cloudinaryFileUrl,
    setCloudinaryFileUrl,
    qrStringInput,
    setQrStringInput,
    setSelectedFile,
    setThemeStyle
  } = useUserFileContext();

  // const handleDownload = () => {
  //   if (!qrCode) return;

  //   const link = document.createElement("a");
  //   link.href = qrCode;
  //   link.download = "qr_code.png";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  //reset qr & input when message type changes
  useEffect(() => {
    setQrCode(false)
    setQrStringInput("")
    setFile(null)
    setSelectedFile(null)
    setCloudinaryFileUrl("")
    setThemeStyle(null)
  }, [messageType])

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 text-gray-800 py-8 md:py-0 min-h-[77.2vh] flex items-center justify-center px-8">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
          {/* Left Side - Input Fields */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Create your own QR Code
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Select Message Type
                </label>
                <div className="flex flex-wrap gap-y-2 items-center mt-1 gap-x-1">
                  {["Image", "Video", "Voice", "Text", "URL"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setMessageType(type)}
                      className={`border px-4 py-1 me-1 rounded-lg ${
                        messageType === type
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-800"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {["Image", "Video", "Voice"].includes(messageType) ? (
                <div>
                  <label className="block text-gray-700 font-medium">
                    Upload {messageType}
                  </label>
                  <FileUploader label={messageType} onChange={setFile} />
                  <QRGenerator
                    extraCSS={"hidden"}
                    inputValue={cloudinaryFileUrl}
                    setInputValue={setQrStringInput}
                    placeholder={`Enter ${messageType.toLowerCase()}`}
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-gray-700 font-medium">
                    Enter {messageType}
                  </label>
                  <QRGenerator
                    inputValue={qrStringInput}
                    setInputValue={setQrStringInput}
                    placeholder={`Enter ${messageType.toLowerCase()}`}
                  />
                  <p className="text-xs text-gray-500">
                    QR code will generate automatically as you enter your{" "}
                    {messageType}
                  </p>
                </div>
              )}
              {/* <QRGenerator /> */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Select Theme
                </label>
                <CustomizeQR />
              </div>
              {messageType == "Image" ||
              messageType == "Video" ||
              messageType == "Voice" ? (
                <button
                  onClick={() => {
                    if (cloudinaryFileUrl) {
                      setQrStringInput(cloudinaryFileUrl);
                      setQrCode(true);
                    } else {
                      toast.warn(
                        "Please upload a file before generating a QR code!"
                      );
                    }
                  }}
                  className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaQrcode /> Generate QR Code
                </button>
              ) : null}
            </div>
          </div>

          {/* Right Side - QR Code Preview */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your QR Code
            </h2>
            <div className="w-75 h-75 rounded-lg border border-black bg-white p-6 flex items-center justify-center">
              {qrCode ? (
                <QRCode inputValue={qrStringInput} />
              ) : (
                <img
                  src={defaultQR}
                  alt="Placeholder QR"
                  className="w-full h-full opacity-35"
                />
              )}
            </div>
            {/* download button */}

            {/* <button
              className={`mt-4 w-72 flex items-center justify-center px-13 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 flex items-center gap-2 ${
                !qrCode ? "opacity-35" : "opacity-100"
              }`}
              onClick={handleDownload}
              disabled={!qrCode}
            >
              <FaDownload /> Download
            </button> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;