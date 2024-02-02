import ImagesCarousel from '../components/ImagesCarousel';

import screenshotOne from '../assets/project1/screenshotOne.png';
import screenshotTwo from '../assets/project1/screenshotTwo.png';
import screenshotThree from '../assets/project1/screenshotThree.png';
import screenshotFour from '../assets/project1/screenshotFour.png';
import screenshotFive from '../assets/project1/screenshotFive.png';

const images = [
  screenshotOne,
  screenshotTwo,
  screenshotThree,
  screenshotFour,
  screenshotFive,
];

function Projects() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center px-4 py-5 sm:p-6">
      {/* <h1 className="text-4xl font-bold">Projects</h1> */}

      <div className="flex">
        <div className="font-roboto mr-5 flex h-full w-96 flex-col justify-center space-y-2">
          <h2 className="text-3xl font-semibold">Project Name</h2>
          <p className="mt-0">
            Description of my project and many other words that I should have in
            here to take up some space so I can see what it will look like.
            Thought I should make it slightly longer.
          </p>
          <div className="space-x-3">
            <span className="rounded border-2 border-blue-600 p-1">React</span>
            <span className="rounded border-2 border-blue-600 p-1">
              Tailwind
            </span>
            <span className="rounded border-2 border-blue-600 p-1">Redux</span>
            <span className="rounded border-2 border-blue-600 p-1">
              Webpack
            </span>
          </div>
        </div>
        <div className="w-500 bg-black p-1">
          <ImagesCarousel images={images} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
