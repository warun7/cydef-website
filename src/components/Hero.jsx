import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-black text-green-400 py-10 sm:py-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
        Welcome to <span className="text-blue-900 bold">CyDef</span>
      </h1>
      <p className="text-md sm:text-lg mb-4 sm:mb-8 max-w-xl text-center">
        We're a group of passionate cybersecurity enthusiasts dedicated to
        honing our skills and pushing the boundaries of what's possible in the
        digital world.
      </p>
      <Link to="/egg-hunt">
        <button className="bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-bold hover:bg-blue-500 transition-colors">
          Play Egg Hunt
        </button>
      </Link>
    </section>
  );
};

export default Hero;
