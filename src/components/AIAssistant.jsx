import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, User, Sparkles } from 'lucide-react';

const initialMessages = [
  { id: 1, text: "System initialized. I'm the Election AI Assistant. How can I facilitate your democratic process today?", sender: 'bot' }
];

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Processing query... I recommend checking the official electoral registry for precise details on that matter.";
      const lowerInput = inputValue.toLowerCase();
      
      if (lowerInput.includes('register') || lowerInput.includes('how to vote')) {
        botResponse = "Voter registration requires citizenship and meeting the minimum age requirement of 18. You can process this via the digital civic portal or at a designated municipal office.";
      } else if (lowerInput.includes('id') || lowerInput.includes('identification')) {
        botResponse = "Biometric or government-issued photo IDs (e.g., Driver's License, Passport, State ID) are mandated for verification at the polling station.";
      } else if (lowerInput.includes('when') || lowerInput.includes('date')) {
        botResponse = "General elections occur on the first Tuesday following the first Monday in November. Refer to the Timeline for the exact structural phases.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="assistant" className="py-24 relative z-10 flex justify-center">
      <div className="w-full max-w-3xl px-6">
        
        <div className="text-center mb-10">
          <motion.div 
            className="inline-flex items-center gap-2 text-cyan-400 mb-2"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          >
            <Sparkles size={18} />
            <span className="font-semibold uppercase tracking-wider text-sm">Neural Assistant</span>
          </motion.div>
          <h2 className="text-3xl font-display font-bold">Ask AI</h2>
        </div>

        <motion.div 
          className="glass-panel flex flex-col h-[500px] overflow-hidden relative shadow-neon-blue/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-white/10 bg-dark-900/50 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-cyan flex items-center justify-center shadow-neon-blue">
                <Bot size={20} className="text-white" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-dark-900 rounded-full" />
            </div>
            <div>
              <h3 className="font-medium text-white text-sm">Election Assistant AI</h3>
              <p className="text-xs text-green-400">Online & Ready</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id} 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.sender === 'user' ? 'bg-accent/20 text-accent-400 ring-1 ring-accent/30' : 'bg-primary/20 text-primary-400 ring-1 ring-primary/30'
                  }`}>
                    {msg.sender === 'bot' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-br from-primary/80 to-primary text-white rounded-tr-sm shadow-neon-blue/20' 
                      : 'bg-dark-900/60 border border-white/5 text-slate-200 rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex gap-3 max-w-[85%]"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary/20 text-primary-400 ring-1 ring-primary/30">
                  <Bot size={16} />
                </div>
                <div className="p-4 rounded-2xl bg-dark-900/60 border border-white/5 rounded-tl-sm flex gap-1 items-center">
                  <motion.div className="w-2 h-2 bg-primary rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                  <motion.div className="w-2 h-2 bg-primary rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                  <motion.div className="w-2 h-2 bg-primary rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-dark-900/80">
            <form onSubmit={handleSend} className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Ask about voter IDs, deadlines, or locations..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-dark-800 border border-white/10 text-white rounded-full py-3 pl-5 pr-14 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-500"
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim()}
                className="absolute right-2 p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:hover:bg-primary"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
