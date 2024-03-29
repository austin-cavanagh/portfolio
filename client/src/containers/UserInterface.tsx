import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { setCurrentPlanet } from '../state/appSlice';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';

type UserInterfaceProps = {};

function UserInterface({}: UserInterfaceProps) {
  const { currentPlanet, isTransitioning, showContent } = useSelector(
    (state: RootState) => state.app,
  );

  const dispatch = useDispatch<AppDispatch>();

  const renderContent = () => {
    switch (currentPlanet) {
      case 'Earth':
        return <About />;
      case 'Moon':
        return <Projects />;
      case 'Mars':
        return <Projects />;
      case 'Jupiter':
        return <Projects />;
      case 'Saturn':
        return <Contact />;
      default:
        return null;
    }
  };

  const handlePageClick = (page: string) => {
    console.log(page);

    if (isTransitioning) return;
    dispatch(setCurrentPlanet(page));
  };

  const navItems = [
    { name: 'Overview', value: 'Overview' },
    { name: 'About', value: 'Earth' },
    { name: 'Projects', value: 'Moon' },
    // { name: 'Project-2', value: 'Mars' },
    // { name: 'Project-3', value: 'Jupiter' },
    { name: 'Contact', value: 'Saturn' },
  ];

  return (
    <div
      className={`absolute left-0 top-0 flex w-screen flex-col ${showContent && 'h-screen'}`}
    >
      <nav className="flex items-center justify-between bg-gray-800 p-4 text-lg font-medium text-[#00bfff]">
        {/* Left */}
        <div className="flex items-center space-x-5">
          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-blue border-link-blue rounded-lg border px-3 py-2 transition duration-300 ease-in-out hover:border-white hover:text-white"
          >
            Resume
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/austin-cavanagh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00bfff] transition duration-300 ease-in-out hover:text-white"
            aria-label="Link to my GitHub profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 438.549 438.549"
              className="h-9 w-9 fill-current"
            >
              <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/austincavanagh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00bfff] transition duration-300 ease-in-out hover:text-white"
            aria-label="Link to my LinkedIn profile"
          >
            <svg
              id="Capa_1"
              version="1.1"
              viewBox="0 0 112.196 112.196"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="h-9 w-9 fill-current"
            >
              <g>
                <circle cx="56.098" cy="56.097" r="56.098" />
                <g className="fill-current text-gray-800">
                  <path d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118    c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715    c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662    C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967    c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z     M27.865,83.739H41.27V43.409H27.865V83.739z" />
                </g>
              </g>
            </svg>
          </a>
        </div>

        {/* Center */}
        <div className="flex-1 text-center text-2xl">{currentPlanet}</div>

        {/* Right */}
        <div className="flex space-x-5">
          {navItems.map(item => (
            <div key={item.value} className="group relative">
              <button
                className="px-3 py-2 text-[#00bfff] focus:outline-none"
                onClick={() => handlePageClick(item.value)}
              >
                {item.name}
              </button>
              <div
                className={`absolute bottom-0 left-0 right-0 mx-auto h-0.5 bg-[#00bfff] transition-all duration-300 ease-out ${currentPlanet === item.value ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </div>
          ))}
        </div>
      </nav>
      <div className="flex flex-1 items-center justify-center overflow-auto">
        {renderContent()}
      </div>{' '}
    </div>
  );
}

export default UserInterface;
