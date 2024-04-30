import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from '../components/user-interface/Navbar';

type UserInterfaceProps = {};

function UserInterface({}: UserInterfaceProps) {
  const { currentPlanet, showContent } = useSelector(
    (state: RootState) => state.app,
  );

  const renderContent = () => {
    switch (currentPlanet) {
      case 'Earth':
        return <About />;
      case 'Moon':
        return <Projects />;
      case 'Mars':
        return <Projects />;
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
      </div>{' '}
    </div>
  );
}

export default UserInterface;
