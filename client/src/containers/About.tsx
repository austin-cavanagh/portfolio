import LeftSide from '../components/about/LeftSide';
import Skills from '../components/about/Skills';

function About() {
  return (
    <div className="flex items-center justify-center space-x-6">
      <LeftSide />
      <Skills />
    </div>
  );
}

export default About;
