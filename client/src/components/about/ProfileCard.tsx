import { useSelector } from 'react-redux';
import portrait from '../../assets/portrait.jpeg';
import { motion } from 'framer-motion';
import { RootState } from '../../state/store';

function ProfileCard() {
  const { isTransitioning } = useSelector((state: RootState) => state.app);

  const profileCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        delay: 0.0,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={!isTransitioning ? 'visible' : 'hidden'}
      variants={profileCardVariants}
      className="flex flex-col items-center space-y-3 rounded-3xl bg-gray-900 bg-opacity-80 p-5 text-white"
    >
      <img
        src={portrait}
        alt="Austin Cavanagh"
        className="h-56 w-56 rounded-full border-2 border-blue-500"
      />
      <h1 className="text-2xl font-bold">Austin Cavanagh</h1>
      <h2 className="text-xl">Software Engineer</h2>
      <h2 className="mt-5 text-xl">San Francisco, CA</h2>
      <p className="max-w-md text-left text-lg">
        Briefly introduce yourself here. Mention your{' '}
        <span className="font-bold text-[#00bfff]">
          professional background
        </span>
        , what you're{' '}
        <span className="font-bold text-[#00bfff]">passionate about</span>, and
        a personal note. Keep it engaging and concise. Not too long and not too
        short, just the{' '}
        <span className="font-bold text-[#00bfff]">perfect amount</span>.
      </p>
    </motion.div>
  );
}

export default ProfileCard;
