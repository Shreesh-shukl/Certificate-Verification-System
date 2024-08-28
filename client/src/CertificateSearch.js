import React, { useState } from 'react';
import axios from 'axios';

const CertificateSearch = () => {
  const [certificateId, setCertificateId] = useState('');
  const [certificateData, setCertificateData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/certificate/${certificateId}`);
      setCertificateData(response.data);
    } catch (error) {
      alert('Certificate not found');
    }
  };

  return (
    <div>
      <h2>Certificate Search</h2>
      <input
        type="text"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
        placeholder="Enter Certificate ID"
      />
      <button onClick={handleSearch}>Search</button>
      {certificateData && (
        <div>
          <h3>Certificate Details:</h3>
          <p>Name: {certificateData.studentName}</p>
          <p>Internship Domain: {certificateData.internshipDomain}</p>
          <p>Start Date: {new Date(certificateData.startDate).toLocaleDateString()}</p>
          <p>End Date: {new Date(certificateData.endDate).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default CertificateSearch;