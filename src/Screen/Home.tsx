import React, { useState } from 'react';
import './Home.css';

export default function Home() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const handleCheck = () => {
    if (dateOfBirth && userName) {
      const birthDate = new Date(dateOfBirth);
      const age = new Date().getFullYear() - birthDate.getFullYear();
      setMessage(`${userName}, you are ${age} years old!`);
    } else {
      setMessage('Please enter your name and select a date of birth.');
    }
  };

  return (
    <>
      <div className='top flex flex-col items-center justify-center w-full'>
        <h1 className='text-center rubik-wet-paint-regular text-9xl text-red-900'>The Death Finder</h1>
        <h3 className='text-center rubik-wet-paint-regular text-4xl text-white'>This app helps you find out when is your death</h3>
      </div>
      <div className="container flex flex-col items-center">
        <h2 className='text-white'>Select Your Date of Birth</h2>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="date-input"
        />
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="date-input"
        />
        <button onClick={handleCheck} className="check-button">
          Check
        </button>
        {message && <h3 className='text-white'>{message}</h3>}
      </div>
    </>
  );
}
