import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from '../components/user-interface/Navbar';
import BottomBar from '../components/user-interface/Footer';
import ProjectOne from '../components/projects/ProjectOne';
import ProjectTwo from '../components/projects/ProjectTwo';

type UserInterfaceProps = {};

function UserInterface({}: UserInterfaceProps) {
  const { currentPlanet, showContent } = useSelector(
    (state: RootState) => state.app,
  );

  const renderContent = () => {
    switch (currentPlanet) {
      case 'Earth':
        return <About />;
      case 'Mars':
        return <ProjectOne />;
      case 'Venus':
        return <ProjectTwo />;
      case 'Jupiter':
        return <Projects />;
      case 'Saturn':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`absolute left-0 top-0 flex w-screen flex-col ${showContent && 'h-screen'}`}
    >
      <Navbar />
      <div className="flex flex-1 items-center justify-center overflow-auto">
        {renderContent()}
      </div>

      <BottomBar />
    </div>
  );
}

export default UserInterface;
