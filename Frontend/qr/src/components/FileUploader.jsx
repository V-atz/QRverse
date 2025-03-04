import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { IoCloudDoneSharp } from "react-icons/io5";
import { useUserFileContext } from "../contexts/userFileContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uploadService from "../api/uploadService";

const FileUploader = ({ label, onChange }) => {
  const { setCloudinaryFileUrl, selectedFile, setSelectedFile } = useUserFileContext();
  const [fileSize, setFileSize] = useState(null);

  const MAX_SIZE_MB = {
    Image: 5, // 5MB
    Video: 50, // 50MB
    Voice: 10, // 10MB
  };

  const handleUpload = async (file) => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const toastId = toast.loading("Uploading file...");

    try {
      //api call to upload files through "uploadService"
      const response = await uploadService(file, label);
      setCloudinaryFileUrl(response?.fileUrl);
      console.log("Uploaded file URL:", response.fileUrl);
      toast.update(toastId, {
        render: "File uploaded successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error uploading file", error);
      toast.update(toastId, {
        render: "Upload failed!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setFileSize(null);
      return;
    }

    console.log("file selected: ", file)

    //file size validation
    const fileSizeMB = file.size / (1024 * 1024);
    const max_size = MAX_SIZE_MB[label] || 5;

    if (fileSizeMB > max_size) {
      toast.error(`File size exceeds the ${label} limit! Max: ${max_size}MB`);
      e.target.value = "";
      setFileSize(null);
      return;
    }

    //final file upload after validation
    setFileSize(fileSizeMB.toFixed(2));
    setSelectedFile(file);
    onChange(file); // Updating parent state
    handleUpload(file); //file upload function & api call
  };

  return (
    <div>
      <label
        htmlFor="fileInput"
        className={`mt-1 border px-4 py-2 ${
          selectedFile
            ? "pointer-events-none opacity-50 bg-gray-200"
            : "hover:bg-gray-800 hover:text-white"
        } rounded-lg inline-flex gap-2 items-center w-full justify-center cursor-pointer`}
      >
        {!selectedFile ? (
          <>
            Choose {label} File <FaUpload />
          </>
        ) : (
          <>
            File Uploaded <IoCloudDoneSharp />
          </>
        )}
      </label>
      <p className="text-xs text-gray-500">
        {!selectedFile
          ? `Max Size: ${MAX_SIZE_MB[label]}MB`
          : `File Size: ${fileSize}MB`}
      </p>
      <input
        id="fileInput"
        type="file"
        name="fileInput"
        className="hidden"
        disabled={!!selectedFile}
        onChange={handleFileChange}
      />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default FileUploader;