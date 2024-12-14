"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";




export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      image: "/signvision.jpg",
      title: "Sign Vision - ASL Detector",
      width: 500,
      height: 400,
      url: "https://signvision1.netlify.app",
    },
    {
      id: 2,
      image: "/sustainify.jpg",
      title: "Sustainify",
      width: 500,
      height: 400,
      url: "https://devpost.com/software/greenhouse-hpmoa1",
    },
    {
      id: 3,
      image: "/litm.jpg",
      title: "Lock into the Moon",
      width: 500,
      height: 400,
      url: "https://lockintothemoon.netlify.app",
    },
    {
      id: 4,
      image: "/serenityai.jpg",
      title: "Serenity AI",
      width: 500,
      height: 400,
      url: "https://devpost.com/software/serenityai"
    },
    {
      id: 5,
      image: "/aismile.jpg",
      title: "AI_SmileDetect",
      width: 500,
      height: 400,
      url: "https://github.com/notzabir/AI_SmileDetect",
    },
    {
      id: 6,
      image: "/virtualmouse.jpg",
      title: "Virtual Mouse",
      width: 500,
      height: 400,
      url: "https://github.com/notzabir/VirtualMouse",
    },
  ];

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Play the audio when the component mounts
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, []);

  const hoverAudioRef = useRef<HTMLAudioElement>(null);
  const clickAudioRef = useRef<HTMLAudioElement>(null);

  const handleMouseEnter = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0; // Reset to the start
      hoverAudioRef.current.play().catch((error) => {
        console.error("Error playing hover audio:", error);
      });
    }
  };

  const handleClick = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0; // Reset to the start
      clickAudioRef.current.play().catch((error) => {
        console.error("Error playing click audio:", error);
      });
    }
  };
  

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Stars */}
      {[...Array(63)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `moveRight ${3 + Math.random() * 7}s linear infinite`,
          }}
        >
          <svg height={2 + Math.random() * 4} width={2 + Math.random() * 4} viewBox="0 0 2 2">
            <circle cx="1" cy="1" r="1" fill="white" />
          </svg>
        </div>
      ))}

      {/* audio tag */}
      <audio
      ref={audioRef}
      src="/amongus.mp3" // Replace with your audio file path
      loop
      autoPlay
      muted={false} // Set to true if you want muted by default
      style={{ display: "none" }} // Hide the audio element
      />

     <audio ref={hoverAudioRef} src="/uiselecti.mp3" preload="auto" />
     <audio ref={clickAudioRef} src="/uiselecti.mp3" preload="auto" />

      {/* Navbar */}

<div className="absolute h-[200px] w-full lg:pl-[800px] z-30">
        <ul className="flex space-x-14 lg:text-5xl sm:text-2xl lg:pt-[28px] font-amatic lg:pl-0 sm:pl-[120px] sm:pt-[25px]">
          <li className="hover:text-blue-400 text-white cursor-pointer" onMouseEnter={handleMouseEnter}
          onClick={handleClick}>
            <Link href="/">Home</Link></li>
          <li className="hover:text-blue-400 text-white cursor-pointer" onMouseEnter={handleMouseEnter}
          onClick={handleClick}>
            <Link href="/aboutme">About</Link></li>
          <li className="hover:text-blue-400 text-white cursor-pointer" onMouseEnter={handleMouseEnter}
          onClick={handleClick}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-blue-400 text-white cursor-pointer" onMouseEnter={handleMouseEnter}
          onClick={handleClick}>Resume</li>
        </ul>
        </div>

      

      {/* Sliding card gallery */}

      <div className="absolute flex items-center  justify-center h-full w-full  z-20">
      <button
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
          }
          className="text-white p-4 text-3xl hover:scale-110 transition-transform"
        >
          ←
        </button>

        <div className="relative lg:w-[650px] sm:w-[500px] xs:w-[280px] xs:h-[560px] lg:h-[550px] sm:h-[600px] lg:mx-8 sm:mx-8 xs:mx-0 hover:scale-105" onMouseEnter={handleMouseEnter}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -100,
              }}
              transition={{
                duration: 0.3,
              }}
              className="absolute inset-0"
            >
              <div className="w-full h-full bg-transparent border-2 border-white rounded-xl p-6 flex flex-col items-center justify-between">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={cards[currentIndex].image}
                    alt={cards[currentIndex].title}
                    width={cards[currentIndex].width}  // Dynamic width from cards array
                    height={cards[currentIndex].height}  // Dynamic height from cards array
                    className="w-full h-full object-fill"
                  />
                </div>

                
                
                <button
  onClick={() => {
    const currentCard = cards[currentIndex];
    if (currentCard.url) {
      window.open(currentCard.url, "_blank");
    } else {
      console.error("URL is not defined for this card.");
    }
  }} 
  className="lg:px-8 sm:px-8 xs:px-2 lg:py-3 sm:py-3 xs:py-1 bg-transparent border-2 border-white text-white rounded-lg font-['VT323',monospace] text-xl tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105"
>
  {cards[currentIndex].title}
</button>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % cards.length)}
          className="text-white lg:p-4 sm:p-4 xs:p-2 text-3xl hover:scale-110 transition-transform"
        >
          →
        </button>
      </div>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: "10%",
            left: "20%",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: "30%",
            left: "80%",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: "70%",
            left: "40%",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: "85%",
            left: "75%",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: "45%",
            left: "15%",
          }}
        ></div>
      </div>


      {/* Keyframes for the star animation */}
      <style jsx>{`
        @keyframes moveRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100vw);
          }
        }
      `}</style>
    </div>
  );
}
