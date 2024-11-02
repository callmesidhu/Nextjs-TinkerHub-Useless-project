"use client";

import React, { useState } from 'react';
import clsx from 'clsx'; // Import clsx
import './Home.css';
import Display from '@/openAI/display';

export default function Home() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [responseId, setResponseId] = useState(0); 
  const [responseType, setResponseType] = useState<'future' | 'past'>('past');
  const [showBox, setShowBox] = useState(false);

  function getRandomYear() {
    return Math.floor(Math.random() * (2100 - 1900 + 1)) + 1900;
  }

  const handleCheck = () => {
    setShowBox(true);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth', 
    });

    if (dateOfBirth && userName) {
      const currentYear = new Date().getFullYear();
      const deathYear = getRandomYear();
      const diffYear = currentYear - deathYear;

      setResponseId(Math.floor(Math.random() * 100) + 1);

      if (diffYear === 0) {
        setMessage(`Sorry ${userName}, you will die after 29 years!`);
      } else if (diffYear > 0) {
        setMessage(`Sorry ${userName}, you will die after ${diffYear} years!`);
        setResponseType('future'); 
      } else {
        setMessage(`Sorry ${userName}, you died before ${Math.abs(diffYear)} years!`);
        setResponseType('past'); 
      }
    } else {
      setMessage('Please enter your name and select your date of birth.');
    }
  };

  return (
    <>
      <div className='top relative flex flex-col items-center justify-center w-full'>
        <h1 className={clsx('text-center rubik-wet-paint-regular text-7xl md:text-6xl lg:text-9xl text-red-900 z-10', 'fade-in')}>The Death Finder</h1>
        <h3 className={clsx('text-center rubik-wet-paint-regular text-3xl md:text-4xl lg:text-5xl text-white z-10', 'fade-in')}>This app will help you to find out when is your death!</h3>
      </div>
      <div className="container flex flex-col items-center">
        <h2 className={clsx('text-white', 'fade-in')}>Select Your Date of Birth</h2>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className={clsx("date-input", "input-fade-in")}
        />
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={clsx("date-input", "input-fade-in")}
        />
        <button onClick={handleCheck} className={clsx("check-button", "button-fade-in")}>
          Check
        </button>
        {showBox && (
          <div className={clsx('w-[90%] lg:w-[60%] bg-[#333333e5] flex-1 h-auto p-10 rounded-3xl mb-10 z-40', {
            'fade-in': message, 
            'slide-up': message
          })}>
            {message && <h3 className='text-white text-lg'>{message}</h3>}
            <Display id={responseId} type={responseType} />
          </div>
        )}
      </div>
    </>
  );
}
