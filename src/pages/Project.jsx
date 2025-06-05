import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import moz from '../assets/moz.png'
import csms from '../assets/csms.png'
import pj1 from '../assets/pj1.png'
import pj2 from '../assets/image.png'

const Projects = () => {
  // Sample project data - replace with your actual data
  const projects = [
    {
      id: 1,
      number: "01",
      name: "mozart gallery",
      type: "College Project",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      imageUrl: moz
    },
    {
      id: 2,
      number: "02",
      name: "cosmos creative academy",
      type: "Client Project",
      description: "An interactive weather application that displays real-time weather data and forecasts. Built with React and integrates with a weather API for accurate information.",
      imageUrl: csms
    },
    {
      id: 3,
      number: "03",
      name: "hive social media",
      type: "College Project",
      description: "A productivity tool designed to help users organize tasks, set priorities, and track progress. Includes features like drag-and-drop, calendar view, and notifications.",
      imageUrl: pj1
    },
    {
      id: 4,
      number: "04",
      name: "Portfolio website",
      type: "Personal Project",
      description: "A centralized platform to manage and analyze social media accounts. Provides insights on engagement metrics and audience demographics.",
      imageUrl: pj2
    }
  ];

  // State to track which projects should be visible
  const [visibleProjects, setVisibleProjects] = useState(1);
  const projectRefs = useRef([]);

  // Set up intersection observer to track scroll and reveal projects
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const projectId = parseInt(entry.target.dataset.projectId);
          setVisibleProjects(prev => Math.max(prev, projectId + 1));
        }
      });
    }, observerOptions);

    // Observe all project refs that have been set
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projectRefs]);

  // Auto-reveal projects one after another (even without scrolling)
  useEffect(() => {
    // Only proceed if we haven't revealed all projects yet
    if (visibleProjects < projects.length) {
      const timer = setTimeout(() => {
        setVisibleProjects(prev => prev + 1);
      }, 1000); // 1 second delay between project reveals
      
      return () => clearTimeout(timer);
    }
  }, [visibleProjects, projects.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Stagger the animations of children
      }
    }
  };

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="pt-[150px] container mx-auto px-4 md:px-6">
      <div className="space-y-32">
        {projects.slice(0, visibleProjects).map((project, index) => {
          const isEven = project.id % 2 === 0;

          // Set up ref for this project
          const setProjectRef = (el) => {
            projectRefs.current[index] = el;
          };

          return (
            <motion.div 
              key={project.id}
              ref={setProjectRef}
              data-project-id={index}
              className={`flex flex-col gap-8 ${
                isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Text Content */}
              <motion.div 
                className="flex-1 flex flex-col justify-start"
                variants={isEven ? rightVariants : leftVariants}
              >
                <div className="mb-4">
                  <div className="flex items-start gap-2">
                      
                    <h3 className="text-4xl font-bold uppercase text-[#f0f4f8]">{project.name}</h3>
                  </div>
                  <p className="text-lg text-[#bcccdc] mt-1 ml-6">{project.type}</p>
                </div>
                <p className="text-md text-[#829ab1] leading-relaxed ml-6">
                  {project.description}
                </p>
              </motion.div>
              
              {/* Image */}
              <motion.div 
                className="flex-1 rounded-lg overflow-hidden"
                variants={isEven ? leftVariants : rightVariants}
              >
                <img 
                  src={project.imageUrl} 
                  alt={`${project.name} project`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          );
        })}
        
        {/* Invisible elements to trigger loading of additional projects */}
        {projects.slice(1, projects.length).map((project, index) => (
          <div 
            key={`trigger-${project.id}`}
            ref={el => {
              if (el && !projectRefs.current[index + 1]) {
                projectRefs.current[index + 1] = el;
              }
            }}
            data-project-id={index + 1}
            className="h-4 -mt-16"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;