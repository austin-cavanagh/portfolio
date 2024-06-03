import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { bullflowBadges } from '../../data/technollogyBadges';
import ImageSlider from './ImageSlider';
import { bullflowScreenshots } from '../../data/projectScreenshots';

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

export default function Bullflow() {
  const { isTransitioning } = useSelector((state: RootState) => state.app);

  return (
    <motion.section
      initial="hidden"
      animate={!isTransitioning ? 'visible' : 'hidden'}
      variants={projectCardVariant}
      className="flex h-auto w-full flex-col items-center justify-start p-6 sm:justify-center"
    >
      <div className="flex h-auto max-w-[1250px] rounded-3xl bg-gray-900 bg-opacity-80 p-7 sm:p-12">
        <div className="flex h-full flex-col justify-center font-poppins">
          {/* Title Section */}
          <div className="mb-2 w-full justify-between sm:mb-4 sm:flex">
            <h2 className="text-[18pt] font-semibold text-[#00bfff] md:text-[28pt]">
              Bullflow.io
            </h2>

            <div className="hidden items-center justify-center space-x-6 sm:flex">
              {/* Live Demo Link */}
              <a
                href="https://bullflow.io/"
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

          {/* Technologies Section */}
          <div className="mb-4 flex flex-wrap sm:mb-6">
            {bullflowBadges.map((badge, index) => (
              <img
                key={index}
                src={badge.src}
                alt={badge.alt}
                className="p-1"
              />
            ))}
          </div>

          {/* Description & Images Section - PC */}
          <div className="hidden h-full items-center justify-center font-poppins lg:flex">
            {/* Description Section */}
            <div
              className="mr-10 flex min-w-0 flex-1"
              style={{ flexBasis: '45%' }}
            >
              {' '}
              {/* Adjust the flex-basis as needed */}
              <div className="space-y-3 text-left text-base text-white xl:text-lg">
                <p>
                  Developer for{' '}
                  <span className="font-bold text-[#00bfff]">Bullflow.io</span>,
                  a platform that provides retail investors with real-time
                  insights into{' '}
                  <span className="font-bold text-[#00bfff]">
                    options order flow
                  </span>{' '}
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Real-Time Stock Data:
                    </span>{' '}
                    Leveraged APIs to retrieve real-time stock market data and
                    options order flow during market hours
                  </li>
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Advanced Trade Detection:
                    </span>{' '}
                    Developed algorithms to detect trade types (blocks, splits,
                    sweeps), providing insights into institutional activity
                  </li>
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Comprehensive Testing:
                    </span>{' '}
                    Developed Jest and Cypress testing suites for unit,
                    integration, and system tests, achieving 80% coverage
                  </li>
                </ul>
              </div>
            </div>

            {/* Images Section */}
            <div
              className="h-100% my-auto h-[350px] w-full"
              style={{ flexBasis: '55%' }}
            >
              <ImageSlider screenshots={bullflowScreenshots} />
            </div>
          </div>

          {/* Description & Images Section - Mobile*/}
          <div className="h-full justify-center font-poppins lg:hidden">
            {/* Images Section */}
            <div className="my-auto mb-4 h-[200px] w-full">
              <ImageSlider screenshots={bullflowScreenshots} />
            </div>

            {/* Description Section */}
            <div className="mr-10 flex w-full min-w-0 flex-1">
              {' '}
              <div className="space-y-3 text-left text-base text-white sm:text-lg">
                <p>
                  Developer for{' '}
                  <span className="font-bold text-[#00bfff]">Bullflow.io</span>,
                  a platform that provides retail investors with real-time
                  insights into{' '}
                  <span className="font-bold text-[#00bfff]">
                    options order flow
                  </span>{' '}
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Real-Time Stock Data:
                    </span>{' '}
                    Leveraged APIs to retrieve real-time stock market data and
                    options order flow during market hours
                  </li>
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Advanced Trade Detection:
                    </span>{' '}
                    Developed algorithms to detect trade types (blocks, splits,
                    sweeps), providing insights into institutional activity
                  </li>
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Comprehensive Testing:
                    </span>{' '}
                    Developed Jest and Cypress testing suites for unit,
                    integration, and system tests, achieving 80% coverage
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center space-x-6">
              {/* Live Demo Link */}
              <a
                href="https://bullflow.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white"
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
        </div>
      </div>
    </motion.section>
  );
}
