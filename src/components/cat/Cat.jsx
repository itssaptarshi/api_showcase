import { useEffect, useState } from "react";

const Cat = () => {
  const [catFact, setCatFact] = useState("");

  let url = "https://cataas.com/cat";

  useEffect(() => {
    const catsFact = () => {
      fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat").then(
        (result) => {
          result.json().then((response) => {
            setCatFact(response);
          });
        }
      );
    };

    catsFact();
  }, []);

  const handleChange = () => {
    location.reload();
    // catsFact()
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl sm:text-6xl text-white font-bold mb-1">
        Show me a Cat
      </div>
      <div className="text-xl text-gray-400 font-semibold mb-5">
        A simple page to look at Cats.{" "}
      </div>
      <img src={url} className="h-96 rounded-lg" />
      <div className="text-2xl font-semibold text-white mt-5">
        Fact : {catFact.text}
      </div>
      <button
        className="relative mt-3 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        onClick={handleChange}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
          Show Me Another
        </span>
      </button>

      <div className="text-gray-400 mt-2">
        P.S : I love cats, so although it is a silly thing, i have a lot of fun
        making this. And another thing, the api sometimes throws random things.
        Take the facts with a grain of salt
      </div>
    </div>
  );
};

export default Cat;
