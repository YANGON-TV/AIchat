'use client';
import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden">
      <header className="p-4 border-b border-white/10 backdrop-blur-md bg-white/5 flex items-center justify-between">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">YANGON TV AI</h1>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <AnimatePresence>
          {messages.map((m) => (
            <motion.div key={m.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role !== 'user' && <Bot className="w-8 h-8 p-1.5 rounded-full bg-white/10" />}
              <div className={`p-4 rounded-2xl max-w-[85%] backdrop-blur-lg border ${m.role === 'user' ? 'bg-blue-600/90 border-blue-500/30' : 'bg-white/5 border-white/10'}`}>
                {m.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className="relative flex items-center">
          <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500" value={input} placeholder="မေးမြန်းပါ..." onChange={handleInputChange} />
          <button className="absolute right-2 p-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors"><Send size={20} /></button>
        </div>
      </form>
    </div>
  );
}
