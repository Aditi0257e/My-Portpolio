import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">Aditi</span>Chatterjee
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full-stack web developer and ML enthusiast passionate about creating innovative 
              solutions and building meaningful digital experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
          
          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Aditi0257e"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditi-ch9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="mailto:aditichatterjee588@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              <p>aditichatterjee588@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Aditi Chatterjee. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;