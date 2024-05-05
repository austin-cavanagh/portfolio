import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from '../components/user-interface/Navbar';
import BottomBar from '../components/user-interface/Footer';
import About from './About';
import ProjectOne from '../components/projects/ProjectOne';
// import Contact from './Contact';
// import ProjectOne from '../components/projects/ProjectOne';
// import ProjectTwo from '../components/projects/ProjectTwo';
// import ProjectThree from '../components/projects/ProjectsThree';

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
            <ProjectOne />;
          </div>
        );
      // case 'Venus':
      //   return (
      //     <div className="pointer-events-auto flex flex-1 items-center justify-center overflow-auto">
      //       <ProjectTwo />;
      //     </div>
      //   );
      // case 'Jupiter':
      //   return (
      //     <div className="pointer-events-auto flex flex-1 items-center justify-center overflow-auto">
      //       <ProjectThree />;
      //     </div>
      //   );
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
