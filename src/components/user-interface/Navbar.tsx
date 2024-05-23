import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { setCurrentPlanet } from '../../state/appSlice';
import { MouseEvent, useEffect, useRef, useState } from 'react';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const mobileOptions = [
  {
    name: '1. Overview',
    planet: 'Overview',
  },
  {
    name: '2. About',
    planet: 'Earth',
  },
  {
    name: '3. Bullflow.io',
    planet: 'Saturn',
  },
  {
    name: '4. eCommerce Website',
    planet: 'Jupiter',
  },
  {
    name: '5. React Query Rewind',
    planet: 'Mars',
  },
];

function Navbar() {
  const { currentPlanet, isTransitioning } = useSelector(
    (state: RootState) => state.app,
  );
  const [projectOptionsOpen, setProjectOptionsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent<EventTarget>) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProjectOptionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside as any);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as any);
    };
  }, []);

  const handlePageClick = (
    event: MouseEvent<HTMLButtonElement>,
    page: string,
    option: string,
  ) => {
    if (isTransitioning) return;

    event.stopPropagation();

    if (option === 'Experience') {
      setProjectOptionsOpen(!projectOptionsOpen);
    }

    if (option !== 'Experience') {
      dispatch(setCurrentPlanet(page));
    }
  };

  const handleNavigation = (planet: string) => {
    if (currentPlanet === planet) return;
    dispatch(setCurrentPlanet(planet));
  };

  const navItems = [
    { name: 'Overview', value: 'Overview' },
    { name: 'About', value: 'Earth' },
    { name: 'Experience', value: 'Jupiter' || 'Saturn' || 'Mars' },
    // { name: 'Contact', value: 'Saturn' },
  ];

  return (
    <nav className="pointer-events-auto flex items-start justify-between text-xl font-medium text-[#00bfff]">
      {/* Left */}
      <div className="flex h-[70px] w-full items-center justify-around space-x-5 border-b-2 border-[#00bfff] bg-gray-900 bg-opacity-80 p-4 sm:w-auto sm:justify-between">
        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-link-blue px-2 py-1 text-link-blue transition duration-300 ease-in-out hover:border-white hover:text-white"
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
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            strokeWidth="0.984"
            className="w-9 stroke-[#00bfff] hover:stroke-white"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                stroke="currentColor"
                strokeLinejoin="round"
              ></path>
            </g>
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
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 stroke-[#00bfff] hover:stroke-white"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                stroke="currentColor"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </a>

        {/* Menu Popover - Mobile */}
        <Popover className="relative flex justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center text-[#00bfff]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-9 w-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-20 flex w-screen max-w-max">
              <div className="max-w-sm flex-auto rounded-2xl border-2 border-[#00bfff] bg-gray-900 px-2 text-left text-base leading-6 opacity-80 shadow-lg ring-1 ring-gray-900/5">
                {mobileOptions.map(item => (
                  <div
                    key={item.name}
                    // className="relative rounded-lg p-4 hover:bg-gray-50"
                    className="relative rounded-lg p-4 hover:bg-gray-700"
                  >
                    <Popover.Button
                      as="button"
                      className="font-semibold text-[#00bfff]"
                      onClick={() => handleNavigation(item.planet)}
                    >
                      {item.name}
                    </Popover.Button>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>

      {/* Hidden on Mobile */}
      <div className="hidden sm:flex sm:flex-grow sm:items-start">
        {/* Left Diagonal */}
        <div className="relative h-[70px] w-10 bg-transparent">
          {/* Blue background that appears as diagonal */}
          <div
            className="absolute left-0 top-0 h-full w-full bg-[00bfff] bg-opacity-80"
            style={{
              backgroundColor: '#00bfff',
              clipPath: 'polygon(0 67.5px, 100% 7.5px, 100% 10px, 0 100%)',
            }}
          ></div>

          {/* Gray background that appears on top of the blue element above */}
          <div
            className="absolute left-0 top-0 h-full w-full bg-gray-900 bg-opacity-80"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 7.5px, 0 67.5px)',
            }}
          ></div>
        </div>

        {/* Middle */}
        <div className="h-[10px] flex-grow border-b-2 border-[#00bfff] bg-gray-900 bg-opacity-80"></div>

        {/* Right Diagonal */}
        <div className="relative h-[70px] w-10 bg-transparent">
          {/* Blue background that appears as diagonal */}
          <div
            className="absolute left-0 top-0 h-full w-full bg-[#00bfff]"
            style={{
              clipPath: 'polygon(0 7.5px, 100% 67.5px, 100% 100%, 0 10px)',
            }}
          ></div>

          {/* Gray background that appears on top of the blue element above */}
          <div
            className="absolute left-0 top-0 h-[70px] w-full bg-gray-900 bg-opacity-80"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 67.5px, 0 8px)',
            }}
          ></div>
        </div>

        {/* Right */}
        <div className="bg-gray-90 flex h-[70px] space-x-5 border-b-2 border-[#00bfff] bg-gray-900 bg-opacity-80 p-4 px-6">
          {navItems.map(item => {
            const isActive =
              item.name === 'Experience'
                ? ['Jupiter', 'Saturn', 'Mars'].includes(currentPlanet)
                : currentPlanet === item.value;
            return (
              <div
                key={item.value}
                className="group relative flex items-center justify-center"
                ref={item.name === 'Experience' ? dropdownRef : null}
              >
                <button
                  className="inline-flex items-center px-3 py-2 text-[#00bfff] focus:outline-none"
                  onClick={event =>
                    handlePageClick(event, item.value, item.name)
                  }
                >
                  {item.name}

                  {/* Chevron Up */}
                  {item.name === 'Experience' && !projectOptionsOpen && (
                    <svg
                      className="ml-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 13.707a1 1 0 011.414 0L10 8.414l5.293 5.293a1 1 0 001.414-1.414l-6-6a1 1 0 00-1.414 0l-6 6a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}

                  {/* Chevron Down */}
                  {item.name === 'Experience' && projectOptionsOpen && (
                    <>
                      <svg
                        className="ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.293 6.293a1 1 0 011.414 0L10 11.586l5.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>

                      {/* Dropdown Menu */}
                      <div className="absolute right-0 top-full mt-8 flex w-56 items-center justify-center shadow-lg">
                        <ul className="rounded-lg border-2 border-[#00bfff] bg-gray-900 bg-opacity-80 py-1 text-left text-[#00bfff]">
                          <li>
                            <div
                              onClick={() => handleNavigation('Saturn')}
                              className="block px-4 py-2 text-base hover:text-white"
                            >
                              {/* 1. React Query Rewind */}
                              1. Bullflow.io
                            </div>
                          </li>
                          <li>
                            <div
                              onClick={() => handleNavigation('Jupiter')}
                              className="block px-4 py-2 text-base hover:text-white"
                            >
                              {/* 2. eCommerce Site */}
                              2. eCommerce Site
                            </div>
                          </li>
                          <li>
                            <div
                              onClick={() => handleNavigation('Mars')}
                              className="block px-4 py-2 text-base hover:text-white"
                            >
                              {/* 3. Solar System Portfolio */}
                              3. React Query Rewind
                            </div>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </button>

                <div
                  className={`absolute bottom-0 left-0 right-0 mx-auto h-0.5 bg-[#00bfff] transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
