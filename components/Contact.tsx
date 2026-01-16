
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../constants';
import { executeRecaptcha } from '../utils/recaptcha';

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Execute reCAPTCHA v3
      const recaptchaToken = await executeRecaptcha('contact_form');

      const templateParams = {
        name: formData.get('name') as string,
        user_email: formData.get('email') as string,
        subject: formData.get('subject') as string || 'No Subject',
        message: formData.get('message') as string,
        recaptcha_token: recaptchaToken, // Include reCAPTCHA token in submission
        time: new Date().toLocaleString('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short'
        })
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSent(true);
      form.reset();
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send message. Please try again or contact directly at faru947@gmail.com');
      setTimeout(() => setError(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-indigo-600 p-12 text-white">
              <h2 id="contact-heading" className="text-4xl font-bold mb-6 leading-tight">Let's Build Together</h2>
              <p className="text-indigo-100 mb-10 text-lg">
                I'm available for technical consultation, full-stack leadership roles, and challenging engineering projects.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center bg-white/10">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Email</p>
                    <p className="font-medium">faru947@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center bg-white/10">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Phone</p>
                    <p className="font-medium">+973 340 480 36</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center bg-white/10">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Location</p>
                    <p className="font-medium">Muharraq, Bahrain</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <a href="https://www.linkedin.com/in/mohammad-farhan-99198419b" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/faru947" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"><i className="fa-brands fa-github"></i></a>
                <a href="https://farhan.xyz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"><i className="fa-solid fa-globe"></i></a>
              </div>
            </div>

            <div className="md:w-2/3 p-12 bg-gray-900/40">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                aria-labelledby="contact-form-heading"
                noValidate
              >
                <h3 id="contact-form-heading" className="sr-only">Contact Form</h3>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-gray-300 ml-1">
                    Full Name <span className="text-red-400" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    aria-required="true"
                    placeholder="Enter your name"
                    className="bg-gray-800/50 border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-indigo-500 transition-all text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-gray-300 ml-1">
                    Email Address <span className="text-red-400" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    aria-required="true"
                    placeholder="your@email.com"
                    className="bg-gray-800/50 border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-indigo-500 transition-all text-white"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label htmlFor="contact-subject" className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="Hiring / Project Inquiry"
                    className="bg-gray-800/50 border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-indigo-500 transition-all text-white"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-gray-300 ml-1">
                    Message <span className="text-red-400" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    placeholder="Briefly describe your requirements..."
                    className="bg-gray-800/50 border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-indigo-500 transition-all text-white resize-none"
                  ></textarea>
                </div>
                {error && (
                  <div
                    role="alert"
                    className="md:col-span-2 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-sm flex items-center gap-2"
                  >
                    <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
                    <span>{error}</span>
                  </div>
                )}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSent || isLoading}
                    aria-busy={isLoading}
                    className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 ${isSent ? 'bg-emerald-600 text-white' : isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-600/20'
                      }`}
                  >
                    {isSent ? (
                      <>
                        <i className="fa-solid fa-circle-check"></i>
                        Message Sent Successfully
                      </>
                    ) : isLoading ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="fa-solid fa-paper-plane text-sm"></i>
                      </>
                    )}
                  </button>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                    <i className="fa-solid fa-shield-halved text-green-500"></i>
                    <span>Protected by</span>
                    <span className="font-semibold text-gray-400">Google reCAPTCHA</span>
                    <span className="text-gray-600">v3</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
