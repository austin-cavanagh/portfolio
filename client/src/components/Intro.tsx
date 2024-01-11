import TypingEffect from './TypingEffect';

const Intro = () => {
  return (
    <div className="temp-container">
      <TypingEffect
        textOne="Hi, I'm "
        textTwo="Austin"
        textThree="Welcome to my "
        textFour="Portfolio"
        typingSpeed={80}
      />
    </div>
  );
};

export default Intro;
