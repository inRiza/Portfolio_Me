'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';

export default function Home() {
  const roles = ["A Learner", "A UI/UX Designer", "A Web Designer", "A Front-End Developer"];
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50); // Typing speed in ms

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -20)); // Remove a character
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(50); // Reset typing speed
        }
      } else {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1)); // Add a character
        if (displayedText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(1000); // Pause before deleting
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, currentIndex, isDeleting, typingSpeed, roles]);

  return (
    <main className="min-h-screen bg-white">
      <div className="mt-10">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-center gap-8">
          <div className="w-64 h-64 relative">
            <Image
              src="/Portofolio_PIC.jpg"
              alt="Profile Pic"
              fill
              className="rounded-[25px] object-cover"
            />
          </div>
          <div className="text-center sm:text-left max-w-md">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Hi, I&apos;m Rizain!</h1>
            <p className="text-lg sm:text-xl text-gray-600">
              <span className="text-gray-800">{displayedText}</span>
              <span className="animate-blink">|</span>
            </p>
            <p className='text-lg sm:text-x1 text-gray-800 mt-2'>Based in Indonesia</p>
          </div>
        </div>
      </div>
      <div className='container mx-auto max-w-[850px] text-center sm:text-justify'>
        <p className='text-lg sm:text-x1 text-gray-800'>Currently an undergraduate student at Institute Technology of Bandung, majoring Informatics Engineering. Passionate about web-design, building friendly UI for better UX, modern and minimalist yet stylish for your website, and solving problem using technologies. Currently focusing on software and yet eager to learn data further. Besides technologies, I love to create, play, and listen to music. Also I like to write, read, and design. See about my projects down below! </p>
      </div>
    </main>
  );
}
