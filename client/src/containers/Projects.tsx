import Project from '../components/projects/Project';

function Projects() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center px-4 py-5 sm:p-6">
      {/* <h1 className="text-4xl font-bold">Projects</h1> */}
      <Project />
    </section>
  );
}

export default Projects;
