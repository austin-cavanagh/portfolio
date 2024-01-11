import { useState, useEffect } from 'react';

type TypingEffect = {
  text: string;
  typingSpeed: number;
};

const TypingEffect = ({ text, typingSpeed }: TypingEffect) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (text.length > displayedText.length) {
      const nextChar = text.charAt(displayedText.length);
      const delay = nextChar === ' ' ? 0 : typingSpeed;

      setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, delay);
    }

    if (text.length === displayedText.length) {
      setIsTyping(false);
    }
  }, [displayedText, text, typingSpeed]);

  return (
    <div className="typing-effect">
      {displayedText}
      <span
        className={`typing-cursor ${isTyping ? 'static' : 'blinking'}`}
      ></span>
    </div>
  );
};

export default TypingEffect;
