'use client';

import { useState } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';

export default function HydroBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: 'Hi! I am HydroBot, powered by Huawei Pangu Models. How can I assist you with the water network today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');

    // Mock AI response delay
    setTimeout(() => {
      let botReply = 'I am currently analyzing the sensor data. Please hold.';
      
      const query = userMessage.toLowerCase();
      if (query.includes('leak') || query.includes('critical')) {
        botReply = 'Currently, PIPE-003 is reporting a critical 18 PSI pressure drop. I recommend dispatching a technician to Bole Medhanialem immediately.';
      } else if (query.includes('save') || query.includes('money')) {
        botReply = 'Based on last month\'s data, closing Valve B during off-peak hours could save approximately 15,000 ETB in pumping costs.';
      }

      setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 left-4 z-[1000]">
      {isOpen ? (
        <div className="bg-white w-80 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[400px]">
          {/* Header */}
          <div className="bg-sky-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <h3 className="font-bold text-sm">HydroBot AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-sky-200 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-sky-500 text-white rounded-br-sm' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-bl-sm shadow-sm'
                }`}>
                  {msg.role === 'bot' && <Sparkles className="w-3 h-3 text-sky-500 mb-1" />}
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about network status..."
              className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button 
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-xl transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-sky-600 hover:bg-sky-700 text-white p-4 rounded-full shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <Bot className="w-6 h-6" />
          <span className="font-bold pr-1">Ask AI</span>
        </button>
      )}
    </div>
  );
}
