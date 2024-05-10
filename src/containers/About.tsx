import ProfileCard from '../components/about/ProfileCard';
import Skills from '../components/about/Skills';

function About() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6 sm:flex-row sm:space-x-6 sm:space-y-0">
      <ProfileCard />
      <Skills />
    </div>
  );
}

export default About;
