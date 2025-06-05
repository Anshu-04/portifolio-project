import { useState } from 'react';
import mslogo from '../assets/msologo.png';
import pblogo from '../assets/pblogo.png';

const TechStackDiagram = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Define tech categories with their tools
  const techCategories = {
    build: {
      title: "Build",
      tools: [
        {
          name: 'React',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
        },
        { 
          name: 'Node.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
        },
        { 
          name: 'Express.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' 
        },
        { 
          name: 'MongoDB', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' 
        },
        { 
          name: 'SQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' 
        },
        {
          name: 'Wordpress',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg'
        },
        {
          name: 'Vercel',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg'
        },
        {
          name: 'Vite.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
        }
      ]
    },
    code: {
      title: "Code",
      tools: [
        { 
          name: 'JavaScript', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' 
        },
        { 
          name: 'Python', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' 
        },
        { 
          name: 'Java', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' 
        },
        { 
          name: 'C++', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' 
        }
      ]
    },
    design: {
      title: "Design",
      tools: [
        { 
          name: 'HTML5', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' 
        },
        { 
          name: 'CSS3', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' 
        },
        { 
          name: 'Bootstrap', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' 
        },
        { 
          name: 'Tailwind CSS', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' 
        }
      ]
    },
    analyzeShowcase: {
      title: "Display",
      tools: [
        { 
          name: 'Power BI', 
          logo: pblogo
        },
        { 
          name: 'VS Code', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' 
        },
        { 
          name: 'GitHub', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' 
        },
        { 
          name: 'MS Office', 
          logo: mslogo
        }
      ]
    }
  };

  // Handle tooltip visibility
  const handleMouseEnter = (toolName) => {
    setActiveTooltip(toolName);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  // Tech Icon component for consistent rendering
  const TechIcon = ({ tool }) => (
    <div 
      className="relative flex flex-col items-center justify-center p-4"
      onMouseEnter={() => handleMouseEnter(tool.name)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center p-2 transition-all duration-200 hover:shadow-lg hover:scale-110">
        <img src={tool.logo} alt={tool.name} className="w-10 h-10" />
      </div>
      
      {/* Tooltip */}
      {activeTooltip === tool.name && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
          {tool.name}
        </div>
      )}
    </div>
  );

  // Section component with title and tools
  const Section = ({ title, tools, gridCols = "grid-cols-4" }) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">{title}</h2>
      <div className={`grid ${gridCols} gap-4`}>
        {tools.map((tool, index) => (
          <TechIcon key={index} tool={tool} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#bcccdc] mb-8">My Tech Stack</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Build section (1/3 width) */}
        <div className="lg:w-1/3 bg-[#e0f0ff] rounded-lg p-6">
          <Section 
            title={techCategories.build.title} 
            tools={techCategories.build.tools} 
            gridCols="grid-cols-2"
          />
        </div>
        
        {/* Right side - Code, Design, Analyze+Showcase (2/3 width) */}
        <div className="lg:w-2/3 bg-[#f0f4f8] rounded-lg p-6">
          {/* Code Section */}
          <Section 
            title={techCategories.code.title} 
            tools={techCategories.code.tools} 
          />
          
          {/* Design Section */}
          <Section 
            title={techCategories.design.title} 
            tools={techCategories.design.tools} 
          />
          
          {/* Analyze + Showcase Section */}
          <Section 
            title={techCategories.analyzeShowcase.title} 
            tools={techCategories.analyzeShowcase.tools} 
          />
        </div>
      </div>
    </div>
  );
};

export default TechStackDiagram;