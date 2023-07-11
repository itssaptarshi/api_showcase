import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="text-5xl font-bold text-black ">Api Showcase</div>

        <div className="flex flex-row mt-10 flex-wrap">
          <div className="m-5">
            <Link to="/weather">
              <div className="p-5 bg-slate-600 text-white rounded-lg ">Weather</div>
            </Link>
          </div>
          <div className="m-5">
            <Link to="/cat">
              <div className="p-5 bg-slate-600 text-white rounded-lg ">cat</div>
            </Link>
          </div>
          <div className="m-5">
            <Link to="/harrypotter">
              <div className="p-5 bg-slate-600 text-white rounded-lg ">Harry Potter</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
