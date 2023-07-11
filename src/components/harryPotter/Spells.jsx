import { useState, useEffect } from "react";

const Spells = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const spellList = () => {
        fetch("https://hp-api.onrender.com/api/spells").then((result) => {
          result.json().then((response) => {
            console.log(response);
            setData(response);
          });
        });
      };
  
      spellList();
    }, []);
  
  return (
    <>
    <div className="flex flex-wrap">
      {data.map((spell, id) => (
        <div key={id}>
          <div className="flex flex-col max-w-xl justify-between  m-5 px-8 py-6 rounded-lg bg-slate-700 text-white">
            <div className="text-2xl font-semibold">{spell.name}</div>
            <div className="text-sm text-gray-300">{spell.description}</div>
          </div>
        </div>
      ))}
    </div>
  </>
  )
}

export default Spells