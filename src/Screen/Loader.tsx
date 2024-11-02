"use client";

import { useEffect, useState } from 'react';
import Home from './Home';
import Image from 'next/image';
import './Loader.css'

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
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden">
      <div className="relative w-full h-full max-w-full max-h-full flex items-center justify-center">
        <Image src="/Loader.png" className="effect" alt="Loading..." layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
