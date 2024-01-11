import TypingEffect from './TypingEffect';

const Intro = () => {
  return (
    <div className="typing-container">
      <TypingEffect text="Hi, my name is Austin" typingSpeed={140} />
    </div>
  );
};

export default Intro;
