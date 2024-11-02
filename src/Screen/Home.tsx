import React, { useState } from 'react';
import './Home.css';

export default function Home() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  function getRandomYear() {
        return Math.floor(Math.random() * (2100 - 1900 + 1)) + 1900;
      }

  const handleCheck = () => {
        window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth', 
              });

    if (dateOfBirth && userName) {
      const currentYear = new Date().getFullYear();
      const deathYear = getRandomYear();
      const diffYear = currentYear- deathYear;
      if (diffYear==0){
        setMessage(`Sorry ${userName}, you will die after 29 years !`);
      }else if(diffYear>0){
      setMessage(`Sorry ${userName}, you will die after ${diffYear} years !`);
      }else {
        setMessage(`Sorry ${userName}, you died before ${diffYear} years !`);
        }



    } else {
      setMessage('Please enter your name and select your date of birth.');
    }


  };

  return (
    <>
      <div className='top relative flex flex-col items-center justify-center w-full'>
        {/*   <Image src="/favicon.png" alt="Favicon"  layout="fill"  objectFit="contain"  className="absolute z-0 opacity-20 effect" /> */}
        <h1 className='text-center rubik-wet-paint-regular text-7xl md:text-6xl lg:text-9xl text-red-900 z-10'>The Death Finder</h1>
        <h3 className='text-center rubik-wet-paint-regular text-3xl md:text-4xl lg:text-5xl text-white z-10'>This app will helps you to find out when is your death.!</h3>
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
        <div className='w-[90%] lg:w-[60%] bg-[#333333e5] flex-1 h-auto p-10 rounded-3xl mb-10 z-40'>
        {message && <h3 className='text-white text-lg'>{message}</h3>}
        </div>
      </div>
    </>
  );
}
