import React, { useState } from 'react';
import './Home.css'

export default function Home() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [name, setName] = useState('');

  const handleCheck = () => {
    setName('Your Name Here'); 
  };

  return (
    <div className="container">
      <h2>Select Your Date of Birth</h2>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        className="date-input px-20"
      />
      <button onClick={handleCheck} className="check-button">
        Check
      </button>
      {name && <h3>{name}</h3>}
    </div>
  );
};


