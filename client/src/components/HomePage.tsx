import Intro from './Intro';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

const HomePage = () => {
  return (
    <div className="main-page">
      <Intro />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default HomePage;
