
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../constants';
import { executeRecaptcha } from '../utils/recaptcha';
import { ScrollReveal } from './ui/ScrollReveal';

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
    <section id="contact" aria-labelledby="contact-heading" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal width="100%">
          <div className="glass rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl glowing-border">
            <div className="flex flex-col lg:flex-row">
              {/* Left Info Column */}
              <div className="lg:w-[40%] bg-indigo-600 p-12 lg:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/20 rounded-full -ml-24 -mb-24 blur-3xl"></div>

                <div className="relative z-10">
                  <h2 id="contact-heading" className="text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tight uppercase">Let's Build <br /> The Future</h2>
                  <p className="text-indigo-100 mb-12 text-lg font-light leading-relaxed">
                    I'm available for technical consultation, full-stack leadership roles, and challenging engineering projects.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-center gap-5 group cursor-pointer">
                      <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all group-hover:scale-110">
                        <i className="fa-solid fa-envelope text-xl"></i>
                      </div>
                      <div>
                        <p className="text-xs text-indigo-300 uppercase tracking-widest font-black mb-1">Email</p>
                        <p className="font-bold text-lg">faru947@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 group cursor-pointer">
                      <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all group-hover:scale-110">
                        <i className="fa-solid fa-phone text-xl"></i>
                      </div>
                      <div>
                        <p className="text-xs text-indigo-300 uppercase tracking-widest font-black mb-1">Phone</p>
                        <p className="font-bold text-lg">+973 340 480 36</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 group cursor-pointer">
                      <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all group-hover:scale-110">
                        <i className="fa-solid fa-location-dot text-xl"></i>
                      </div>
                      <div>
                        <p className="text-xs text-indigo-300 uppercase tracking-widest font-black mb-1">Location</p>
                        <p className="font-bold text-lg">Muharraq, Bahrain</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-20 flex gap-5">
                    <a href="https://www.linkedin.com/in/mohammad-farhan-99198419b" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:-translate-y-1"><i className="fa-brands fa-linkedin-in text-lg"></i></a>
                    <a href="https://github.com/faru947" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:-translate-y-1"><i className="fa-brands fa-github text-lg"></i></a>
                    <a href="https://farhan.xyz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:-translate-y-1"><i className="fa-solid fa-globe text-lg"></i></a>
                  </div>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="lg:w-[60%] p-12 lg:p-16 bg-gray-900/50">
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  aria-labelledby="contact-form-heading"
                  noValidate
                >
                  <h3 id="contact-form-heading" className="sr-only">Contact Form</h3>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="contact-name" className="text-xs font-black uppercase tracking-widest text-indigo-400 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      aria-required="true"
                      placeholder="e.g. John Doe"
                      className="bg-white/5 border border-white/5 rounded-2xl py-5 px-6 focus:outline-none focus:border-indigo-500 transition-all text-white hover:bg-white/10"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="contact-email" className="text-xs font-black uppercase tracking-widest text-indigo-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      aria-required="true"
                      placeholder="e.g. john@example.com"
                      className="bg-white/5 border border-white/5 rounded-2xl py-5 px-6 focus:outline-none focus:border-indigo-500 transition-all text-white hover:bg-white/10"
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-3">
                    <label htmlFor="contact-subject" className="text-xs font-black uppercase tracking-widest text-indigo-400 ml-1">Subject</label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      placeholder="Hiring Inquiry / Technical consultation"
                      className="bg-white/5 border border-white/5 rounded-2xl py-5 px-6 focus:outline-none focus:border-indigo-500 transition-all text-white hover:bg-white/10"
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-3">
                    <label htmlFor="contact-message" className="text-xs font-black uppercase tracking-widest text-indigo-400 ml-1">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      aria-required="true"
                      placeholder="Tell me about your project or role..."
                      className="bg-white/5 border border-white/5 rounded-2xl py-5 px-6 focus:outline-none focus:border-indigo-500 transition-all text-white resize-none hover:bg-white/10"
                    ></textarea>
                  </div>
                  {error && (
                    <div
                      role="alert"
                      className="md:col-span-2 p-5 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-sm flex items-center gap-3 animate-head-shake"
                    >
                      <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
                      <span>{error}</span>
                    </div>
                  )}
                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      disabled={isSent || isLoading}
                      aria-busy={isLoading}
                      className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shimmer ${isSent ? 'bg-emerald-600 text-white shadow-emerald-600/20' : isLoading ? 'bg-indigo-400 cursor-not-allowed text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                    >
                      {isSent ? (
                        <>
                          <i className="fa-solid fa-circle-check text-lg"></i>
                          Sent Successfully
                        </>
                      ) : isLoading ? (
                        <>
                          <i className="fa-solid fa-spinner fa-spin text-lg"></i>
                          Processing...
                        </>
                      ) : (
                        <>
                          Send Message
                          <i className="fa-solid fa-arrow-right text-lg"></i>
                        </>
                      )}
                    </button>
                    <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                      <i className="fa-solid fa-shield-halved text-emerald-500"></i>
                      <span>Securely protected by reCAPTCHA v3</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
