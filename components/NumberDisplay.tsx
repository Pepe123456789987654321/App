import React from 'react';

interface NumberDisplayProps {
  number: string | null;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ number }) => {
  if (!number) {
    return (
       <div className="text-5xl md:text-7xl font-mono tracking-widest text-[var(--text-placeholder)] animate-pulse">
        ----
      </div>
    );
  }

  const digits = number.split('');

  return (
    <div className="flex space-x-2 md:space-x-4">
      {digits.map((digit, index) => (
        <div
          key={index}
          className="
            animate-pop-in 
            flex items-center justify-center 
            w-16 h-20 md:w-20 md:h-24 
            bg-slate-700/50 
            rounded-lg 
            shadow-inner 
            text-6xl md:text-8xl 
            font-bold font-mono 
            text-[var(--accent-text)]
          "
          style={{ animationDelay: `${index * 100}ms`,
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          {digit}
        </div>
      ))}
    </div>
  );
};

export default NumberDisplay;