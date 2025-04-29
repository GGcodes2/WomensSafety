// src/pages/ReportIncidentPage.jsx
import React, { useState } from 'react';
import './ReportIncidentPage.css'; // Import custom CSS

const ReportIncidentPage = () => {
  const [incidentDetails, setIncidentDetails] = useState({
    location: '',
    description: '',
    urgency: 'Low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncidentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Incident Reported:', incidentDetails);
    alert('Incident reported successfully.');
  };

  return (
    <div className="report-incident-container">
      <h1 className="report-incident-title">Report an Incident</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Location Field */}
        <div>
          <label htmlFor="location" className="block text-lg font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={incidentDetails.location}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter incident location"
            required
          />
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={incidentDetails.description}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Describe the incident"
            required
          />
        </div>

        {/* Urgency Level */}
        <div>
          <label htmlFor="urgency" className="block text-lg font-medium text-gray-700">Urgency Level</label>
          <select
            id="urgency"
            name="urgency"
            value={incidentDetails.urgency}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportIncidentPage;
