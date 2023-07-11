import { useEffect, useState } from "react";

const Characters = () => {
  const [char, setChar] = useState([]);

  useEffect(() => {
    const characterList = () => {
      fetch("https://hp-api.onrender.com/api/characters").then((result) => {
        result.json().then((response) => {
          console.log(response);
          setChar(response);
        });
      });
    };
    characterList();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {char.map((characters, id) => (
          <div key={id} className="bg-slate-600 text-white p-3 m-5">
            <img src={characters.image} className="h-48 w-36"/>
            <div>{characters.name}</div>
            <div className="text-gray-400">{characters.actor}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
