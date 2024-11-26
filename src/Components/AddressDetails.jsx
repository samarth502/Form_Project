import React, { useState } from "react";

const AddressDetails = ({ formData, handleChange }) => {
  const countries = ["India", "USA", "Canada"];
  const states = ["Uttar Pradesh", "Maharashtra", "Karnataka"];
  const districts = ["Lucknow", "Mumbai", "Bengaluru"];

  return (
    <>
      <h3 className="text-lg font-bold mb-4 text-left">Address Details</h3>
      <div className="border border-black p-4 rounded mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center">
            <label className="font-medium w-1/4 text-right pr-4">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
            >
              <option value="">Select Country</option>
              {countries.map((country, idx) => (
                <option key={idx} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <label className="font-medium w-1/4 text-right pr-4">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
            >
              <option value="">Select State</option>
              {states.map((state, idx) => (
                <option key={idx} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <label className="font-medium w-1/4 text-right pr-4">District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
            >
              <option value="">Select District</option>
              {districts.map((district, idx) => (
                <option key={idx} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <label className="font-medium w-1/4 text-right pr-4">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
              placeholder="Enter Pin Code"
            />
          </div>
        </div>

        <div className="flex items-center mb-4">
          <label className="font-medium  text-left pr-4">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-3/4 border-b-2 border-gray-700 border-dotted px-2 py-1 focus:outline-none"
            placeholder="Enter Address"
          />
        </div>
      </div>
    </>
  );
};

const Addreses = () => {
  const [formData, setFormData] = useState({
    country: "",
    state: "",
    district: "",
    pinCode: "",
    address: "",
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
      

        <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded">
        <AddressDetails formData={formData} handleChange={handleChange} />
        </div>

      
    </>
  );
};

export default Addreses;
