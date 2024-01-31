import { useState } from 'react';
import ScrollDownAnimation from '../components/ScrollDownAnimation';
import TypingAnimation from '../components/TypingAnimation';

function Intro() {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const handleTypingComplete = () => {
    setShowScroll(true);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
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
