import React from 'react';
import { Code, Database, Globe, Server, Brain, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express', 'GraphQL', 'RESTful APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Database size={32} />,
      title: 'Database & Cloud',
      skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Redis'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Brain size={32} />,
      title: 'ML Libraries',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Cpu size={32} />,
      title: 'AI & Data Science',
      skills: ['Machine Learning', 'Deep Learning', 'Data Analysis', 'Computer Vision', 'NLP'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Globe size={32} />,
      title: 'DevOps & Tools',
      skills: ['Git', 'CI/CD', 'Docker', 'Linux', 'AWS'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 border border-gray-700/50"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-gray-300 flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;