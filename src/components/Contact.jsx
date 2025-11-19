import { useState } from 'react';
import Section from './Section';
import { personalInfo } from '../data';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // This is where you would integrate with a form service.
    alert("Thank you for your message! This form is a demo. Please contact me via email.");
    event.target.reset();
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 bg-gray-800/30 p-6 md:p-8 rounded-lg shadow-lg">
        <div>
          <p className="text-gray-400 mb-8">
            I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, my inbox is always open. I'll get back to you as soon as possible!
          </p>
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href={`https://mail.google.com/mail?view=cm&fs=1&to=${personalInfo.email}&su=Visited_your_portfolio`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">{personalInfo.email}</a>
          </div>
           <p className="text-blue-400/50 my-4 italic">Click the Email to send me a message using Gmail directly!</p>
        </div>
        
        {/* To make this form functional, you can use a service like Formspree (https://formspree.io/) or Netlify Forms.
            For Formspree, you would add: action="https://formspree.io/f/YOUR_FORM_ID" method="POST" */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
            <input type="text" id="name" name="name" required className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
            <input type="email" id="email" name="email" required className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
            <textarea id="message" name="message" rows="4" required className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"></textarea>
          </div>
          <button type="submit" className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:bg-cyan-600 w-full">Send Message</button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;