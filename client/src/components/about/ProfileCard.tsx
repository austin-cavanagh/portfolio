import portrait from '../../assets/portrait.jpeg';

function ProfileCard() {
  return (
    <div className="flex flex-col items-center space-y-3 rounded-3xl bg-gray-800 bg-opacity-85 p-5 text-white">
      <img
        src={portrait}
        alt="Austin Cavanagh"
        className="h-56 w-56 rounded-full border-2 border-blue-500"
      />
      <h1 className="text-2xl font-bold">Austin Cavanagh</h1>
      <h2 className="text-xl">Software Engineer</h2>
      <h2 className="mt-5 text-xl">San Francisco, CA</h2>
      <p className="max-w-md text-left text-lg">
        Briefly introduce yourself here. Mention your{' '}
        <span className="font-bold text-[#00bfff]">
          professional background
        </span>
        , what you're{' '}
        <span className="font-bold text-[#00bfff]">passionate about</span>, and
        a personal note. Keep it engaging and concise. Not too long and not too
        short, just the{' '}
        <span className="font-bold text-[#00bfff]">perfect amount</span>.
      </p>
    </div>
  );
}

export default ProfileCard;
