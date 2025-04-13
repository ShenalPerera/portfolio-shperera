
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsPaused(true);
        const timeout = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, delayBetween);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [displayText, currentIndex, isTyping, isPaused, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <div className={`inline-flex ${className}`}>
      <span>{displayText}</span>
      <span className={`ml-1  h-[1.25em] w-[2px] bg-primary ${isPaused ? 'animate-pulse' : 'animate-blink'}`}></span>
    </div>
  );
};

export default TypewriterText;
