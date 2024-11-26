import React, { useState } from "react";

const TableSection = ({ formData, handleDelete, handleEdit }) => {
  return (
    <>
      <h3 className="text-lg font-bold mb-4 text-left">View Report</h3>
      <div className="border border-black p-4 rounded mb-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-2">Name</th>
              <th className="border-b-2 p-2">Father's Name</th>
              <th className="border-b-2 p-2">Country</th>
              <th className="border-b-2 p-2">State</th>
              <th className="border-b-2 p-2">District</th>
              <th className="border-b-2 p-2">DOB</th>
              <th className="border-b-2 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, idx) => (
              <tr key={idx}>
                <td className="border-b p-2">{data.name}</td>
                <td className="border-b p-2">{data.fatherName}</td>
                <td className="border-b p-2">{data.country}</td>
                <td className="border-b p-2">{data.state}</td>
                <td className="border-b p-2">{data.district}</td>
                <td className="border-b p-2">{data.dob}</td>
                <td className="border-b p-2">
                  <button
                    onClick={() => handleEdit(idx)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* Blank row with boxes */}
            <tr>
              <td className="border-b p-2">
                <div className="border-2 h-10"></div>
              </td>
              <td className="border-b p-2">
                <div className="border-2 h-10"></div>
              </td>
              <td className="border-b p-2">
                <div className="border-2 h-10"></div>
              </td>
              <td className="border-b p-2">
                <div className="border-2 h-10"></div>
              </td>
              <td className="border-b p-2">
                <div className="border-2 h-10"></div>
              </td>
              <td className="border-b p-2">
                <div className="border-2 h-10"></div>
              </td>
              <td className="border-b p-2">
                <div className="border-2 h-10"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const Table = () => {
  const [formData, setFormData] = useState([
    
  ]);

  const handleDelete = (index) => {
    const newData = formData.filter((_, idx) => idx !== index);
    setFormData(newData);
  };

  const handleEdit = (index) => {
    // Implement edit functionality (e.g., populate fields with data to edit)
    const dataToEdit = formData[index];
    console.log("Edit data: ", dataToEdit);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded">

        {/* Table Section */}
        <TableSection formData={formData} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </>
  );
};

export default Table;
