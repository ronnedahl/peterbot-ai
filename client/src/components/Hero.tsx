import React from 'react';
import profileImage from '../assets/profilfoto.jpg'; 
const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-800/20 dark:to-gray-100/10 py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 md:text-left text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frontend Utvecklare <span className="text-blue-500">&</span> AI Utvecklare
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Utexaminerande frontendutvecklare med en passion för AI och att skapa moderna, användarvänliga webbupplevelser.
            </p>
            <div className="flex gap-4 md:justify-start justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Kontakta Mig
              </a>
              <a
                href="#skills"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
              >
                Visa Färdigheter
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative flex justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-md"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 sm:right-12 md:right-0 lg:right-12 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="text-lg font-bold text-blue-500">Utexaminerad</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Och redo för arbete</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;