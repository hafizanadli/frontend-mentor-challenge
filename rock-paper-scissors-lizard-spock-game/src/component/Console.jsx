import React from "react";

import { AppContext } from "../context/AppContext";

import IcPentagon from "../assets/bg-pentagon.svg";
import ItemButton from "./ItemButton";

import { item } from "../constant/constant";

const Console = () => {
  const {
    play,
    handlePick,
    handleReset,
    playerPick,
    botPick,
    status,
    showResult,
  } = React.useContext(AppContext);

  return (
    <div className='w-full lg:w-3/4 h-full flex flex-col justify-start lg:justify-center '>
      {!play ? (
        <div className='flex items-center justify-center'>
          <div className='relative'>
            <img
              src={IcPentagon}
              alt='pentagon background'
              className='h-3/4 lg:h-full'
            />
            {Object.keys(item).map((key) => (
              <ItemButton
                key={item[key]["name"]}
                func={() => handlePick(item[key]["name"])}
                iconSrc={item[key]["icon"]}
                iconAlt={item[key]["name"]}
                fill={item[key]["fillStr"]}
                position={item[key]["positionStr"]}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className='relative flex w-full justify-evenly items-start lg:items-center  h-3/4 lg:h-auto'>
          <div className='flex flex-col lg:flex-col-reverse space-y-5 lg:space-y-16 lg:space-y-reverse items-center'>
            <div
              className={`flex items-center justify-center w-32 h-32 lg:w-64 lg:h-64 rounded-full bg-gradient-to-b ${item[playerPick]["fillStr"]}`}
            >
              <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-white border-t-6 border-gray-300'>
                <img
                  src={item[playerPick]["icon"]}
                  alt={playerPick}
                  className='h-1/2'
                />
              </div>
            </div>
            <p className='text-white text-sm lg:text-2xl font-bold'>
              YOU PICKED
            </p>
          </div>
          {showResult && (
            <div className='absolute lg:static left-1/2 top-2/3 transform -translate-x-1/2 lg:transform-none space-y-3'>
              <p className=' text-6xl whitespace-nowrap font-semibold text-white'>
                {status}
              </p>
              <button
                onClick={() => handleReset()}
                className='bg-white rounded-lg p-4 w-full'
              >
                PLAY AGAIN
              </button>
            </div>
          )}
          {botPick != "" ? (
            <div className='flex flex-col lg:flex-col-reverse space-y-5 lg:space-y-16 lg:space-y-reverse items-center'>
              <div
                className={`flex items-center justify-center w-32 h-32 lg:w-64 lg:h-64 rounded-full bg-gradient-to-b ${item[botPick]["fillStr"]}`}
              >
                <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-white border-t-6 border-gray-300'>
                  <img
                    src={item[botPick]["icon"]}
                    alt={botPick}
                    className='h-1/2'
                  />
                </div>
              </div>
              <p className='text-white text-sm lg:text-2xl font-bold'>
                THE HOUSE PICKED
              </p>
            </div>
          ) : (
            <div className='flex flex-col lg:flex-col-reverse space-y-5 lg:space-y-16 lg:space-y-reverse items-center'>
              <div
                className={`flex items-center justify-center w-32 h-32 lg:w-64 lg:h-64 rounded-full`}
              >
                <div className='flex items-center justify-center w-3/4 h-3/4 rounded-full bg-screen-2 bg-opacity-30'></div>
              </div>
              <p className='text-white text-sm lg:text-2xl font-bold'>
                THE HOUSE PICKED
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Console;
