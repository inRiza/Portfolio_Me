'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import Projects from './projects/page';
import InteractiveBackground from './components/InteractiveBackground';
import TechStacks from './tech_stacks/page';
import Phase from './phase/page';
import Contact from './contact/page';

export default function Home() {
  const roles = ["A Learner", "An UI/UX Designer", "A Web Designer", "A Front-End Developer"];
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(100);
        }
      } else {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
        if (displayedText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, currentIndex, isDeleting, typingSpeed, roles]);

  return (
    <main className="relative min-h-screen bg-transparent overflow-hidden pt-20">
      <InteractiveBackground />

      <div className="fixed top-5 z-50 w-auto max-w-[70%] left-0 right-0 rounded-[10px] border-[0.5px] border-gray-300 bg-white/10 backdrop-blur-xl mx-auto shadow-md">
        <Navbar />
      </div>

      <div id='home' className="container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-center gap-8">
          <div className="w-64 h-64 relative">
          <Image
            src="/mypic.jpg"
            alt="Profile Pic"
            fill
            className="rounded-[25px] object-cover"
          />
          </div>
          <div className="text-center sm:text-left max-w-md">
          <h1 className="text-3xl sm:text-6xl font-bold text-black mb-4">Hi, I&apos;m Rizain!</h1>
          <p className="text-lg sm:text-xl text-gray-600">
            <span className="text-black">{displayedText}</span>
            <span className="animate-blink">|</span>
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mt-2">Based in Indonesia</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[850px] text-center px-4">
      <p className="text-lg sm:text-xl text-black">
        I&apos;m an undergraduate student at the Institute Technology of Bandung, majoring in
        Informatics Engineering. Passionate about web design, creating user-friendly UI for better
        UX, and modern, minimalist, yet stylish websites. I love solving problems with
        technology. Currently focusing on software but eager to dive deeper into data. Outside of
        tech, I enjoy music, writing, reading, and design. Check out my projects below!
      </p>
      </div>

      <div id='projects' className="flex flex-col justify-center items-center mt-40">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-black mb-20 text-center">My Projects</h1>
        <Projects />
        <div className="flex flex-col justify-center items-center">
          <div className="loader border-t-4 border-gray-600 rounded-full w-12 h-12 animate-spin mb-4"></div>
            <p className="text-gray-600 text-lg">Still under development...</p>
        </div>
      </div>

      <div id='techstacks' className="container mt-40 flex flex-col justify-center items-center mx-auto">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-black mb-10 text-center">Tech Stacks That I Used</h1>
        <TechStacks/>
      </div>

      <div id='phase' className='container mt-40 flex flex-col justify-center items-center mx-auto'>
        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-black mb-10 text-center'>My Work Scenario</h1>
        <Phase/>
      </div>

      <div id='contact' className='container mt-40 flex flex-col justify-center items-center mx-auto'>
        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-black mb-10 text-center'>Let&apos;s Work and Build Together!</h1>
        <Contact/>
      </div>
    </main>

  );
}
