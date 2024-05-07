import ImagesCarousel from './ImagesCarousel';

import screenshotOne from '../../assets/project1/screenshotOne.png';
import screenshotTwo from '../../assets/project1/screenshotTwo.png';
import screenshotThree from '../../assets/project1/screenshotThree.png';
import screenshotFour from '../../assets/project1/screenshotFour.png';
import screenshotFive from '../../assets/project1/screenshotFive.png';
import { TechnologyBadge } from '../about/Skills';

import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const images = [
  screenshotOne,
  screenshotTwo,
  screenshotThree,
  screenshotFour,
  screenshotFive,
];

const technologyBadges: TechnologyBadge[] = [
  {
    src: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
    alt: 'JavaScript',
  },
  {
    src: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
    alt: 'TypeScript',
  },
  {
    src: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    alt: 'HTML5',
  },
  {
    src: 'https://img.shields.io/badge/CSS3-214ce5?style=for-the-badge&logo=css3&logoColor=white',
    alt: 'CSS3',
  },
  {
    src: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    alt: 'React',
  },
  {
    src: 'https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white',
    alt: 'React Query',
  },
  {
    src: 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white',
    alt: 'React Router',
  },
  {
    src: 'https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D',
    alt: 'Vue.js',
  },
  {
    src: 'https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00',
    alt: 'Svelte',
  },
  {
    src: 'https://img.shields.io/badge/Chrome_Extension-DF3124?style=for-the-badge&logo=Google-chrome&logoColor=white',
    alt: 'Chrome Extension',
  },
  {
    src: 'https://img.shields.io/badge/NPM_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white',
    alt: 'NPM Package',
  },
  {
    src: 'https://img.shields.io/badge/Webpack-1b79c1?style=for-the-badge&logo=Webpack&logoColor=white',
    alt: 'Webpack',
  },
  {
    src: 'https://img.shields.io/badge/rollup-EC4A3F?style=for-the-badge&logo=rollup.js&logoColor=white',
    alt: 'Rollup',
  },
  {
    src: 'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white',
    alt: 'Jest',
  },
  {
    src: 'https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white',
    alt: 'Cypress',
  },
  {
    src: 'https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white',
    alt: 'Material UI',
  },
];

const projectCardVariant = {
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

export default function ReactQueryRewind() {
  const { isTransitioning } = useSelector((state: RootState) => state.app);

  return (
    <motion.section
      initial="hidden"
      animate={!isTransitioning ? 'visible' : 'hidden'}
      variants={projectCardVariant}
      className="flex h-full w-full flex-col items-center justify-center px-4 py-5 sm:p-6"
    >
      <div className="flex w-[1200px] rounded-3xl bg-gray-900 bg-opacity-80 px-14 pb-14 pt-10">
        <div className="flex h-full flex-col justify-center space-y-6 font-poppins">
          <div className="flex w-full justify-between">
            <h2 className="text-[28pt] font-semibold text-[#00bfff]">
              React Query Rewind
            </h2>

            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://reactqueryrewind.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00bfff] hover:text-white"
              >
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 fill-current"
                >
                  <title>npm</title>
                  <rect width="48" height="48" fill="none"></rect>
                  <rect x="21.6" y="19.9" width="2.4" height="4.84" />
                  <path d="M2,15V29.7H14.2v2.5H24V29.7H46V15ZM14.2,27.2H11.8V19.9H9.3v7.3H4.5V17.5h9.7Zm12.3,0H21.6v2.5H16.7V17.5h9.8Zm17.1,0H41.2V19.9H38.7v7.3H36.2V19.9H33.8v7.3H28.9V17.5H43.6Z"></path>
                </svg>
              </a>

              <a
                href="https://reactqueryrewind.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00bfff] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 stroke-current"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"></path>
                  <path d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z"></path>
                  <path d="M21.17 8C18.15 7.34 15.02 7.34 12 8"></path>
                  <path d="M3.95001 6.06006L3.97001 6.12006C4.98001 9.01006 6.53001 11.6901 8.54001 14.0001"></path>
                  <path d="M10.88 21.94C12.94 19.67 14.49 16.99 15.43 14.08L15.46 14"></path>
                </svg>
              </a>

              <a
                href="https://github.com/oslabs-beta/react-query-rewind"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00bfff] hover:text-white"
              >
                <svg
                  fill="#00bfff"
                  viewBox="-6 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <title>github</title>{' '}
                    <path d="M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z"></path>{' '}
                  </g>
                </svg>
              </a>

              <a
                href="https://reactqueryrewind.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00bfff] hover:text-white"
              >
                <svg
                  id="icon"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 fill-current"
                  style={{ cursor: 'pointer' }}
                >
                  <rect
                    height="2"
                    transform="translate(-10.63 14.34) rotate(-45)"
                    width="11.31"
                    x="6.34"
                    y="19"
                  />
                  <path d="M17,30a1,1,0,0,1-.37-.07,1,1,0,0,1-.62-.79l-1-7,2-.28.75,5.27L21,24.52V17a1,1,0,0,1,.29-.71l4.07-4.07A8.94,8.94,0,0,0,28,5.86V4H26.14a8.94,8.94,0,0,0-6.36,2.64l-4.07,4.07A1,1,0,0,1,15,11H7.48L4.87,14.26l5.27.75-.28,2-7-1a1,1,0,0,1-.79-.62,1,1,0,0,1,.15-1l4-5A1,1,0,0,1,7,9h7.59l3.77-3.78A10.92,10.92,0,0,1,26.14,2H28a2,2,0,0,1,2,2V5.86a10.92,10.92,0,0,1-3.22,7.78L23,17.41V25a1,1,0,0,1-.38.78l-5,4A1,1,0,0,1,17,30Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap">
            {technologyBadges.map((badge, index) => (
              <img
                key={index}
                src={badge.src}
                alt={badge.alt}
                className="p-1"
              />
            ))}
          </div>

          <div className="flex">
            <div className="mr-10 w-[500px]">
              <p className="text-left text-lg text-white">
                Briefly introduce yourself here. Mention your
                <span className="font-bold text-[#00bfff]">
                  professional background
                </span>
                , what you're
                <span className="font-bold text-[#00bfff]">
                  passionate about
                </span>
                , and a personal note. Keep it engaging and concise. Not too
                long and not too short, just the
                <span className="font-bold text-[#00bfff]">perfect amount</span>
                .
              </p>

              <p className="mt-4 text-left text-lg text-white">
                Briefly introduce yourself here. Mention your
                <span className="font-bold text-[#00bfff]">
                  professional background
                </span>
                , what you're
                <span className="font-bold text-[#00bfff]">
                  passionate about
                </span>
                , and a personal note. Keep it engaging and concise. Not too
                long and not too short, just the
                <span className="font-bold text-[#00bfff]">perfect amount</span>
                .
              </p>
            </div>

            <div className="border border-4 border-[#00bfff]">
              <ImagesCarousel images={images} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
