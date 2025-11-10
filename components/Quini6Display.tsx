import React from 'react';

interface Quini6DisplayProps {
  numbers: string[] | null;
}

const Quini6Display: React.FC<Quini6DisplayProps> = ({ numbers }) => {
  const displayItems = numbers || Array(6).fill(null);

  return (
    <div className="grid grid-cols-6 gap-2 md:gap-3 w-full px-2">
      {displayItems.map((num, index) => (
        <div
          key={index}
          className={`
            animate-pop-in
            flex items-center justify-center
            w-12 h-12 md:w-14 md:h-14
            rounded-full
            shadow-inner
            text-2xl md:text-3xl
            font-bold font-mono
            ${
              num
                ? 'bg-[var(--bg-secondary)] text-[var(--accent-text)]'
                : 'bg-slate-700/30 text-[var(--text-placeholder)] animate-pulse'
            }
          `}
           style={{ 
             animationDelay: `${index * 80}ms`,
             ...(!num && { backgroundColor: 'var(--bg-tertiary)'})
           }}
        >
          {num || '--'}
        </div>
      ))}
    </div>
  );
};

export default Quini6Display;