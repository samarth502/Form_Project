import React, { useState } from "react";

const PersonalDetails = ({ formData, handleChange }) => {
  const religions = ["Hindu", "Muslim", "Christian", "Other"];
  const casteCategories = ["General", "OBC", "SC", "ST"];

  return (
    <>
      <h3 className="text-lg font-bold mb-4 text-left">Personal Details</h3>
      <div className="border border-black p-4 rounded mb-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center">
            <label className="font-medium w-1/4 text-right pr-4">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
              placeholder="Enter Name"
            />
          </div>
          <div className="flex items-center">
            <label className="">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
              placeholder="Enter Father's Name"
            />
          </div>
          <div className="flex items-center">
            <label className="font-medium w-1/4 text-right pr-4">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center">
            <label className="font-medium w-1/4 text-right pr-4">Religion</label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
            >
              <option value="">Select Religion</option>
              {religions.map((religion, idx) => (
                <option key={idx} value={religion}>
                  {religion}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label className="font-medium w-1/4 text-right pr-4">Caste Category</label>
            <select
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
            >
              <option value="">Select Caste Category</option>
              {casteCategories.map((caste, idx) => (
                <option key={idx} value={caste}>
                  {caste}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label className="font-medium w-1/4 text-right pr-4">Gender</label>
            <div className="w-3/4 flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  checked={formData.gender === "Male"}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  checked={formData.gender === "Female"}
                />
                Female
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    religion: "",
    caste: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-md  rounded">
        <h2 className="text-2xl font-bold mb-6">Applicant Registration Form</h2>

        <PersonalDetails formData={formData} handleChange={handleChange} />

       
      </div>
    </>
  );
};

export default RegistrationForm;
