import CSS3Icon from '../../assets/tech-icons/CSS3Icon';
import HTML5Icon from '../../assets/tech-icons/HTML5Icon';
import JavaScriptIcon from '../../assets/tech-icons/JavaScriptIcon';
import ReactIcon from '../../assets/tech-icons/ReactIcon';
import ReduxIcon from '../../assets/tech-icons/ReduxIcon';
import SolidIcon from '../../assets/tech-icons/SolidIcon';
import SvelteIcon from '../../assets/tech-icons/SvelteIcon';
import TailwindIcon from '../../assets/tech-icons/TailwindIcon';
import TypeScriptIcon from '../../assets/tech-icons/TypeScriptIcon';
import VueIcon from '../../assets/tech-icons/VueIcon';

function Skills() {
  return (
    <div className="flex flex-col rounded-3xl bg-gray-800 p-5">
      <div>
        <h2 className="text-lg text-white">Frontend</h2>
        <div className="flex">
          <JavaScriptIcon className="" />
          <TypeScriptIcon className="" />
          <HTML5Icon className="" />
          <CSS3Icon className="" />
          <TailwindIcon className="" />
          <ReactIcon className="" />
          <ReduxIcon className="" />
          <VueIcon className="" />
          <SolidIcon className="" />
          <SvelteIcon className="" />
        </div>
      </div>
      <div>
        <h2 className="text-lg text-white">Backend</h2>
        <div className="flex"></div>
      </div>
      <div>
        <h2 className="text-lg text-white">Databases</h2>
        <div className="flex"></div>
      </div>
      <div>
        <h2 className="text-lg text-white">Other</h2>
        <div className="flex"></div>
      </div>
    </div>
  );
}

export default Skills;
