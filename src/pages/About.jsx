import { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';
import React from 'react';
import hsc from "../assets/bhavans.jpg";
import ssc from "../assets/sjehs.jpg";
import ty from "../assets/tolani.jpg";
import um from "../assets/umlogo.jpg";
import f1 from "../assets/f1.jpg";
import music from "../assets/music.jpg";
import coding from "../assets/coding.jpg";


// Main Component
export default function AboutMe() {
  return (
    <div className="min-h-screen  text-gray-800 py-8 pt-20">
      <header className="container mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-[#bcccdc] mb-2">About Me</h1>
        </header>

      <main className="container mx-auto px-4">
        <Section 
          title="Education" 
          icon={<GraduationCap className="text-blue-600" size={40} />}
          id="education-section"
        >
          <EducationSection />
        </Section>

        <div className='pt-20'>
        <Section 
          title="Work Experience" 
          icon={<Briefcase className="text-green-600" size={40} />}
          id="work-experience-section"
        >
          <WorkExperienceSection />
        </Section>
        </div>

        <Section 
          title="Hobbies" 
          icon={<Heart className="text-red-600" size={40} fill='red' />}
          id="hobbies-section"
        >
          <HobbiesSection />
        </Section>
      </main>
    </div>
  );
}

// Section Component
function Section({ title, icon, children, id }) {
  return (
    <section id={id} className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        {icon}
        <h2 className="text-4xl font-bold text-[#bcccdc]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

// Education Section Component with Road Timeline
// Education Section Component with Responsive Timeline
function EducationSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Set up education data
  const educationData = [
    {
      title: "SSC",
      image: ssc,
      description: "Completed SSC in 2020 with 83%. Performed well in Mathematics and Science, and actively participated in school events."
    },
    {
      title: "HSC",
      image: hsc,
      description: "Completed HSC in 2022 with 75% in the Commerce stream. Built a strong foundation in Economics and Accountancy."
    },
    {
      title: "Bachelor's",
      image: ty,
      description: "Graduated in 2025 with a CGPI of 8.75 in B.Sc. - Information Technology. Final year project: an Art Gallery E-commerce website for showcasing and selling artwork online."
    }
  ];
  
  
  // Check for mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Set up CSS for timeline
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      .education-timeline {
        position: relative;
        padding: 20px 0;
      }
      
      .timeline-container {
        position: relative;
      }
      
      /* Path styling */
      .timeline-path {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      }
      
      .timeline-path svg {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      
      .timeline-path path {
        stroke-dasharray: 2000;
        stroke-dashoffset: 2000;
        animation: drawPath 2s forwards;
      }
      
      @keyframes drawPath {
        to {
          stroke-dashoffset: 0;
        }
      }
      
      /* Education item styling */
      .education-items-container {
        position: relative;
        z-index: 1;
      }
      
      .education-stage {
        position: relative;
        margin-bottom: 50px;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.5s forwards;
      }
      
      .education-stage:nth-child(1) { animation-delay: 0.3s; }
      .education-stage:nth-child(2) { animation-delay: 0.6s; }
      .education-stage:nth-child(3) { animation-delay: 0.9s; }
      
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      /* Marker styling */
      .stage-marker {
        width: 50px;
        height: 50px;
        background-color: #486581;
        border-radius: 50%;
        color: white;
        font-weight: bold;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        margin: 0 auto 15px;
        position: relative;
        z-index: 2;
      }
      
      .stage-card {
        background-color: #f0f4f8;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 1;
      }
      
      /* Desktop layout specifics */
      @media (min-width: 768px) {
        .education-timeline {
          padding: 50px 0;
        }
        
        .timeline-container {
          height: 400px;
        }
        
        .education-items-container {
          display: flex;
          justify-content: space-between;
          height: 100%;
        }
        
        .education-stage {
          width: 25%;
          position: absolute;
          margin-bottom: 0;
        }
        
        .education-stage:nth-child(1) {
          left: 2%;
          top: 60%;
        }
        
        .education-stage:nth-child(2) {
          left: 40%;
          top: 15%;
          transform: translateX(-50%);
        }
        
        .education-stage:nth-child(3) {
          right: 2%;
          top: 60%;
        }
      }
      
      /* Mobile layout specifics */
      @media (max-width: 767px) {
        .timeline-container {
          padding-left: 30px;
        }
        
        .education-items-container {
          display: block;
        }
        
        .education-stage {
          padding-left: 30px;
        }
        
        .stage-marker {
          position: absolute;
          left: -25px;
          top: 20px;
          margin: 0;
        }
        
        .timeline-path {
          left: 15px;
          width: 10px;
        }
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <div className="education-timeline">
      <div className="timeline-container">
        {/* Path SVG - Different for mobile and desktop */}
        <div className="timeline-path">
          {isMobile ? (
            // Vertical path for mobile
            <svg viewBox="0 0 20 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M10,0 L10,600" 
                fill="none" 
                stroke="#bcccdc" 
                strokeWidth="4" 
                strokeLinecap="round"
              />
              <path 
                d="M10,0 L10,600" 
                fill="none" 
                stroke="#fff" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeDasharray="5,5"
              />
            </svg>
          ) : (
            // Curved path for desktop
            <svg viewBox="0 0 1000 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M100,250 C250,250 350,100 500,100 C650,100 750,250 900,250" 
                fill="none" 
                stroke="#bcccdc" 
                strokeWidth="8" 
                strokeLinecap="round"
              />
              <path 
                d="M100,250 C250,250 350,100 500,100 C650,100 750,250 900,250" 
                fill="none" 
                stroke="#486581" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeDasharray="5,5"
              />
            </svg>
          )}
        </div>
        
        {/* Education Items */}
        <div className="education-items-container">
          {educationData.map((item, index) => (
            <div key={index} className="education-stage">
              <div className="stage-marker">{index + 1}</div>
              <div className="stage-card">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-32 object-contain" 
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-[#486581]">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Work Experience Section Component with Sequential Loading
function WorkExperienceSection() {
  const sectionRef = useRef(null);
  const jobRefs = useRef([]);
  
  // Set up work experience data
  const workExperience = [
    {
      company: "Unified Mentor",
      logo: um,
      description: "Worked as a full stack developer intern focusing on React applications. Made various react apps with dynamic design and beautiful textures."
    }
  ];
  
  // Set up CSS for work experience animations
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      .job-item {
        display: flex;
        margin-bottom: 2rem;
        padding: 1.5rem;
        background-color: #243B53;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      
      .job-logo {
        opacity: 0;
        transform: translateX(-20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      
      .job-title {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s;
      }
      
      .job-description {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s;
      }
      
      .job-logo.visible {
        opacity: 1;
        transform: translateX(0);
      }
      
      .job-title.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .job-description.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const jobItem = entry.target;
            const logo = jobItem.querySelector('.job-logo');
            const title = jobItem.querySelector('.job-title');
            const description = jobItem.querySelector('.job-description');
            
            // Sequential animation
            logo.classList.add('visible');
            setTimeout(() => title.classList.add('visible'), 300);
            setTimeout(() => description.classList.add('visible'), 600);
            
            // Unobserve once animated
            observer.unobserve(jobItem);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    // Observe each job item
    jobRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      jobRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {workExperience.map((job, index) => (
        <div 
          key={index} 
          ref={el => (jobRefs.current[index] = el)}
          className="job-item"
        >
          <div className="job-logo flex-shrink-0 mr-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden w-24 h-24 flex items-center justify-center">
              <img 
                src={job.logo} 
                alt={job.company} 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
          
          <div className="flex-grow">
            <h3 className="job-title text-xl font-bold mb-3 text-[#f0f4f8]">
              {job.company}
            </h3>
            <p className="job-description text-gray-300">
              {job.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Hobbies Section Component with Flip Cards
function HobbiesSection() {
  // Set up hobbies data
  const hobbies = [
    {
      name: "Formula One",
      image: f1,
      description: "Avid follower of Formula One racing, passionate about the engineering, strategy, and thrill behind each race. Favorite teams include Red Bull and Ferrari."
    },
    {
      name: "Music",
      image: music,
      description: "Love exploring various music genres from classical to electronic. Play the guitar and enjoy composing original pieces during free time."
    },
    {
      name: "Coding",
      image: coding,
      description: "Passionate about building web applications and solving logical problems. Constantly learning new frameworks and contributing to open-source projects."
    }
  ];
  
  
  // Add CSS for flip cards
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      .hobby-card {
        perspective: 1000px;
        height: 300px;
        width: 100%;
        position: relative;
      }
      
      .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
      }
      
      .hobby-card:hover .card-inner {
        transform: rotateY(180deg);
      }
      
      .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      
      .card-front {
        background-color: #f0f4f8;
      }
      
      .card-back {
        background-color: #f0f4f8;
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1.5rem;
        text-align: center;
      }
      
      .hobby-name {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        text-align: center;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {hobbies.map((hobby, index) => (
        <div key={index} className="hobby-card">
          <div className="card-inner">
            {/* Front side with image */}
            <div className="card-front">
              <img 
                src={hobby.image} 
                alt={hobby.name} 
                className="w-full h-full object-cover" 
              />
              <div className="hobby-name">
                <h3 className="text-lg font-bold">{hobby.name}</h3>
              </div>
            </div>
            
            {/* Back side with description */}
            <div className="card-back">
              <h3 className="text-xl font-bold mb-4 text-[#486581]">{hobby.name}</h3>
              <p className="text-gray-600">{hobby.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}