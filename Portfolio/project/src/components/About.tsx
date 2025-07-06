import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <User size={20} />
                <span className="text-lg">Full Stack Web Developer & ML Enthusiast</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate full-stack web developer and machine learning enthusiast who loves 
                creating innovative digital solutions. I specialize in modern web technologies and 
                enjoy exploring the intersection of web development and artificial intelligence.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                My journey combines the art of crafting beautiful, responsive web applications with 
                the science of machine learning algorithms. I'm always eager to learn new technologies 
                and contribute to projects that make a meaningful impact.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/1679208177011 (1) (1).jpg"
                    alt="Aditi Chatterjee"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;