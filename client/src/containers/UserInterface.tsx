import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

import Navbar from '../components/user-interface/Navbar';
import BottomBar from '../components/user-interface/Footer';
import About from './About';
// import Contact from './Contact';
// import ProjectOne from '../components/projects/ProjectOne';
// import ProjectTwo from '../components/projects/ProjectTwo';
// import ProjectThree from '../components/projects/ProjectsThree';

import { motion } from 'framer-motion';

type UserInterfaceProps = {};

function UserInterface({}: UserInterfaceProps) {
  const { currentPlanet } = useSelector((state: RootState) => state.app);

  const renderContent = () => {
    const { isTransitioning } = useSelector((state: RootState) => state.app); // Assuming this flag exists and is managed appropriately

    const contentVariants = {
      hidden: { opacity: 0, y: 50 }, // starts 50px below the final position
      visible: { opacity: 1, y: 0 },
    };

    switch (currentPlanet) {
      case 'Earth':
        return (
          // <div className="pointer-events-auto flex flex-1 items-center justify-center overflow-auto">
          //   <About />;
          // </div>

          <motion.div
            className="pointer-events-auto flex flex-1 items-center justify-center overflow-auto"
            initial="hidden"
            animate={!isTransitioning ? 'visible' : 'hidden'}
            variants={contentVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <About />
          </motion.div>
        );
      // case 'Mars':
      //   return (
      //     <div className="pointer-events-auto flex flex-1 items-center justify-center overflow-auto">
      //       <ProjectOne />;
      //     </div>
      //   );
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
        return (
          <div className="pointer-events-none flex flex-1 overflow-auto"></div>
        );
    }
  };

  // pointer-events-none

  return (
    <div className="pointer-events-none absolute left-0 top-0 flex h-screen w-screen flex-col">
      <Navbar />

      {renderContent()}

      <BottomBar />
    </div>
  );
}

export default UserInterface;
