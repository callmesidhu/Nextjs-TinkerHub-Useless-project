"use client";

import { useEffect, useState } from 'react';
import Home from './Home';
import Image from 'next/image';
import './Loader.css';

export default function Loader() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowApp(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (showApp) {
    return <Home />;
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden bg-black">
      <h1 className="absolute text-white z-10 text-xl font-semibold">Please Wait....</h1>
      <div className="relative w-full h-full">
        <Image src="/Loader.png" className='effect opacity-50' alt="Loading..." layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
