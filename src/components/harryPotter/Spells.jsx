import { useState, useEffect } from "react";

const Spells = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const spellList = () => {
      fetch("https://hp-api.onrender.com/api/spells").then((result) => {
        result.json().then((response) => {
          setData(response);
        });
      });
    };

    spellList();
  }, []);

  return (
    <>
    <div className="flex flex-col">
      <div className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-5">Spells In The Harry Potter Universe</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((spell, id) => (
          <div key={id}>
            <div className="h-48 w-72 items-center max-w-xl justify-center  m-5 px-8 py-6 rounded-lg bg-[url('https://m.media-amazon.com/images/I/81dpeDCcjzL._AC_UF894,1000_QL80_.jpg')] text-white overflow-auto no-scrollbar" >
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br p-2 from-red-600 to-green-800">{spell.name}</div>
              <div className="text-sm text-slate-900 font-semibold">{spell.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Spells;
