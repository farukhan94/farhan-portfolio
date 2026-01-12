
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Initialize initial messages when chat opens for the first time
  useEffect(() => {
    if (isOpen && !hasInitialized) {
      setHasInitialized(true);
      setIsTyping(true);
      
      // Show typing animation for 1-2 seconds, then show first message
      const firstDelay = 1500 + Math.random() * 500; // 1.5-2 seconds
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { role: 'model', text: "Hello! I'm Farhan's AI agent." }]);
        
        // Show typing again, then second message
        setTimeout(() => {
          setIsTyping(true);
          const secondDelay = 500 + Math.random() * 100; // 0.5-1.2 seconds
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'model', text: "Ask me anything about his experience and skills!" }]);
          }, secondDelay);
        }, 300);
      }, firstDelay);
    }
  }, [isOpen, hasInitialized]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    // Random delay between 1-5 seconds before making the API call
    const randomDelay = 1000 + Math.random() * 2000; // 1-2 seconds
    
    await new Promise(resolve => setTimeout(resolve, randomDelay));

    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const response = await geminiService.chat(userMessage, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 glass w-[350px] md:w-[400px] h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-indigo-600 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fa-solid fa-robot text-white"></i>
              </div>
              <span className="font-bold text-white">Farhan's AI Chatbot</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-900/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg' 
                  : 'bg-gray-800 text-gray-200 rounded-tl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none border border-white/5">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about microservices, AWS..."
                className="w-full bg-gray-800/50 border border-white/10 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:border-indigo-500 transition-colors text-white text-sm"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50 transition-all"
              >
                <i className="fa-solid fa-arrow-up text-sm"></i>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-600/30 text-white hover:bg-indigo-700 transition-all transform hover:scale-110 active:scale-95 group"
      >
        {isOpen ? (
          <i className="fa-solid fa-comments text-2xl"></i>
        ) : (
          <div className="relative">
            <i className="fa-solid fa-microchip text-2xl group-hover:rotate-12 transition-transform"></i>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-indigo-600 rounded-full"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default AIChatbot;
