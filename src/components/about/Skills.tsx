import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import {
  backendBadges,
  frontendBadges,
  miscBadges,
} from '../../data/technollogyBadges';

function Skills() {
  const { isTransitioning } = useSelector((state: RootState) => state.app);

  // Animation variants for each skill section
  const frontendVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, type: 'spring', stiffness: 100 },
    },
  };

  const backendVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.4, type: 'spring', stiffness: 100 },
    },
  };

  const miscVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.6, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="space-y-6 xl:space-y-12">
      <motion.div
        className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-7"
        initial="hidden"
        animate={!isTransitioning ? 'visible' : 'hidden'}
        variants={frontendVariants}
      >
        <h2 className="text-xl font-semibold text-white">Frontend</h2>
        <div className="flex max-w-[700px] flex-wrap">
          {frontendBadges.map((badge, index) => (
            <img key={index} src={badge.src} alt={badge.alt} className="p-1" />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-7"
        initial="hidden"
        animate={!isTransitioning ? 'visible' : 'hidden'}
        variants={backendVariants}
      >
        <h2 className="text-xl font-semibold text-white">Backend</h2>
        <div className="flex max-w-[700px] flex-wrap">
          {backendBadges.map((badge, index) => (
            <img key={index} src={badge.src} alt={badge.alt} className="p-1" />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-7"
        initial="hidden"
        animate={!isTransitioning ? 'visible' : 'hidden'}
        variants={miscVariants}
      >
        <h2 className="text-xl font-semibold text-white">Misc</h2>
        <div className="flex max-w-[700px] flex-wrap">
          {miscBadges.map((badge, index) => (
            <img key={index} src={badge.src} alt={badge.alt} className="p-1" />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
