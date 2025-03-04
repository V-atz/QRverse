import React, { useState } from "react";

function TermsAndConditions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="text-gray-400 text-sm hover:text-white transition-all duration-200"
        onClick={() => setIsOpen(true)}
      >
        Terms & Conditions
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center p-4">
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg max-w-2xl w-full relative">
          <h2 className="text-xl bg-gray-700 p-2 rounded-lg font-semibold mb-4">
            Terms & Conditions
          </h2>
          <div className="text-sm max-h-60 overflow-y-auto">
            <p>
              <strong>1. Acceptance of Terms</strong>
            </p>
            <p>
              By using this QR Code Generator ("the Service"), you agree to
              these Terms & Conditions. If you do not agree, please do not use
              the Service.
            </p>

            <p>
              <strong>2. Intended Use</strong>
            </p>
            <p>
              This Service is provided for fun and testing purposes only. It
              is not intended for professional, commercial, or critical use.
              Use at your own risk.
            </p>

            <p>
              <strong>3. No Liability</strong>
            </p>
            <p>
              We are not responsible for any issues, damages, or losses
              resulting from the use of this Service.
            </p>

            <p>
              <strong>4. Data Storage</strong>
            </p>
            <p>
              The Service does not guarantee any data storage or retention. Users are responsible for managing their own data.
            </p>

            <p>
              <strong>5. Third-Party Services</strong>
            </p>
            <p>
              This Service uses Cloudinary for file storage. By uploading
              content, you agree to Cloudinary’s terms and policies.
            </p>

            <p>
              <strong>6. User Responsibility</strong>
            </p>
            <p>
              You are solely responsible for any content uploaded or shared
              via the Service.
            </p>

            <p>
              <strong>7. Changes to Terms</strong>
            </p>
            <p>
              We reserve the right to modify these Terms at any time without
              prior notice.
            </p>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
      )}
    </>
  );
}

export default TermsAndConditions;