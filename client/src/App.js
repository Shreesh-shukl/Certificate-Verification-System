import React from 'react';
import './App.css'; // Ensure this line is here to use the custom CSS styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/zidio.png" className="App-logo" alt="logo" />
      </header>
      <h1>Certificate Verification System</h1>
      <AdminUpload />
      <CertificateSearch />
    </div>
  );
}

export default App;