import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FormDataType } from '../types/types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    
    try {
      await emailjs.sendForm(
        'service_6pjq45y',    // Från EmailJS dashboard
        'template_acxd2eb',   // Från EmailJS dashboard
        e.target as HTMLFormElement,  // Formuläret
        'DHIoieBVznOFolr6S'    // Från EmailJS dashboard
      );
      
      setStatus('Meddelande skickat!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setStatus('Det uppstod ett fel. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Skicka ett <span className="text-blue-500">Meddelande</span>
        </h2>
        
        <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-8 text-white md:w-1/3">
            <h3 className="text-xl font-bold mb-6">Kontakt Information</h3>
            
            <div className="flex items-center mb-4">
              <i className="fa-solid fa-envelope mr-4"></i>
              <span>dev.peter.ai.com</span>
            </div>
            
            <div className="flex items-center mb-4">
              <i className="fa-solid fa-phone mr-4"></i>
              <span>+46704893020</span>
            </div>
            
            <div className="flex items-center mb-6">
              <i className="fa-solid fa-location-dot mr-4"></i>
              <span>Karlstad, Sverige</span>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-white text-xl hover:text-blue-200 transition-colors duration-300">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="text-white text-xl hover:text-blue-200 transition-colors duration-300">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="text-white text-xl hover:text-blue-200 transition-colors duration-300">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div className="p-8 md:w-2/3">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-600 dark:text-gray-400 font-medium mb-2">
                 Namn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-600 dark:text-gray-400 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-600 dark:text-gray-400 font-medium mb-2">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Skickar...' : 'Sänd Meddelande'}
              </button>
              
              {status && (
                <div className={`mt-4 p-3 rounded-lg ${status.includes('fel') ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200' : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;