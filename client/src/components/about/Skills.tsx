import TechIcon, { TechIconName } from './TechIcon';

const frontend: TechIconName[] = [
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind',
  'React',
  'Redux',
  'Vue',
  'Solid',
  'Svelte',
];

const backend: TechIconName[] = ['Node.js', 'Express', 'Python', 'Pandas'];

function Skills() {
  return (
    <div className="flex flex-col rounded-3xl bg-gray-800 p-5">
      <div>
        <h2 className="text-lg text-white">Frontend</h2>
        <div className="flex">
          {frontend.map(name => {
            return <TechIcon name={name} key={name} />;
          })}
        </div>
      </div>
      <div>
        <h2 className="text-lg text-white">Backend</h2>
        <div className="flex">
          {backend.map(name => {
            return <TechIcon name={name} key={name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
