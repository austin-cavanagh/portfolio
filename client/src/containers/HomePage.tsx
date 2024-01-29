import Intro from './Intro';
import AboutMe from './AboutMe';

function HomePage() {
  return (
    <main>
      <section className="h-screen w-full">
        <Intro />
      </section>
      <section className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <AboutMe />
      </section>
    </main>
  );
}

export default HomePage;
