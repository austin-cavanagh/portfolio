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
      className="flex flex-col items-center space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-5 text-white"
    >
      <img
        src={portrait}
        alt="Austin Cavanagh"
        className="h-52 w-52 rounded-full border-2 border-[#00bfff]"
      />

      <div className="items-cetner mx-auto flex flex-col justify-center space-y-1">
        <h1 className="text-2xl font-bold">Austin Cavanagh</h1>
        {/* <h2 className="text-center text-xl">Full Stack Developer</h2> */}
        <h2 className="text-center text-xl">San Francisco, CA</h2>
      </div>

      <div className="max-w-md space-y-4 text-left text-lg">
        <p>
          Hello, I'm Austin, a{' '}
          <span className="font-bold text-[#00bfff]">Full Stack Developer</span>{' '}
          with a background in{' '}
          <span className="font-bold text-[#00bfff]">
            operations consulting
          </span>{' '}
          for the aviation industry.
        </p>
        <p>
          I enjoy the unique challenges of{' '}
          <span className="font-bold text-[#00bfff]">frontend</span> and{' '}
          <span className="font-bold text-[#00bfff]">backend development</span>{' '}
          , and am eager to learn new skills and knowledge to enhance my
          professional capabilities.
        </p>
        <p>
          Explore my <span className="font-bold text-[#00bfff]">portfolio</span>{' '}
          to see my work and achievements, and connect with me on LinkedIn or
          via email.
        </p>
      </div>
    </motion.div>
  );
}

export default ProfileCard;
