import React from 'react'
import Weather from './Weather/Weather'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
     <div className="flex justify-center flex-col">
        <div className="text-5xl font-bold text-black ">Api Showcase</div>

        <div className='flex flex-row mt-10 flex-wrap'>
            <Link to='/weather'>
            <div className='p-5 bg-slate-600 rounded-lg '>Weather</div>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
