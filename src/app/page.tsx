"use client";

import React, { useEffect, useState, useRef } from "react";
import {ReactTyped} from 'react-typed';
import Image from "next/image";
import Imposter from "../assets/imposter.png";
import Spaceship from "../assets/Lobbyimg.png";
import { Github, Linkedin, Instagram, MessageCircle, X, Send} from "lucide-react";
import Ahnaf from "../assets/pfp.png";
import { motion, AnimatePresence } from "framer-motion";
import utdfintech from "../assets/utdfintech.jfif"
import utdais from "../assets/utdais.png"
import mlisnutri from "../assets/mlisnutri.jpg"
import proborton from "../assets/probortonfound.jpg"
import buildspace from "../assets/buildspace.png"
import robotics from "../assets/robotics.jpg"
import Link from "next/link";


export default function AmongUsSpace() {
  const [currentImposterIndex, setCurrentImposterIndex] = useState(0);
  const imposters = [
    {
      color: "hue-rotate(0deg)",
      delay: 0,
    },
    {
      color: "hue-rotate(240deg)",
      delay: 4,
    },
    {
      color: "brightness(2)",
      delay: 8,
    },
    {
      color: "hue-rotate(60deg)",
      delay: 12,
    },
    {
      color: "brightness(0)",
      delay: 16,
    },
    {
      color: "hue-rotate(120deg)",
      delay: 20,
    },
  ];
  
  
   {/*} const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav)
    }

    const closeNav = () => {
      setNav(false)
    } */}
 

  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatLog, setChatLog] = useState<string[]>([]); // To store the chat history


  // Preloaded questions with corresponding responses
  const questionsAndResponses = {
    "What are you currently doing?": "I'm diving deep into coding and hackathons! Always learning and building new things.",
    "Where do you live?": "I'm based in Dallas, Texas, commuting to UTD as an international student.",
    "How to contact you?": "You can reach me at ahnafzabir6633@gmail.com or connect on LinkedIn!",
  };

  // Handle question click
  const handleQuestionClick = (question: string) => {
    setChatLog((prev) => [...prev, `You: ${question}`, `Bot: ${questionsAndResponses[question as keyof typeof questionsAndResponses]}`]);
  };

  // Handle input submission
  const handleSendMessage = (message: string) => {
    setChatLog((prev) => [...prev, `You: ${message}`, "Bot: Sorry, I don't have a response for that yet!"]);
  };
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
     {
      id: 1,
      image: utdfintech,
      title: "FinTech Projects",
    },
    {
      id: 2,
      image: utdais,
      title: "AIM Projects",
    },
    {
      id: 3,
      image: mlisnutri,
      title: "MLIS Nutrition Club",
    },
    {
      id: 4,
      image: proborton,
      title: "Proborton Foundation",
    },
    {
      id: 5,
      image: buildspace,
      title: "Buildspace NW S5",
    },
    {
      id: 6,
      image: robotics,
      title: "MLIS Robotics Club",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImposterIndex((prev) => (prev + 1) % imposters.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

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
    <div>
      {/* First Section: Among Us Space (with Imposter) */}
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



        
        {/* Introduction section */}

        {/* parent div container */}

        <div className="relative w-full h-full flex sm:flex-col-reverse xs:flex-col-reverse lg:flex-row">

        


        {/* left div parent container */}
        <div className=" lg:h-full sm:h-full  lg:w-2/3 sm:w-full xs:h-full xs:w-full lg:mt-0 sm:mt-[0px] relative z-30">
        <div className="absolute h-full w-full lg:pt-[200px] sm:pt-[50px] xs:pt-[20px] lg:pl-[100px] sm:pl-[160px] xs:pl-[20px]">
          <h1 className="lg:text-8xl sm:text-5xl xs:text-4xl lg:pl-0 sm:pl-[80px] xs:flex xs:justify-center lg:justify-normal font-amatic text-white">Hello, I&apos;m</h1>
          <h2 className="lg:text-9xl sm:text-6xl xs:text-5xl xs:flex xs:justify-center lg:justify-normal font-amatic text-white">Md Ahnaf Al Zabir</h2>
          <h3 className="lg:text-8xl sm:text-5xl xs:text-4xl xs:flex xs:justify-center lg:justify-normal font-amatic text-white lg:pl-0 sm:pl-[25px] ">
          <ReactTyped
          strings={['I\'m a CS Freshman', 'An Aspiring SWE']}
          typeSpeed={100} // Typing speed
          backSpeed={50}  // Backspacing speed
          backDelay={1000} // Delay before starting to backspace
          startDelay={500} // Delay before typing starts
          loop={true} // Loop the typing effect
        />
         </h3>
         <div className="flex flex-row space-x-8 lg:pl-12 sm:pl-4 xs:pl-flex xs:justify-center lg:justify-normal lg:pr-0 sm:pr-0 lg:pt-8 sm:pt-4  xs:pt-2 z-40">
         <button
          onMouseEnter={handleMouseEnter}
          className="lg:px-8 sm:px-4 lg:py-3 sm:py-1 bg-transparent border-2 border-white text-white rounded-lg font-amatic text-3xl tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105"
          onClick={() => { handleClick();window.open("/resume", "_blank")}}
        >
          Resume
        </button> 
        <button
           onMouseEnter={handleMouseEnter}
          className="lg:px-8 sm:px-4 lg:py-3 sm:py-1 bg-transparent border-2 border-white text-white rounded-lg font-amatic text-3xl tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105"
          onClick={() => { handleClick();window.open("/contact", "_blank")}}
        >
          Contact
        </button>
        </div>


        {/* Container for the icons */}


        <div className="flex space-x-12 lg:pt-10 sm:pt-5 xs:pt-3 sm:pl-[32px] lg:justify-normal xs:flex xs:justify-center lg:pl-24 w-full">
        <a
          href="https://linkedin.com/in/md-ahnaf-al-zabir"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          className="text-white transition-transform duration-300 hover:scale-125"
        >
          <Linkedin size={40} />
        </a>

        <a
          href="https://instagram.com/not_zabir/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          className="text-white transition-transform duration-300 hover:scale-125"
        >
          <Instagram size={40} />
        </a>

        <a
          href="https://github.com/notzabir"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          className="text-white transition-transform duration-300 hover:scale-125"
        >
          <Github size={40} />
        </a>
        </div>
        </div>
        </div>

        {/* right div parent container */}
        <div className="absolute h-[200px] w-full lg:pl-[800px] lg:pb-0 sm:pb-[840px] xs:pb-[760px] xs:flex xs:justify-center" >
        <ul className="flex lg:space-x-14 sm:space-x-14 xs:space-x-6 xs:pl-[25px] xs:text-lg lg:text-5xl sm:text-3xl lg:pt-[28px] font-amatic sm:pl-[120px] lg:pl-0">
          <li className="hover:text-blue-400 text-white cursor-pointer" onMouseEnter={handleMouseEnter}
          onClick={handleClick}>Home</li>
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

        <div className="lg:pt-36 lg:pr-24 sm:pt-[120px] xs:pt-[150px] lg:pl-0 sm:pl-[150px] xs:flex xs:justify-center">
          <Image src={Ahnaf} 
          alt="pic"
          style={{
            zIndex: 30,
          }}
          className="lg:h-[550px] lg:w-[580px] sm:h-[330px] sm:w-[320px] xs:h-[240px] xs:w-[230px]"

            />
            
          
        </div>

       </div>

       
              
        
        

        {/* Imposters */}
        {imposters.map((imposter, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              display: currentImposterIndex === index ? "block" : "none",
              top: "50%",
              animation: "moveAndRotate 8s linear infinite",
            }}
          >
            <Image
              src={Imposter}
              alt="Among Us character"
              style={{
                width: "80px",
                height: "auto",
                filter: imposter.color,
              }}
            />
          </div>
          
        ))}
      </div>

      {/* Second Section: New Starry Background (no imposter) */}
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
                <div className="xs:flex xs:justify-center lg:flex-none lg:justify-normal">
                <button className="z-20 absolute  lg:ml-[550px] sm:ml-[170px] lg:px-8 sm:px-4 lg:py-3 sm:py-1 bg-transparent border-2 border-white text-white rounded-lg font-['VT323',monospace] text-5xl tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105">
                 Experience
                </button>
                </div>

        {/* Content for the new section */}
        <div className="relative  w-full h-screen transform  items-center justify-center">



          {/* Sliding card gallery */}

          <div className="absolute flex items-center  justify-center h-full w-full z-20 lg:pb-0 sm:pb-[350px] xs:pb-[400px]">
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
          }
          className="text-white p-4 text-3xl hover:scale-110 transition-transform"
        >
          ←
        </button>

        <div className="relative lg:w-[650px] sm:w-[400px] xs:w-[280px] xs:h-[360px] sm:h-[400px] lg:h-[700px] pt-[70px] lg:pl-[420px] sm:pl-[420px] xs:pl-0 lg:mx-8 sm:mx-8 xs:mx-0 hover:scale-105"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}>
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
              <div className="lg:w-full lg:h-full  bg-transparent border-2 border-white rounded-xl p-6 flex flex-col items-center justify-between">
              <div className="w-full flex flex-col gap-4">
                <div className="lg:w-full sm:w-full lg:h-[400px] sm:h-[400px] xs:h-[200px] xs:w-full rounded-lg overflow-hidden">
                  <Image
                    src={cards[currentIndex].image}
                    alt={cards[currentIndex].title}
                    className="w-full h-full lg:object-cover xs:object-fill"
                  />
                  </div>
                </div>

                {/* New Section for Text */}
            <div className="w-full h-full mt-4 text-center text-white">
              <h1 className="lg:text-4xl sm:text-4xl xs:text-lg font-['VT323', monospace]">{cards[currentIndex].title}</h1>
              <h2 className="text-xl font-['VT323', monospace] text-white/95">
                {/* You can change the text below for each card */}
                {cards[currentIndex].title === "FinTech Projects" ? "Full-Stack Developer" : ""}
                {cards[currentIndex].title === "AIM Projects" ? "Software Developer" : ""}
                {cards[currentIndex].title === "MLIS Nutrition Club" ? "Vice President" : ""}
                {cards[currentIndex].title === "Proborton Foundation" ? "Volunteer" : ""}
                {cards[currentIndex].title === "Buildspace NW S5" ? "Software Developer" : ""}
                {cards[currentIndex].title === "MLIS Robotics Club" ? "Teaching Assistant" : ""}
              </h2>
              <h3 className="lg:text-lg sm:text-lg xs:text-sm font=['VT323', monospace] text-white/90">
                {cards[currentIndex].title == "FinTech Projects" ? "March 2025 - May 2025 " : ""}
                {cards[currentIndex].title == "AIM Projects" ? "Sept 2024 - Dec 2024 " : ""}
                {cards[currentIndex].title == "MLIS Nutrition Club" ? "Sept 2023 - Aug 2024 " : ""}
                {cards[currentIndex].title == "Proborton Foundation" ? "Jul 2021 - Mar 2022 " : ""}
                {cards[currentIndex].title == "Buildspace NW S5" ? "Jun 2024 - Jul 2024 " : ""}
                {cards[currentIndex].title == "MLIS Robotics Club" ? "Feb 2024 - Aug 2024 " : ""}

              </h3>
              <p className="text-white/90 lg:text-base sm:text-md xs:text-xs  pt-6">
                {/* You can add a description here for each card */}
                {cards[currentIndex].title === "FinTech Projects" && "Built an ML pipeline to forecast real estate prices using TF-IDF and DistilBERT sentiment analysis on news data (NewsAPI, NYT). Engineered features for ARIMA, Linear Regression, and Gradient Boosting models, with 10-year forecasts visualized via Matplotlib and Gemini-Pro. Developed an NLP-powered voice agent for real-time investment advice and financial data queries. Won 1st place at FinTech Projects Spring 2025, earning $500 in funding."}
                {cards[currentIndex].title === "AIM Projects" && "Developed an ASL detector using Python with OpenCV and Keras (TensorFlow) for the CNN architecture. Collaborated in a team of five under a project mentor, contributing to the dynamic frontend integration of the CNN model using React, Tailwind CSS, and tsparticles. This project secured 2nd place at AIM Projects 2024."}
                {cards[currentIndex].title === "MLIS Nutrition Club" && "Led the coordination of large-scale events, including Nutri-Fest 2.0 and the National Nutrition Olympiad school delegation, engaging 200+ students. Spearheaded outreach and marketing campaigns, reaching over 500 students to boost participation. Successfully networked with influencers and special guests to enhance event visibility and engagement."} 
                {cards[currentIndex].title === "Proborton Foundation" && "Coordinated weekly hybrid classes for 25 underprivileged children, teaching primary-level Math and English. Highlighted the importance of community service by creating and sharing a video to raise awareness about breaking stigmas around underprivileged children's lifestyles for the Iowa State University I-Fit Challenge 2021."}
                {cards[currentIndex].title === "Buildspace NW S5" && "Built an application called Virtual AI-Mouse, which is a ML-based Python project utilizing modules like OpenCV, MediaPipe, and PyAutoGUI, to allow users to use a hands-free assistant mouse controlled via webcam, as part of an open-to-all program.  Built an application called AI_SmileDetect, which is a ML-based Python project utilizing modules like OpenCV to detect and capture real-time smiling. "}
                {cards[currentIndex].title === "MLIS Robotics Club" && "Actively helped students (6th-12th graders) with their programming assignments and queries. Programming language choice was Python.  Helped the instructor to conduct the lectures smoothly. Managed a discord server, answering  general and technical queries of the students.  Managed Excel Spreadsheets and database systems to record student attendance."}
              </p>
            </div>
          </div>


                
              
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % cards.length)}
          className="text-white p-4 text-3xl hover:scale-110 transition-transform"
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

      {/* Chat Widget */}
      <div className="fixed bottom-4 mt-[100px] right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-emerald-600 transition-colors"
        aria-label="Close"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-purple-300 rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-4 flex items-center justify-between bg-purple-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={Ahnaf}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-mono text-white">Md Ahnaf Al Zabir</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-white font-mono">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close Chat"
            >
              <X size={24} />
            </button>
          </div>

          {/* Chat Content */}
          <div className="h-96 bg-black/90 p-4 flex flex-col gap-2 overflow-y-auto">
            {chatLog.map((entry, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${entry.startsWith("You:") ? "bg-white/10 text-white" : "bg-emerald-500 text-black"} font-mono`}
              >
                {entry}
              </div>
            ))}
          </div>

          {/* Preloaded Questions */}
          <div className="p-4 bg-black/90 flex flex-col gap-2">
            {Object.keys(questionsAndResponses).map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="bg-white/10 text-white p-3 rounded-lg text-left hover:bg-white/20 transition-colors font-mono"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black/90">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message here..."
                className="flex-1 bg-white/10 text-white rounded-full px-4 py-2 outline-none font-mono"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.currentTarget.value) {
                    handleSendMessage(e.currentTarget.value);
                    e.currentTarget.value = ""; // Clear the input
                  }
                }}
              />
              <button
                className="text-white hover:text-emerald-400 transition-colors"
                aria-label="Send Message"
                onClick={() => {
                  const input = document.querySelector<HTMLInputElement>("input");
                  if (input?.value) {
                    handleSendMessage(input.value);
                    input.value = "";
                  }
                }}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  
        

          

          {/* Spaceship */}
          <div className="absolute w-full h-full lg:pl-48 sm:pl-0 lg:pt-0 sm:pt-0 xs:flex xs:items-center z-10 animate-shake">
            <Image
              src={Spaceship}
              alt="Spaceship"
              className="spaceship-animation shadow-lg"
              width={1100} // Adjust size accordingly
              height={1000}
            />
            </div>
          </div>
        
      </div>

      <style jsx>{`
        @keyframes moveRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100vw);
          }
        }

        @keyframes moveAndRotate {
          from {
            transform: translateX(-100px) translateY(-50%) rotate(0deg);
          }
          to {
            transform: translateX(100vw) translateY(-50%) rotate(360deg);
          }
        }
          @keyframes shake {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(10px);
          }
          75% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .spaceship-animation {
          animation: shake 1s ease-in-out infinite;
        }
      `}</style>
    </div>
    
    
      
    
  );
}


