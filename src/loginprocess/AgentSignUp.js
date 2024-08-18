import React, { useState } from 'react';

const AgentSignUp = () => {
  const [name, setName] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for agent registration (API call)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join as Travel Agent</h2>
      
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      
      <label>Agency Name</label>
      <input type="text" value={agencyName} onChange={(e) => setAgencyName(e.target.value)} required />
      
      <label>License Number</label>
      <input type="text" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} required />
      
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <button type="submit">Join</button>
    </form>
  );
};

export default AgentSignUp;
