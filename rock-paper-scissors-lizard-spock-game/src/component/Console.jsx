import React from "react";

import IcPentagon from "../assets/bg-pentagon.svg";
import IcScissors from "../assets/icon-scissors.svg";
import IcRock from "../assets/icon-rock.svg";
import IcPaper from "../assets/icon-paper.svg";
import IcLizard from "../assets/icon-lizard.svg";
import IcSpock from "../assets/icon-spock.svg";

const Console = () => {
  const [pick, setPick] = React.useState(false);

  return (
    <div className='w-full lg:w-3/4 h-full flex flex-col justify-start lg:justify-center '>
      {!pick ? (
        <div className='flex items-center justify-center'>
          <div className='relative  bg-green-400'>
            <img
              src={IcPentagon}
              alt='pentagon background'
              className='h-3/4 lg:h-full'
            />
            <button
              onClick={() => setPick(true)}
              className='flex items-center justify-center absolute w-1/3 h-1/3 lg:w-1/2 lg:h-1/2 rounded-full bg-gradient-to-b from-yellow-2 to-yellow-1 top-0 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2'
            >
              <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-white border-t-6 border-gray-300'>
                <img src={IcScissors} alt='scissors' className='h-1/2' />
              </div>
            </button>
            <div className='flex items-center justify-center absolute w-1/3 h-1/3 lg:w-1/2 lg:h-1/2 rounded-full bg-gradient-to-b from-cyan-2 to-cyan-1 top-0 left-0 transform lg:-translate-x-1/2 translate-y-3/4 lg:translate-y-1/4'>
              <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-white border-t-6 border-gray-300'>
                <img src={IcSpock} alt='scissors' className='h-1/2' />
              </div>
            </div>
            <div className='flex items-center justify-center absolute w-1/3 h-1/3 lg:w-1/2 lg:h-1/2 rounded-full bg-gradient-to-b from-blue-2 to-blue-1 top-0 right-0 transform lg:translate-x-1/2 translate-y-3/4 lg:translate-y-1/4'>
              <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-white border-t-6 border-gray-300'>
                <img src={IcPaper} alt='scissors' className='h-1/2' />
              </div>
            </div>
            <div className='flex items-center justify-center absolute w-1/3 h-1/3 lg:w-1/2 lg:h-1/2 rounded-full bg-gradient-to-b from-purple-2 to-purple-1 bottom-0 left-0 transform translate-x-1/4 lg:translate-y-1/2 lg:-translate-x-1/4'>
              <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-white border-t-6 border-gray-300'>
                <img src={IcLizard} alt='scissors' className='h-1/2' />
              </div>
            </div>
            <div className='flex items-center justify-center absolute w-1/3 h-1/3 lg:w-1/2 lg:h-1/2 rounded-full bg-gradient-to-b from-red-2 to-red-1 bottom-0 right-0 transform -translate-x-1/4 lg:translate-y-1/2 lg:translate-x-1/4'>
              <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-white border-t-6 border-gray-300'>
                <img src={IcRock} alt='scissors' className='h-1/2' />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='relative flex w-full justify-evenly items-start lg:items-center  h-3/4 lg:h-auto'>
          <div className='flex flex-col lg:flex-col-reverse space-y-5 lg:space-y-16 lg:space-y-reverse items-center'>
            <button
              onClick={() => setPick(true)}
              className='flex items-center justify-center w-32 h-32 lg:w-64 lg:h-64 rounded-full bg-gradient-to-b from-yellow-2 to-yellow-1'
            >
              <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-white border-t-6 border-gray-300'>
                <img src={IcScissors} alt='scissors' className='h-1/2' />
              </div>
            </button>
            <p className='text-white text-2xl font-bold'>YOU PICKED</p>
          </div>
          <div className='absolute lg:static left-1/2 top-2/3 transform -translate-x-1/2 lg:transform-none space-y-3'>
            <p className=' text-6xl whitespace-nowrap font-semibold text-white'>
              YOU WIN
            </p>
            <button className='bg-white rounded-lg p-4 w-full'>
              PLAY AGAIN
            </button>
          </div>
          <div className='flex flex-col lg:flex-col-reverse space-y-5 lg:space-y-16 lg:space-y-reverse items-center'>
            <button
              onClick={() => setPick(true)}
              className='flex items-center justify-center w-32 h-32 lg:w-64 lg:h-64 rounded-full bg-gradient-to-b from-yellow-2 to-yellow-1'
            >
              <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-white border-t-6 border-gray-300'>
                <img src={IcScissors} alt='scissors' className='h-1/2' />
              </div>
            </button>
            <p className='text-white text-2xl font-bold'>YOU PICKED</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Console;
