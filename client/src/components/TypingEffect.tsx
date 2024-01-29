import { useState, useEffect } from 'react';

type TypingEffectProps = {
  textOne: string;
  textTwo: string;
  textThree: string;
  textFour: string;
  typingSpeed: number;
};

const TypingEffect = ({
  textOne,
  textTwo,
  textThree,
  textFour,
  typingSpeed,
}: TypingEffectProps) => {
  const [displayedTextOne, setDisplayedTextOne] = useState('');
  const [displayedTextTwo, setDisplayedTextTwo] = useState('');
  const [displayedTextThree, setDisplayedTextThree] = useState('');
  const [displayedTextFour, setDisplayedTextFour] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentLine, setCurrentLine] = useState(1);

  useEffect(() => {
    let intervalOne: number | undefined;
    let intervalTwo: number | undefined;
    let intervalThree: number | undefined;
    let intervalFour: number | undefined;

    // Typing for textOne
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
                  setIsTyping(false);
                  // Pause before starting textThree
                  setTimeout(() => {
                    setIsTyping(true);
                    setCurrentLine(2);
                    intervalThree = setInterval(() => {
                      setDisplayedTextThree(currentText => {
                        if (currentText.length < textThree.length) {
                          return textThree.slice(0, currentText.length + 1);
                        } else {
                          clearInterval(intervalThree); // Stop typing textThree
                          // Start typing textFour
                          intervalFour = setInterval(() => {
                            setDisplayedTextFour(currentText => {
                              if (currentText.length < textFour.length) {
                                return textFour.slice(
                                  0,
                                  currentText.length + 1
                                );
                              } else {
                                clearInterval(intervalFour); // Stop typing textFour
                                setIsTyping(false); // Typing finished
                                return currentText;
                              }
                            });
                          }, typingSpeed);
                          return currentText;
                        }
                      });
                    }, typingSpeed);
                  }, 1000); // 1.2-second pause
                  return currentText;
                }
              });
            }, typingSpeed);
            return currentText;
          }
        });
      }, typingSpeed);
    }, 1000); // Initial delay before starting textOne

    return () => {
      clearTimeout(typingDelayOne);
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
      clearInterval(intervalThree);
      clearInterval(intervalFour);
    };
  }, [textOne, textTwo, textThree, textFour, typingSpeed]);

  return (
    <>
      <div className="text-6xl">
        <div>
          <span className="text-white text-opacity-85 contrast-90">
            {displayedTextOne}
          </span>
          <span className="text-blue-600 font-semibold">
            {displayedTextTwo}
          </span>
          {currentLine === 1 && (
            <span
              className={`inline-block w-1 h-full bg-blue-600 ml-1 text-transparent ${
                isTyping ? '' : 'animate-blink'
              }`}
            >
              I
            </span>
          )}
        </div>
        {currentLine >= 2 && (
          <div>
            <span className="text-white text-opacity-85 contrast-90">
              {displayedTextThree}
            </span>
            <span className="text-blue-600 font-semibold">
              {displayedTextFour}
            </span>
            {currentLine === 2 && (
              <span
                className={`inline-block w-1 h-full bg-blue-600 ml-1 text-transparent ${
                  isTyping ? '' : 'blink'
                }`}
              >
                I
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TypingEffect;
