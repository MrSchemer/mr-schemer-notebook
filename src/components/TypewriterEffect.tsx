
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  text, 
  delay = 100 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
    
    if (currentIndex >= text.length) {
      setIsTyping(false);
    }
  }, [currentIndex, delay, isTyping, text]);

  return (
    <div className="inline-block">
      <span>{displayText}</span>
      {isTyping && <span className="animate-type-cursor">|</span>}
    </div>
  );
};

export default TypewriterEffect;
