import { useState } from "react";

const Food = () => {
  const [foodRec, setFoodRec] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [ing, setIng] = useState("");

  // useEffect(() => {

  //   foodRecipie();
  // }, []);

  const foodRecipie = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ing}&apiKey=6e75cc7f23444a15b97df0dc54c8386e&number=9`
      ).then((result) => {
        result.json().then((response) => {
          setFoodRec(response);
          setToggle(true);
        });
      });
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div>
          {toggle === true ? (
            <>
              <div>
                <input
                  className="block w-full  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Ingredient"
                  type="text"
                  value={ing}
                  onChange={(e) => setIng(e.target.value)}
                  onKeyPress={foodRecipie}
                />
              </div>
              <div className="flex flex-wrap">
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3">
                  {foodRec.map((ing, id) => (
                    <div key={id}>
                      <div className="flex flex-col rounded-lg bg-[#000] p-5 m-5">
                        <img className=" mb-3" src={ing.image} />
                        <div className="text-lg font-bold">{ing.title}</div>
                        <a
                          href={`https://spoonacular.com/recipes/${ing.name}-${ing.id}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <button className="bg-red-400 p-2 rounded-md mt-1">
                            Read more
                          </button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center">
                <div className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-10">
                  A Recipie App For The Food Lovers
                </div>
                <div className="text-white text-2xl  font-semibold mb-10">
                  Please search the ingredient you have in your hand and look
                  for the recipie that suits you
                </div>

                <input
                  className="block w-full  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Ingredient"
                  type="text"
                  value={ing}
                  onChange={(e) => setIng(e.target.value)}
                  onKeyPress={foodRecipie}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Food;
