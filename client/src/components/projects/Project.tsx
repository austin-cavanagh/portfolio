import ImagesCarousel from './ImagesCarousel';

import screenshotOne from '../../assets/project1/screenshotOne.png';
import screenshotTwo from '../../assets/project1/screenshotTwo.png';
import screenshotThree from '../../assets/project1/screenshotThree.png';
import screenshotFour from '../../assets/project1/screenshotFour.png';
import screenshotFive from '../../assets/project1/screenshotFive.png';

import githubIcon from '../../assets/icons/github-icon.svg';
import rocketIcon from '../../assets/icons/rocket-icon.svg';

const images = [
  screenshotOne,
  screenshotTwo,
  screenshotThree,
  screenshotFour,
  screenshotFive,
];

function Project() {
  return (
    <div className="flex">
      <div className="font-roboto mr-5 flex h-full w-96 flex-col justify-center space-y-4">
        <h2 className="text-3xl font-semibold">React Query Rewind</h2>
        <p className="text-lg">
          Description of my project and many other words that I should have in
          here to take up some space so I can see what it will look like.
          Thought I should make it slightly longer.
        </p>
        <div className="space-x-2">
          <span className="inline-block rounded border-2 border-blue-600 px-2 py-1">
            React
          </span>
          <span className="inline-block rounded border-2 border-blue-600 px-2 py-1">
            Tailwind
          </span>
          <span className="inline-block rounded border-2 border-blue-600 px-2 py-1">
            Webpack
          </span>
          <span className="inline-block rounded border-2 border-blue-600 px-2 py-1">
            Redux
          </span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourgithublink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="h-8 w-8 cursor-pointer"
            />
          </a>
          <a
            href="https://yourlivedemolink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={rocketIcon}
              alt="Live Demo"
              className="h-8 w-8 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="w-500 bg-black p-1">
        <ImagesCarousel images={images} />
      </div>
    </div>
  );
}

export default Project;
