import React, { useState } from 'react';
import axios from 'axios';

const AdminUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/upload', formData);
      alert('File uploaded successfully');
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <h2>Admin Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default AdminUpload;