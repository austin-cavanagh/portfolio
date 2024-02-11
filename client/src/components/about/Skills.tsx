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
      <div className="flex flex-col rounded-3xl bg-gray-800 p-5">
        <h2 className="text-lg text-white">Frontend</h2>
        <div className="flex">
          {frontend.map(name => {
            return <TechIcon name={name} key={name} />;
          })}
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col rounded-3xl bg-gray-800 p-5">
          <h2 className="text-lg text-white">Backend</h2>
          <div className="flex">
            {backend.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>

        <div className="flex flex-col rounded-3xl bg-gray-800 p-5">
          <h2 className="text-lg text-white">Databases</h2>
          <div className="flex">
            {databases.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col rounded-3xl bg-gray-800 p-5">
          <h2 className="text-lg text-white">DevOps</h2>
          <div className="flex">
            {devOps.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>

        <div className="flex flex-col rounded-3xl bg-gray-800 p-5">
          <h2 className="text-lg text-white">Misc</h2>
          <div className="flex">
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
