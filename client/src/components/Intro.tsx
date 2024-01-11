// import { useState } from 'react';
import TypingEffect from './TypingEffect';

const Intro = () => {
  //   const [currentLine, setCurrentLine] = useState(1);

  //   const handleNewLine = () => {
  //     setCurrentLine(currentLine + 1);
  //     console.log(currentLine);
  //   };

  return (
    <>
      <div className="temp-container">
        <TypingEffect
          textOne="Hi, I'm "
          textTwo="Austin"
          textThree="Welcome to my "
          textFour="Portfolio"
          typingSpeed={100}
          // currentLine={currentLine === 1}
          // handleNewLine={handleNewLine}
        />
      </div>
      {/* <div className="typing-container">
        {currentLine >= 2 && (
          <TypingEffect
            textOne="Welcome to my "
            textTwo="Portfolio"
            typingSpeed={120}
            currentLine={currentLine === 2}
            handleNewLine={handleNewLine}
          />
        )}
      </div> */}
    </>
  );
};

export default Intro;
