import ImagesCarousel from './ImagesCarousel';

import screenshotOne from '../../assets/project1/screenshotOne.png';
import screenshotTwo from '../../assets/project1/screenshotTwo.png';
import screenshotThree from '../../assets/project1/screenshotThree.png';
import screenshotFour from '../../assets/project1/screenshotFour.png';
import screenshotFive from '../../assets/project1/screenshotFive.png';

const images = [
  screenshotOne,
  screenshotTwo,
  screenshotThree,
  screenshotFour,
  screenshotFive,
];

export default function ProjectTwo() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center px-4 py-5 sm:p-6">
      {/* <h1 className="text-4xl font-bold">Projects</h1> */}
      <div className="flex rounded-3xl bg-gray-800 bg-opacity-85 p-14">
        <div className="mr-10 flex h-full w-96 flex-col justify-center space-y-6 font-poppins">
          <h2 className="text-3xl font-semibold text-[#00bfff]">
            B2C eCommerce Website
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
              href="https://github.com/your-username/your-repo"
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
              href="https://example.com/live-demo"
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
      </div>
    </section>
  );
}
