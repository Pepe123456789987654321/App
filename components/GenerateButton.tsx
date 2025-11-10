import React from 'react';

interface GenerateButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full py-3 px-2 md:px-4 rounded-lg font-semibold text-base md:text-lg
        bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)]
        text-white
        transition-all duration-300 ease-in-out
        shadow-lg shadow-[var(--shadow-color)]
        transform
        hover:shadow-xl hover:shadow-[var(--shadow-hover-color)]
        hover:-translate-y-1
        focus:outline-none focus:ring-4 focus:ring-[var(--ring-color)] focus:ring-opacity-50
        active:translate-y-0 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg
      `}
    >
      {children}
    </button>
  );
};

export default GenerateButton;