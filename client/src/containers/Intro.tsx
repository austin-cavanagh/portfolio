import { useState } from 'react';
import ScrollDownAnimation from '../components/ScrollDownAnimation';
import TypingAnimation from '../components/TypingAnimation';

function Intro() {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const handleTypingComplete = () => {
    setShowScroll(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <TypingAnimation
        textOne="Hi, I'm "
        textTwo="Austin"
        textThree="Welcome to my "
        textFour="Portfolio"
        typingSpeed={70}
        onComplete={handleTypingComplete}
      />
      {showScroll && <ScrollDownAnimation />}
    </div>
  );
}

export default Intro;
