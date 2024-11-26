import React, { useState } from "react";

const FileUploadSection = ({ formData, handleFileChange }) => {
  return (
    <>
      <div className="border border-black p-4 rounded mb-6">
        {/* Row 1: Photo on Left, Signature on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Photo */}
          <div className="flex flex-col items-center justify-center">
            <label className="font-medium text-center mb-2">Photo</label>
            {/* Photo Image Placeholder */}
            <div className="w-3/4 h-40 bg-gray-200 mb-2 flex items-center justify-center text-gray-500">
              {formData.photo ? (
                <img
                  src={URL.createObjectURL(formData.photo)}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>No image uploaded</span>
              )}
            </div>
            {/* File Input for Photo */}
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
            />
          </div>

          {/* Signature */}
          <div className="flex flex-col items-center justify-center">
            <label className="font-medium text-center mb-2">Signature</label>
            {/* Signature Image Placeholder */}
            <div className="w-3/4 h-40 bg-gray-200 mb-2 flex items-center justify-center text-gray-500">
              {formData.signature ? (
                <img
                  src={URL.createObjectURL(formData.signature)}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>No signature uploaded</span>
              )}
            </div>
            {/* File Input for Signature */}
            <input
              type="file"
              name="signature"
              onChange={handleFileChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const FileUpload = () => {
  const [formData, setFormData] = useState({
    photo: null,
    signature: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0], 
    }));
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-md  rounded">

        <FileUploadSection formData={formData} handleFileChange={handleFileChange} />


      </div>
    </>
  );
};

export default FileUpload;
