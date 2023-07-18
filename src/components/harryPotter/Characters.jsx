import { useEffect, useState } from "react";

const Characters = () => {
  const [char, setChar] = useState([]);

  useEffect(() => {
    const characterList = () => {
      fetch("https://hp-api.onrender.com/api/characters").then((result) => {
        result.json().then((response) => {
          setChar(response);
        });
      });
    };
    characterList();
  }, []);

  return (
    <>
      <div className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-10 mt-2">
        Characters In The Harry Potter Universe
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {char.map((characters, id) => (
          <>
            <div
              key={id}
              className="flex flex-col text-white m-2 border-2 rounded-lg p-2 justify-between bg-gradient-to-br from-yellow-900 to-teal-900"
            >
              <div className="flex flex-col items-center">
                <div className="px-5 py-2  text-2xl font-bold">
                  {characters.name}
                </div>
                <div className="text-xl mb-3 font-semibold">
                  {characters.actor}
                </div>
                <div>
                  <img
                    src={characters.image}
                    alt="Image Not Available"
                    className="h-48 w-36 rounded-lg "
                  />
                </div>
              </div>
              <hr className="bg-white mt-3" />
              <div className="flex justify-between px-5 text-sm items-center p-4">
                <div>House</div>
                <div>{characters.house}</div>
              </div>
              <hr className="bg-white" />
              <div className="flex justify-between px-5 text-sm items-center p-4">
                <div>Gender</div>
                <div>{characters.gender}</div>
              </div>
              <hr className="bg-white" />
              <div className="flex justify-between px-5 text-sm items-center p-4">
                <div>Date Of Birth</div>
                <div>{characters.dateOfBirth}</div>
              </div>
              <hr className="bg-white" />

              <div className="flex justify-between px-5 text-sm items-center p-4 ">
                <div>Species </div>
                <div>{characters.species}</div>
              </div>
              <hr className="bg-white" />

              <div className="flex justify-between px-5 text-sm p-4">
                <div>Ancestry</div>
                <div>{characters.ancestry}</div>
              </div>
              <hr className="bg-white" />

              <div className="flex justify-between px-5 text-sm items-center">
                <div>Wand</div>
                <div className="text-sm">
                  {characters.wand.wood} wood,
                  <br />
                  {characters.wand.core} core ,<br />
                  {characters.wand.length} inch
                </div>
              </div>
              <hr className="bg-white" />

              <div className="flex justify-between px-5 text-sm items-center p-4">
                <div>Patronus</div>
                <div>{characters.patronus}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Characters;
