function ScrollDownAnimation() {
  return (
    <div className="absolute bottom-0 flex flex-col items-center justify-center mb-3">
      <span className="text-gray-500 text-2xl font-medium mb-1 fade-in-span">
        Explore
      </span>
      <svg
        className="w-12 h-12 text-gray-500 bounce bounce-and-fade-in"
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
