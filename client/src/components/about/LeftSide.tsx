import portrait from '../../assets/portrait.jpeg';

function LeftSide() {
  return (
    <div className="flex flex-col items-center space-y-1 rounded-3xl bg-gray-800 bg-opacity-85 p-5 text-white">
      <img
        src={portrait}
        alt="Austin Cavanagh"
        className="h-32 w-32 rounded-full border-2 border-blue-500"
      />
      <h1 className="text-2xl font-bold">Austin Cavanagh</h1>
      <h2 className="text-xl">Software Engineer</h2>
      <h2 className="text-xl">San Francisco, CA</h2>
      <p className="max-w-md text-left">
        Briefly introduce yourself here. Mention your professional background,
        what you're passionate about, and a personal note. Keep it engaging and
        concise. Not too long and not too short, just the perfect amount.
      </p>
    </div>
  );
}

export default LeftSide;
