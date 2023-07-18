import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export const NavLink = () => {
  return (
    <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  lg:flex-row lg:space-x-8 md:mt-0 md:border-0 ">
      <Link to="/weather">
        <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Weather
        </div>
      </Link>
      <Link to="/cat">
        {" "}
        <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Cat
        </div>
      </Link>
      <Link to="/harrypotter">
        {" "}
        <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Harry Potter
        </div>
      </Link>
      <Link to="/food">
        {" "}
        <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Food
        </div>
      </Link>
      <Link to="/trivia">
        {" "}
        <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Trivia
        </div>
      </Link>
    </div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex text-white mb-5 w-full z-[-20] top-0 flex-wrap items-center justify-between ">
      <div className="  flex  ">
        <Link to="/">
          <img
            className="rounded-full w-12"
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=2000"
          />
        </Link>
      </div>
      <div className=" hidden lg:flex w-1/2 justify-between">
        <NavLink />
      </div>
      <div className="lg:hidden flex justify-end ">
        <button
          className="bg-gray-600 cursor-pointer"
          onClick={() => {
            toggleNavigation();
          }}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
     
      {isOpen && (
        <div className="flex basis-full  flex-col lg:hidden">
          <NavLink />
        </div>
      )}

    </div>
  );
};

export default NavBar;
