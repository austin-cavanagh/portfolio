import Intro from './Intro';
import AboutMe from '../sections/AboutMe';

function HomePage() {
  return (
    <main>
      {/* <section className="h-screen w-screen bg-black">
        <Intro />
      </section> */}
      {/* <section className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <AboutMe />
      </section> */}
      <section className="h-screen w-screen flex flex-col justify-center items-center">
        <AboutMe />
      </section>
    </main>
  );
}

export default HomePage;
