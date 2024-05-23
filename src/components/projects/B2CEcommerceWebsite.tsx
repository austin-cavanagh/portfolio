import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { b2cEcommerceWebsiteBadges } from '../../data/technollogyBadges';
import ImageSlider from './ImageSlider';

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

const b2cScreenshots = [
  {
    src: 'https://portfolio-screenshots-bucket.s3.us-west-1.amazonaws.com/b2c-screenshot-1.png',
    alt: 'Description',
  },
  {
    src: 'https://portfolio-screenshots-bucket.s3.us-west-1.amazonaws.com/b2c-screenshot-2.png',
    alt: 'Description',
  },
  {
    src: 'https://portfolio-screenshots-bucket.s3.us-west-1.amazonaws.com/b2c-screenshot-3.png',
    alt: 'Description',
  },
  {
    src: 'https://portfolio-screenshots-bucket.s3.us-west-1.amazonaws.com/b2c-screenshot-4.png',
    alt: 'Description',
  },
  {
    src: 'https://portfolio-screenshots-bucket.s3.us-west-1.amazonaws.com/b2c-screenshot-5.png',
    alt: 'Description',
  },
];

export default function B2CEcommerceWebsite() {
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
              eCommerce Website
            </h2>

            <div className="hidden items-center justify-center space-x-6 sm:flex">
              {/* GitHub Repository Link */}
              <a
                href="https://github.com/austin-cavanagh/b2c-ecommerce-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00bfff] hover:text-white"
                style={{ position: 'relative', display: 'inline-block' }}
              >
                <svg
                  fill="#00bfff"
                  viewBox="-6 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  style={{ fill: 'currentcolor' }}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>github</title>
                    <path d="M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z"></path>
                  </g>
                </svg>
              </a>

              {/* Live Demo Link */}
              <a
                href="https://craftsbyjules.org/"
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
            {b2cEcommerceWebsiteBadges.map((badge, index) => (
              <img
                key={index}
                src={badge.src}
                alt={badge.alt}
                className="p-1"
              />
            ))}
          </div>

          {/* Description & Images Section - PC */}
          <div className="hidden h-full justify-center font-poppins lg:flex">
            {/* Description Section */}
            <div
              className="mr-10 flex min-w-0 flex-1"
              style={{ flexBasis: '45%' }}
            >
              {' '}
              {/* Adjust the flex-basis as needed */}
              <div className="space-y-3 text-left text-lg text-white">
                <p>
                  Developed an{' '}
                  <span className="font-bold text-[#00bfff]">
                    eCommerce website
                  </span>{' '}
                  to showcase and sell{' '}
                  <span className="font-bold text-[#00bfff]">
                    custom crafts{' '}
                  </span>
                  for a small business
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Stripe & PayPal:
                    </span>{' '}
                    Supports checkout with Stripe and PayPal to ensure secure
                    and convenient transactions
                  </li>
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Secure Authentication:
                    </span>{' '}
                    Integrates NextAuth for logins using OAuth with Google,
                    Facebook, or traditional email/password methods
                  </li>
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Robust AWS Infrastructure:
                    </span>{' '}
                    Utilizes AWS services such as EC2, ECR, RDS, SES, and S3 for
                    scalable hosting and reliable data management
                  </li>
                </ul>
              </div>
            </div>

            {/* Images Section */}
            <div
              className="h-100% my-auto h-[350px] w-full"
              style={{ flexBasis: '55%' }}
            >
              <ImageSlider screenshots={b2cScreenshots} />
            </div>
            {/* <div className="h-100% w-full bg-red-500"></div> */}
          </div>

          {/* Description & Images Section - Mobile*/}
          <div className="h-full justify-center font-poppins lg:hidden">
            {/* Images Section */}
            <div
              className="my-auto mb-4 h-[200px] w-full"
              // style={{ flexBasis: '60%' }}
            >
              <ImageSlider screenshots={b2cScreenshots} />
            </div>

            {/* Description Section */}
            <div
              className="mr-10 flex w-full min-w-0 flex-1"
              // style={{ flexBasis: '40%' }}
            >
              {' '}
              <div className="space-y-3 text-left text-base text-white sm:text-lg">
                <p>
                  Developed an{' '}
                  <span className="font-bold text-[#00bfff]">
                    eCommerce website
                  </span>{' '}
                  to showcase and sell{' '}
                  <span className="font-bold text-[#00bfff]">
                    custom crafts{' '}
                  </span>
                  for a small business
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Stripe & PayPal:
                    </span>{' '}
                    Supports checkout with Stripe and PayPal to ensure secure
                    and convenient transactions
                  </li>
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Secure Authentication:
                    </span>{' '}
                    Integrates NextAuth for logins using OAuth with Google,
                    Facebook, or traditional email/password methods
                  </li>
                  <li className="pl-3">
                    <span className="font-bold text-[#00bfff]">
                      Robust AWS Infrastructure:
                    </span>{' '}
                    Utilizes AWS services such as EC2, ECR, RDS, SES, and S3 for
                    scalable hosting and reliable data management
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center space-x-6">
              {/* GitHub Repository Link */}
              <a
                href="https://github.com/austin-cavanagh/b2c-ecommerce-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white"
                style={{ position: 'relative', display: 'inline-block' }}
              >
                <svg
                  fill="#00bfff"
                  viewBox="-6 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  style={{ fill: 'currentcolor' }}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>github</title>
                    <path d="M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z"></path>
                  </g>
                </svg>
              </a>

              {/* Live Demo Link */}
              <a
                href="https://craftsbyjules.org/"
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
