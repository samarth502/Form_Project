import React, { useState } from "react";

const HobbiesSection = ({ formData, handleAddHobby }) => {
  return (
    <>
      <h3 className="text-lg font-bold mb-4 text-left">Hobbies</h3>
      <div className="border border-black p-4 rounded mb-6">
        {/* Row 1: Playing Games and Add button */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-start justify-start">
            <h1 className="font-medium text-left pr-4">Playing Games</h1>
            <button
              onClick={() => handleAddHobby("Playing Games")}
              className=" bg-blue-500 text-white px-2 py-1 rounded"
            >
              Add
            </button>
          </div>
        </div>

        {/* Row 2: Watch Movies and Add button */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-start">
            <h1 className="font-medium  text-left pr-4">Watch Movies</h1>
            <button
              onClick={() => handleAddHobby("Watch Movies")}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Add
            </button>
          </div>
        </div>

        

        {/* Dotted Line */}
        <div className="border-t-2 border-dotted border-gray-700 w-48"></div>
        <p className="text-start mt-10">List</p>
      </div>
    </>
  );
};

const Hobbies = () => {
  const [formData, setFormData] = useState({
    hobbies: [],
  });

  const handleAddHobby = (hobby) => {
    if (!formData.hobbies.includes(hobby)) {
      setFormData((prev) => ({
        ...prev,
        hobbies: [...prev.hobbies, hobby],
      }));
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded">

        {/* Hobbies Section */}
        <HobbiesSection formData={formData} handleAddHobby={handleAddHobby} />
      </div>
    </>
  );
};

export default Hobbies;
