
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import NumberDisplay from './components/NumberDisplay';
import GenerateButton from './components/GenerateButton';
import ThemeSwitcher, { Theme } from './components/ThemeSwitcher';

// Main App Component
const App: React.FC = () => {
  const [currentNumber, setCurrentNumber] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [theme, setTheme] = useState<Theme>('cyber-cyan');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const clickSound = useMemo(() => {
    if (typeof window !== 'undefined' && typeof Audio !== 'undefined') {
      return new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3');
    }
    return null;
  }, []);

  const playSound = useCallback(() => {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(error => console.error("Error playing sound:", error));
    }
  }, [clickSound]);

  const generateRandomNumber = (digits: number): string => {
    const max = Math.pow(10, digits);
    const num = Math.floor(Math.random() * max);
    return num.toString().padStart(digits, '0');
  };

  const triggerGeneration = useCallback((numberGenerator: () => string) => {
    if (isGenerating) return;
    playSound();
    setIsGenerating(true);
    setTimeout(() => {
      const result = numberGenerator();
      setCurrentNumber(result);
      setAnimationKey(prevKey => prevKey + 1);
      setIsGenerating(false);
    }, 400);
  }, [playSound, isGenerating]);

  const handleGenerate = (digits: 2 | 3 | 4) => triggerGeneration(() => generateRandomNumber(digits));

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col items-center justify-center p-4 font-sans antialiased">
      <div className="w-full max-w-md mx-auto bg-[var(--bg-interactive)] backdrop-blur-sm rounded-2xl shadow-2xl shadow-[var(--shadow-color)] border border-[var(--border-primary)]">
        <header className="p-6 border-b border-[var(--border-primary)]">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
            Generador de Quiniela
          </h1>
          <p className="text-center text-[var(--text-secondary)] mt-2">
            Elige la cantidad de cifras y obtén tu número.
          </p>
        </header>

        <main className="p-6 md:p-8">
          <div className="h-48 flex items-center justify-center bg-[var(--bg-tertiary)] rounded-xl border border-[var(--border-primary)] mb-6 overflow-hidden p-4">
            <NumberDisplay number={currentNumber} key={animationKey} />
          </div>
          
          <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 animate-pop-in">
                <GenerateButton onClick={() => handleGenerate(2)} disabled={isGenerating}>2 Cifras</GenerateButton>
                <GenerateButton onClick={() => handleGenerate(3)} disabled={isGenerating}>3 Cifras</GenerateButton>
                <GenerateButton onClick={() => handleGenerate(4)} disabled={isGenerating}>4 Cifras</GenerateButton>
              </div>
          </div>
        </main>
      </div>
       <footer className="w-full max-w-md mx-auto text-center mt-8 text-[var(--text-secondary)] text-sm">
        <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
        <p className="mt-4">¡Mucha suerte!</p>
      </footer>
    </div>
  );
};

export default App;
