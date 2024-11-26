import React, { useState } from "react";

const EducationDetails = ({ formData, handleChange }) => {
  return (
    <>
      <h3 className="text-lg font-bold mb-4 text-left">Education Details</h3>
      <div className="border border-black p-4 rounded mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center">
            <label className="font-medium w-3/4 text-right pr-4">High School</label>
            <input
              type="checkbox"
              name="highSchool"
              checked={formData.highSchool}
              onChange={handleChange}
              className="w-1/4"
            />
          </div>
          <div className="flex items-center">
            <label className="font-medium w-3/4 text-right pr-4">Intermediate</label>
            <input
              type="checkbox"
              name="intermediate"
              checked={formData.intermediate}
              onChange={handleChange}
              className="w-1/4"
            />
          </div>
          <div className="flex items-center">
            <label className="font-medium w-3/4 text-right pr-4">Graduation</label>
            <input
              type="checkbox"
              name="graduation"
              checked={formData.graduation}
              onChange={handleChange}
              className="w-1/4"
            />
          </div>
          <div className="flex items-center">
            <label className="font-medium w-3/4 text-right pr-4">Post Graduation</label>
            <input
              type="checkbox"
              name="postGraduation"
              checked={formData.postGraduation}
              onChange={handleChange}
              className="w-1/4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Education = () => {
  const [formData, setFormData] = useState({
    highSchool: false,
    intermediate: false,
    graduation: false,
    postGraduation: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-md  rounded">
        

        {/* Education Details Section */}
        <EducationDetails formData={formData} handleChange={handleChange} />

        {/* Additional Sections */}
        {/* Add other sections here (e.g., Hobbies, Address, etc.) */}
      </div>
    </>
  );
};

export default Education;
