import ProfileCard from '../components/about/ProfileCard';
import Skills from '../components/about/Skills';

function About() {
  return (
    <div className="mt-0 flex flex-col items-center justify-center space-y-6 p-6 sm:mt-80 sm:space-x-6 lg:mt-0 lg:flex-row lg:space-y-0">
      <ProfileCard />
      <Skills />
    </div>
  );
}

export default About;
