import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

const GeminiResponse = ({ text, time, sender }) => {
  const isKAMI = sender === 'KAMI';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex ${isKAMI ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div 
        className={`max-w-[88%] p-4 rounded-2xl shadow-sm border relative ${
          isKAMI 
            ? 'bg-white text-on-surface rounded-tl-none border-surface-container-highest shadow-[0_4px_20px_-4px_rgba(41,105,86,0.1)]' 
            : 'bg-primary text-on-primary rounded-tr-none border-primary shadow-[0_4px_20px_-4px_rgba(41,105,86,0.3)]'
        }`}
      >
        {/* Decorative corner for KAMI */}
        {isKAMI && (
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-primary/10 rounded-full blur-sm -z-10" />
        )}

        <div className={`markdown-content ${isKAMI ? 'text-on-surface' : 'text-on-primary'}`}>
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ node, ...props }) => <p className="text-[15px] font-bold leading-relaxed mb-2 last:mb-0" {...props} />,
              strong: ({ node, ...props }) => (
                <span className="relative inline-block">
                  <strong 
                    className={`font-black relative z-10 ${isKAMI ? 'text-primary' : 'text-white'}`} 
                    {...props} 
                  />
                  {isKAMI && <span className="absolute bottom-0 left-0 w-full h-[30%] bg-primary/10 -z-0 rounded-sm" />}
                </span>
              ),
              ul: ({ node, ...props }) => <ul className="list-disc ml-4 mb-2 space-y-1" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal ml-4 mb-2 space-y-1" {...props} />,
              li: ({ node, ...props }) => <li className="text-[15px] font-bold" {...props} />,
              a: ({ node, ...props }) => (
                <a 
                  className={`${isKAMI ? 'text-primary' : 'text-white'} underline font-bold hover:opacity-80 transition-opacity`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  {...props} 
                />
              ),
              code: ({ node, inline, ...props }) => (
                <code 
                  className={`${inline ? 'px-1 rounded bg-surface-container-highest/50' : 'block p-3 rounded-lg bg-surface-container-highest/30 overflow-x-auto'} font-mono text-[13px] mb-2`} 
                  {...props} 
                />
              )
            }}
          >
            {text}
          </ReactMarkdown>
        </div>

        <div className={`flex items-center gap-1 mt-2 ${isKAMI ? 'justify-start' : 'justify-end'}`}>
          <p className={`text-[10px] font-black uppercase tracking-tighter opacity-50 ${isKAMI ? 'text-on-surface-variant' : 'text-on-primary'}`}>
            {time}
          </p>
          {isKAMI && (
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex gap-0.5 ml-1"
            >
              <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
              <span className="w-1 h-1 bg-primary/50 rounded-full"></span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GeminiResponse;
