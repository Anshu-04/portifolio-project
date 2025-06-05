import { useState } from 'react';
import { Linkedin, Instagram, Github, Phone, Mail, CheckCircle } from 'lucide-react';
import DownloadButton from '../components/DownloadButton';

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Error state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate inputs
    validateField(name, value);
  };

  // Validate individual field
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'subject':
        if (value.length > 50) {
          error = 'Subject cannot exceed 50 characters';
        }
        break;
      case 'message':
        if (value.length > 300) {
          error = 'Message cannot exceed 300 characters';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    
    // Validate all fields before submission
    let hasErrors = false;
    
    // Validate name
    if (formData.name.trim().length < 2) {
      setErrors(prev => ({ ...prev, name: 'Name must be at least 2 characters' }));
      hasErrors = true;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      hasErrors = true;
    }
    
    // Check if subject is within limits
    if (formData.subject.length > 50) {
      setErrors(prev => ({ ...prev, subject: 'Subject cannot exceed 50 characters' }));
      hasErrors = true;
    }
    
    // Check if message is within limits
    if (formData.message.length > 300) {
      setErrors(prev => ({ ...prev, message: 'Message cannot exceed 300 characters' }));
      hasErrors = true;
    }
    
    // If there are errors, don't proceed
    if (hasErrors) {
      console.log('Form has errors, please correct them');
      return;
    }
    
    // Submit form logic would go here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto pt-26 pb-10 px-10 lg:px-24">
      <div className="lg:flex">
        {/* Left column */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-16">
          <h1 className="text-5xl font-bold uppercase mb-10 text-[#f0f4f8]">Get in touch</h1>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-center text-lg">
              <Phone className="mr-3 text-[#bcccdc]" size={20} />
              <span className='text-[#f0f4f8]'>+91 9619829710</span>
            </div>
            <div className="flex items-center text-lg">
              <Mail className="mr-3 text-[#bcccdc]" size={20} />
              <span className='text-[#f0f4f8]'>patelanshu31@gmail.com</span>
            </div>
            <div>
              <DownloadButton/>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800" aria-label="LinkedIn">
              <Linkedin size={32} />
            </a>
            <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800" aria-label="Instagram">
              <Instagram size={32} />
            </a>
            <a href="https://github.com" className="text-gray-800 hover:text-black" aria-label="GitHub">
              <Github size={32} />
            </a>
          </div> 
        </div>
        
        {/* Right column - Form Card with Flip Effect */}
        <div className="lg:w-1/2 flex justify-center ">
          {/* Card container with perspective for 3D effect */}
          <div className="relative w-full max-w-md" style={{ 
            perspective: '1000px',
            height: '520px'
          }}>
            {/* Card wrapper with 3D flip effect */}
            <div 
              className="absolute w-full h-full transition-transform duration-700 ease-in-out"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: isSubmitted ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front of card - Form */}
              <div 
                className="absolute w-full h-full bg-[#243B53] text-white px-8 py-6 rounded-2xl shadow-lg"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      maxLength={50}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                    <p className="text-sm text-gray-400 mt-1">
                      {formData.subject.length}/50 characters
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      maxLength={300}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                    <p className="text-sm text-gray-400 mt-1">
                      {formData.message.length}/300 characters
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      onClick={handleSubmit}
                      className="bg-[#bcccdc] text-black py-2 px-6 rounded-md hover:bg-[#829ab1] focus:outline-none focus:ring-2  focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Back of card - Success message */}
              <div 
                className="absolute w-full h-full bg-[#243B53] text-white px-8 py-6 rounded-2xl shadow-lg flex flex-col items-center justify-center"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <CheckCircle size={80} className="text-green-500 mb-6" />
                <h2 className="text-2xl font-bold text-center mb-4">Form Submitted Successfully</h2>
                <p className="text-lg text-center text-gray-400 mb-8">Thank you for your message. We'll get back to you soon.</p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      message: ''
                    });
                  }}
                  className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}