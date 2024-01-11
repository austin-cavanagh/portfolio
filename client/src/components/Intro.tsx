import { useState, useEffect } from 'react';

import TypingEffect from './TypingEffect';

const Intro = () => {
  const [curLine, setCurLine] = useState('one');

  return (
    <div className="temp-container">
      <div className="typing-container">
        <TypingEffect
          textOne="Hi, I'm "
          textTwo="Austin"
          typingSpeed={120}
          curLine={curLine === 'one' ? true : false}
        />
        <TypingEffect
          textOne="Welcome to my "
          textTwo="Portfolio"
          typingSpeed={120}
          curLine={curLine === 'one' ? true : false}
        />
      </div>
    </div>
  );
};

export default Intro;
