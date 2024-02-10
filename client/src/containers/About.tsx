import MacTerminal from './MacTerminal';
import portrait from '../assets/portrait.jpeg';

function AboutMe() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-5 sm:p-6">
      <h1 className="mb-6 text-4xl">About Me</h1>

      <img src={portrait} alt="portrait" className="h-32 w-32 rounded-full" />

      <MacTerminal />
    </section>
  );
}

export default AboutMe;
