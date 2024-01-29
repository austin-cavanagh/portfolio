import TypingEffect from '../components/TypingEffect';

function Intro() {
  return (
    <div className="flex flex-col justify-center items-center bg-black h-full w-full">
      <TypingEffect
        textOne="Hi, I'm "
        textTwo="Austin"
        textThree="Welcome to my "
        textFour="Portfolio"
        typingSpeed={80}
      />
    </div>
  );
}

export default Intro;
