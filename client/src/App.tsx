import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import AIExperience from './components/AIExperience';
import Contact from './components/Contact';
import Footer from './components/Footer'

import ChatBot from './components/Chatbot';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (
      !savedTheme &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document body
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <AIExperience />
        <Contact />
      </main>
      <Footer />
    <ChatBot />
    </div>
  );
};

export default App;