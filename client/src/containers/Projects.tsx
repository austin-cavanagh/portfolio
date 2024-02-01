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
    <section className="flex h-full w-full flex-col items-center justify-center bg-black px-4 py-5 sm:p-6">
      {/* <h1 className="text-4xl font-bold">Projects</h1> */}
      <ImagesCarousel images={images} />
    </section>
  );
}

export default Projects;
