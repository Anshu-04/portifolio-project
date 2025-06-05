import React, { useState, useEffect } from 'react'
import pfp from '../assets/pfp.png'
import Navbar from '../components/Navbar'
import TechStackDiagram from '../components/TechStackDiagram'
import DownloadButton from '../components/DownloadButton'

const Home = () => {
  // State for animations
  const [imageLoaded, setImageLoaded] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [bioWords, setBioWords] = useState([]);
  const [displayedBioWords, setDisplayedBioWords] = useState([]);

  // Full bio text
  const bioText = "H Hey there! I'm Anshu Patel, a budding Web Developer passionate about building clean, responsive, and user-friendly websites. I love turning ideas into interactive experiences using HTML, CSS, JavaScript, and modern frameworks. Always exploring new tech and sharpening my skills — this is just the beginning of my coding journey.";

  useEffect(() => {
    // Start image rotation animation immediately
    setImageLoaded(true);
    
    // Trigger name zoom effect after a short delay
    const nameTimer = setTimeout(() => {
      setNameVisible(true);
    }, 1700);
    
    // Split bio into words and store in state
    const words = bioText.split(' ');
    setBioWords(words);
    
    // Start displaying bio words one by one
    let count = 0;
    const bioTimer = setInterval(() => {
      if (count < words.length) {
        setDisplayedBioWords(prev => [...prev, words[count]]);
        count++;
      } else {
        clearInterval(bioTimer);
      }
    }, 100 - 40); // Adjust speed here - lower value = faster
    
    return () => {
      clearTimeout(nameTimer);
      clearInterval(bioTimer);
    };
  }, []);

  return (
    <div className="min-h-screen pt-18 pb-8 bg-[#0f172a] text-white">
      <Navbar />

      {/* Outer Container */}
      <div className="flex flex-col items-center justify-center px-6">
        {/* Main Section: Image+Name and Bio Side-by-Side */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-10 max-w-6xl w-full">
          
          {/* Left Column: Image + Name */}
          <div className="flex flex-col items-center justify-center">
            <div className="overflow-hidden">
              <img 
                src={pfp} 
                alt="Profile" 
                className={`w-64 h-64 rounded-full border-4 border-[#bcccdc] shadow-lg transition-transform duration-1000 ${imageLoaded ? 'animate-spin-slow' : ''}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <h1 
              className={`text-4xl font-bold text-[#bcccdc] mt-4 pb-10 transition-all duration-700 transform ${nameVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            >
              Anshu Patel
            </h1>
            <DownloadButton/>
          </div>

          {/* Right Column: Bio */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl shadow-md border-l-4 border-[#bcccdc] max-w-2xl h-[20rem] flex items-center">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              {displayedBioWords.map((word, index) => {
                // Apply special styling for specific words
                if (word === "Hey" && index === 0) {
                  return <span key={index} className="text-[#bcccdc] font-semibold">{word} </span>;
                } else if (word === "there!" && index === 1) {
                  return <span key={index} className="text-[#bcccdc] font-semibold">{word} </span>;
                } else if (word === "I'm" && index === 2) {
                  return <span key={index}>{word} </span>;
                } else if (word === "Anshu" && index === 3) {
                  return <span key={index} className="text-white font-semibold">{word} </span>;
                } else if (word === "Patel," && index === 4) {
                  return <span key={index} className="text-white font-semibold">{word} </span>;
                } else if (word === "HTML" || word === "CSS" || word === "JavaScript") {
                  return <span key={index} className="text-gray-200">{word} </span>;
                } else if (index >= bioWords.length - 9) {
                  // Apply italic styling to the last phrase
                  return <span key={index} className="italic text-[#bcccdc]">{word} </span>;
                } else {
                  return <span key={index}>{word} </span>;
                }
              })}
            </p>
          </div>
        </div>
        <TechStackDiagram/>
      </div>
    </div>
  )
}

// Add this to your global CSS or as a tailwind plugin
// If using tailwind.config.js, add this to the extend.animation section:
// 'spin-slow': 'spin 8s linear infinite',

export default Home