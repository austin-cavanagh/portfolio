import { useState, useEffect } from 'react';

type TypingEffectProps = {
  textOne: string;
  textTwo: string;
  typingSpeed: number;
  curLine: boolean;
};

const TypingEffect = ({ textOne, textTwo, typingSpeed }: TypingEffectProps) => {
  const [displayedTextOne, setDisplayedTextOne] = useState('');
  const [displayedTextTwo, setDisplayedTextTwo] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let intervalOne: number | undefined;
    let intervalTwo: number | undefined;

    // Start typing textOne after an initial delay
    const typingDelayOne = setTimeout(() => {
      intervalOne = setInterval(() => {
        setDisplayedTextOne(currentText => {
          if (currentText.length < textOne.length) {
            return textOne.slice(0, currentText.length + 1);
          } else {
            clearInterval(intervalOne); // Stop typing textOne
            // Start typing textTwo
            intervalTwo = setInterval(() => {
              setDisplayedTextTwo(currentText => {
                if (currentText.length < textTwo.length) {
                  return textTwo.slice(0, currentText.length + 1);
                } else {
                  clearInterval(intervalTwo); // Stop typing textTwo
                  setIsTyping(false); // Typing finished
                  return currentText;
                }
              });
            }, typingSpeed);
            return currentText;
          }
        });
      }, typingSpeed);
    }, 2000); // 2-second delay

    return () => {
      clearTimeout(typingDelayOne);
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
    };
  }, [textOne, textTwo, typingSpeed]);

  return (
    <>
      <div className="typing-effect">
        <span className="textOne">{displayedTextOne}</span>
        <span className="textTwo">{displayedTextTwo}</span>
        <span
          className={`typing-cursor ${isTyping ? 'static' : 'blinking'}`}
        ></span>
      </div>
    </>
  );
};

export default TypingEffect;
