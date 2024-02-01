import Intro from './Intro';
import AboutMe from './AboutMe';
import Projects from './Projects';

function HomePage() {
  return (
    <main>
      {/* <section className="h-screen w-screen bg-black">
        <Intro />
      </section> */}
      {/* <section className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <AboutMe />
      </section> */}
      {/* <section className="h-screen w-screen flex flex-col justify-center items-center">
        <AboutMe />
      </section> */}
      <section className="flex h-screen w-screen flex-col items-center justify-center">
        <Projects />
      </section>
    </main>
  );
}

export default HomePage;
