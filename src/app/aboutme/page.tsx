"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";



export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      image: "/Ahnaf.jpg",
      title: "Education",
      width: 500,
      height: 400,
      url: "https://signvision1.netlify.app",
    },
    {
      id: 2,
      image: "/hackuta.jpg",
      title: "Hackathons",
      width: 500,
      height: 400,
      url: "https://devpost.com/software/greenhouse-hpmoa1",
    },
    {
      id: 3,
      image: "/sidequests.jpg",
      title: "Side Quests",
      width: 500,
      height: 400,
      url: "https://lockintothemoon.netlify.app",
    },
    
    {
      id: 4,
      image: "/song.jpg",
      title: "Songs",
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
        <ul className="flex space-x-14 lg:text-5xl sm:text-2xl lg:pt-[28px] font-amatic lg:pl-0 sm:pl-[120px] sm:pt-[25px] xs:flex xs:justify-center">
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

    {/* Content for the new section */}
    <div className="relative  w-full h-screen transform  items-center justify-center">

    

    {/* Sliding card gallery */}

<div className="absolute flex flex-col items-center justify-center h-full w-full z-20">
  <button
    onClick={() =>
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
    }
    className="text-white p-4 text-3xl hover:scale-110 transition-transform mb-4"
  >
    ↑
  </button>

  <div
    className="relative lg:w-[650px] sm:w-[500px] xs:w-[280px] lg:h-[570px] sm:h-[600px] xs:h-[620px] lg:mx-8 sm:mx-8 xs:mx-0 hover:scale-105"
    onMouseEnter={handleMouseEnter}
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 0.3,
        }}
        className="absolute inset-0"
      >
        <div className="w-full h-full bg-transparent border-2 border-white rounded-xl p-6 flex flex-col items-center justify-between">
        <div className="w-full flex flex-col gap-4">

          <div className="w-full h-[350px] rounded-lg overflow-hidden">
            <Image
              src={cards[currentIndex].image}
              alt={cards[currentIndex].title}
              width={cards[currentIndex].width} // Dynamic width from cards array
              height={cards[currentIndex].height} // Dynamic height from cards array
              className="w-full h-full lg:object-cover xs:object-fill"
            />
          </div>
          </div>

          
                {/* New Section for Text */}
                <div className="w-full h-full mt-4 text-center text-white">
              <h1 className="lg:text-4xl sm:text-4xl xs:text-lg font-['VT323', monospace]">{cards[currentIndex].title}</h1>
              <h2 className="text-xl font-['VT323', monospace] text-white/95">
                {/* You can change the text below for each card */}
                {cards[currentIndex].title === "Education" ? "The University of Texas at Dallas" : ""}
                {cards[currentIndex].title === "Hackathons" ? "Rank - Hacker " : ""}
                {cards[currentIndex].title === "Side Quests" ? "" : ""}
                {cards[currentIndex].title === "Songs" ? "Electronic R&B synthpop" : ""}
              </h2>
              <h3 className="text-lg font=['VT323', monospace] text-white/90">
                {cards[currentIndex].title == "Education" ? "Aug 2024 - May 2028 " : ""}
                {cards[currentIndex].title == "Hackathons" ? "" : ""}
                {cards[currentIndex].title == "Side Quests" ? "" : ""}
                {cards[currentIndex].title == "Songs" ? "" : ""}

              </h3>
              <p className="text-white/80 text-md pt-6">
                {/* You can add a description here for each card */}
                {cards[currentIndex].title === "Education" && "Yo, I'm a CS Freshman at UTD & I love coding. "}
                {cards[currentIndex].title === "Hackathons" && "I'm super into computers and programming—they're my thing! And hackathons? Totally my jam. The pic up above is from the epic winning moment at HackUTA 2024. What a rush!"}
                {cards[currentIndex].title === "Side Quests" && "Side quests? Oh, they’re totally my vibe. I’m on a mission to rack up as many as I can—gotta keep life interesting!"}
                {cards[currentIndex].title === "Songs" && "Songs? Oh, I’m all in for vibes that hit different. My playlist is all about smooth beats and futuristic vibes. Depends on the mood rlly but—The Weeknd and Daft Punk are my go-to."}
              </p>
            </div>
            </div>
            </motion.div>
    </AnimatePresence>
          

          
        
      
  </div>

  <button
    onClick={() => setCurrentIndex((prev) => (prev + 1) % cards.length)}
    className="text-white p-4 text-3xl hover:scale-110 transition-transform mt-4"
  >
    ↓
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
</div>   

      

  )
}
