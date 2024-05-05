import ImagesCarousel from './ImagesCarousel';

import screenshotOne from '../../assets/project1/screenshotOne.png';
import screenshotTwo from '../../assets/project1/screenshotTwo.png';
import screenshotThree from '../../assets/project1/screenshotThree.png';
import screenshotFour from '../../assets/project1/screenshotFour.png';
import screenshotFive from '../../assets/project1/screenshotFive.png';
import { TechnologyBadge } from '../about/Skills';

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
    src: 'https://img.shields.io/badge/CSS3-214ce5?style=for-the-badge&logo=css3&logoColor=white',
    alt: 'CSS3',
  },
  {
    src: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    alt: 'HTML5',
  },
  {
    src: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    alt: 'React',
  },
  // {
  //   src: 'https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D',
  //   alt: 'Vue.js',
  // },
  // {
  //   src: 'https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00',
  //   alt: 'Svelte',
  // },
  {
    src: 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white',
    alt: 'React Router',
  },
  {
    src: 'https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white',
    alt: 'React Query',
  },
  {
    src: 'https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white',
    alt: 'Material UI',
  },
  {
    src: 'https://img.shields.io/badge/Webpack-1b79c1?style=for-the-badge&logo=Webpack&logoColor=white',
    alt: 'Webpack',
  },
  {
    src: 'https://img.shields.io/badge/rollup-EC4A3F?style=for-the-badge&logo=rollup.js&logoColor=white',
    alt: 'Rollup',
  },
  // {
  //   src: 'https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E',
  //   alt: 'Vite',
  // },
  {
    src: 'https://img.shields.io/badge/Chrome_Extension-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white',
    alt: 'Chrome Extension',
  },
  {
    src: 'https://img.shields.io/badge/NPM_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white',
    alt: 'NPM Package',
  },
  {
    src: 'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white',
    alt: 'Jest',
  },
  // {
  //   src: 'https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white',
  //   alt: 'Cypress',
  // },
];

export default function ProjectOne() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center px-4 py-5 sm:p-6">
      {/* <h1 className="text-4xl font-bold">Projects</h1> */}
      {/* <div className="flex rounded-3xl bg-gray-900 bg-opacity-80 p-14">
        <div className="mr-10 flex h-full w-96 flex-col justify-center space-y-6 font-poppins">
          <h2 className="text-3xl font-semibold text-[#00bfff]">
            React Query Rewind
          </h2>
          <p className="text-lg text-[#00bfff]">
            Description of my project and many other words that I should have in
            here to take up some space so I can see what it will look like.
            Thought I should make it slightly longer.
          </p>
          <div className="space-x-2">
            <span className="inline-block rounded border-2 border-[#00bfff] px-2 py-1 text-[#00bfff]">
              React
            </span>
            <span className="inline-block rounded border-2 border-[#00bfff] px-2 py-1 text-[#00bfff]">
              Tailwind
            </span>
            <span className="inline-block rounded border-2 border-[#00bfff] px-2 py-1 text-[#00bfff]">
              Webpack
            </span>
            <span className="inline-block rounded border-2 border-[#00bfff] px-2 py-1 text-[#00bfff]">
              Redux
            </span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/oslabs-beta/react-query-rewind"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00bfff] hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
                style={{ cursor: 'pointer' }}
              >
                <title>GitHub</title>
                <path d="M16.24,22a1,1,0,0,1-1-1V18.4a2.15,2.15,0,0,0-.54-1.66,1,1,0,0,1,.61-1.67C17.75,14.78,20,14,20,9.77a4,4,0,0,0-.67-2.22,2.75,2.75,0,0,1-.41-2.06,3.71,3.71,0,0,0,0-1.41,7.65,7.65,0,0,0-2.09,1.09,1,1,0,0,1-.84.15,10.15,10.15,0,0,0-5.52,0,1,1,0,0,1-.84-.15A7.4,7.4,0,0,0,7.52,4.08a3.52,3.52,0,0,0,0,1.41,2.84,2.84,0,0,1-.43,2.08A4.07,4.07,0,0,0,6.42,9.8c0,3.89,1.88,4.93,4.7,5.29a1,1,0,0,1,.82.66,1,1,0,0,1-.21,1,2.06,2.06,0,0,0-.55,1.56V21a1,1,0,0,1-2,0v-.57a6,6,0,0,1-5.27-2.09,3.9,3.9,0,0,0-1.16-.88,1,1,0,1,1,.5-1.94,4.93,4.93,0,0,1,2,1.36c1,1,2,1.88,3.9,1.52h0a3.89,3.89,0,0,1,.23-1.58c-2.06-.52-5-2-5-7a6,6,0,0,1,1-3.33.85.85,0,0,0,.13-.62,5.69,5.69,0,0,1,.33-3.21,1,1,0,0,1,.63-.57c.34-.1,1.56-.3,3.87,1.2a12.16,12.16,0,0,1,5.69,0c2.31-1.5,3.53-1.31,3.86-1.2a1,1,0,0,1,.63.57,5.71,5.71,0,0,1,.33,3.22.75.75,0,0,0,.11.57,6,6,0,0,1,1,3.34c0,5.07-2.92,6.54-5,7a4.28,4.28,0,0,1,.22,1.67V21A1,1,0,0,1,16.24,22Z" />
              </svg>
            </a>
            <a
              href="https://reactqueryrewind.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00bfff] hover:text-black"
            >
              <svg
                id="icon"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
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
        <div className="w-600 border border-4 border-[#00bfff]">
          <ImagesCarousel images={images} />
        </div>
      </div> */}
      <div className="flex w-[1200px] rounded-3xl bg-gray-900 bg-opacity-80 p-10">
        <div className="flex h-full flex-col justify-center space-y-6 font-poppins">
          {/* <h2 className="text-3xl font-semibold text-[#00bfff]"> */}
          <h2 className="text-3xl font-semibold text-white">
            React Query Rewind
          </h2>

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
                Briefly introduce yourself here. Mention your{' '}
                <span className="font-bold text-[#00bfff]">
                  professional background
                </span>
                , what you're{' '}
                <span className="font-bold text-[#00bfff]">
                  passionate about
                </span>
                , and a personal note. Keep it engaging and concise. Not too
                long and not too short, just the{' '}
                <span className="font-bold text-[#00bfff]">perfect amount</span>
                .
              </p>

              <p className="mt-4 text-left text-lg text-white">
                Briefly introduce yourself here. Mention your{' '}
                <span className="font-bold text-[#00bfff]">
                  professional background
                </span>
                , what you're{' '}
                <span className="font-bold text-[#00bfff]">
                  passionate about
                </span>
                , and a personal note. Keep it engaging and concise. Not too
                long and not too short, just the{' '}
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
    </section>
  );
}
