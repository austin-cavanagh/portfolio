import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from '../components/user-interface/Navbar';
import BottomBar from '../components/user-interface/Footer';

import About from './About';

import ReactQueryRewind from '../components/projects/ReactQueryRewing';
import B2CEcommerceWebsite from '../components/projects/B2CEcommerceWebsite';
import SolarSystemPorfolio from '../components/projects/SolarSystemPortfolio';

// import Contact from './Contact';

type UserInterfaceProps = {};

function UserInterface({}: UserInterfaceProps) {
  const { currentPlanet, isTransitioning } = useSelector(
    (state: RootState) => state.app,
  );

  const exitVariants = {
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.5 },
    },
  };

  const renderContent = () => {
    switch (currentPlanet) {
      case 'Earth':
        return (
          <motion.div
            key="earth"
            initial="hidden"
            exit="exit"
            variants={exitVariants}
            className="pointer-events-auto flex flex-1 items-center justify-center overflow-auto"
          >
            <About />
          </motion.div>
        );
      case 'Saturn':
        return (
          <div className="pointer-events-auto flex flex-1 items-center justify-center overflow-auto">
            <ReactQueryRewind />;
          </div>
        );
      case 'Jupiter':
        return (
          <div className="pointer-events-auto flex flex-1 items-center justify-center overflow-auto">
            <B2CEcommerceWebsite />;
          </div>
        );
      case 'Mars':
        return (
          <div className="pointer-events-auto flex flex-1 items-center justify-center overflow-auto">
            <SolarSystemPorfolio />;
          </div>
        );
      // case 'Saturn':
      //   return <Contact />;
      default:
        return <></>;
    }
  };

  return (
    <div className="pointer-events-none absolute left-0 top-0 flex h-screen w-screen flex-col justify-between">
      <Navbar />

      <AnimatePresence>{renderContent()}</AnimatePresence>

      <BottomBar />
    </div>
  );
}

export default UserInterface;
