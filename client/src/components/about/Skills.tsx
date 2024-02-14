import TechIcon, { TechIconName } from './TechIcon';

const frontend: TechIconName[] = [
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind',
  'React',
  'Redux',
  'Three.js',
  //   'Vue',
  //   'Solid',
  //   'Svelte',
];

const backend: TechIconName[] = ['Node.js', 'Express.js', 'Python', 'GraphQL'];

const databases: TechIconName[] = [
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Mongoose',
];

const devOps: TechIconName[] = ['Docker', 'Kubernetes', 'AWS', 'Google Cloud'];

const misc: TechIconName[] = ['Next.js', 'Jest', 'Cypress', 'Webpack'];

function Skills() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4 rounded-3xl bg-gray-800 bg-opacity-85 p-5">
        <h2 className="text-xl text-white">Frontend</h2>
        <div className="flex space-x-4">
          {frontend.map(name => {
            return <TechIcon name={name} key={name} />;
          })}
        </div>
      </div>

      <div className="flex space-x-8">
        <div className="flex flex-col space-y-4 rounded-3xl bg-gray-800 bg-opacity-85 p-5">
          <h2 className="text-xl text-white">Backend</h2>
          <div className="flex space-x-4">
            {backend.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>

        <div className="flex flex-col space-y-4 rounded-3xl bg-gray-800 bg-opacity-85 p-5">
          <h2 className="text-xl text-white">Databases</h2>
          <div className="flex space-x-4">
            {databases.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>
      </div>

      <div className="flex space-x-8">
        <div className="flex flex-col space-y-4 rounded-3xl bg-gray-800 bg-opacity-85 p-5">
          <h2 className="text-xl text-white">DevOps</h2>
          <div className="flex space-x-4">
            {devOps.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>

        <div className="flex flex-col space-y-4 rounded-3xl bg-gray-800 bg-opacity-85 p-5">
          <h2 className="text-xl text-white">Misc</h2>
          <div className="flex space-x-4">
            {misc.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
