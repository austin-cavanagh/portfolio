import ProfileCard from '../components/about/ProfileCard';
import Skills from '../components/about/Skills';

function About() {
  return (
    <div className="flex items-center justify-center space-x-6">
      <ProfileCard />
      <Skills />
    </div>
  );
}

export default About;
