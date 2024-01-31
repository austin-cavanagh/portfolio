function ScrollDownAnimation() {
  return (
    <div className="absolute bottom-0 mb-3 flex flex-col items-center justify-center">
      <span className="fade-in-span mb-1 text-2xl font-normal text-gray-500">
        Explore
      </span>
      <svg
        className="bounce bounce-and-fade-in h-12 w-12 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default ScrollDownAnimation;
