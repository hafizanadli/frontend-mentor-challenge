import React from "react";

import IcDollar from "../assets/icon-dollar.svg";
import IcPerson from "../assets/icon-person.svg";

const CalculationPanel = ({
  setAvgTotal,
  setAvgTip,
  bill,
  setBill,
  tip,
  setTip,
  people,
  setPeople,
  custom,
  setCustom,
}) => {
  const calculateTotal = React.useMemo(() => {
    return (
      (parseFloat(bill) + (parseFloat(bill) * parseFloat(tip)) / 100) / people
    );
  }, [bill, tip, people]);

  const calculateTip = React.useMemo(() => {
    return (bill * tip) / 100 / people;
  }, [bill, tip, people]);

  React.useEffect(() => {
    if (bill != "" && tip != 0 && people != "" && people != 0) {
      setAvgTotal(calculateTotal);
      setAvgTip(calculateTip);
    }
  }, [bill, tip, people, calculateTip, calculateTotal]);

  return (
    <div className='bg-white flex flex-col space-y-12'>
      <div className='space-y-2'>
        <p className=' text-dark-grayish-cyan-1 font-bold'>Bill</p>
        <div className='relative'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
            <div className='p-1'>
              <img src={IcDollar} alt='icon dollar' />
            </div>
          </span>
          <input
            onWheel={(event) => event.currentTarget.blur()}
            type='number'
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder='0'
            className=' bg-light-grayish-cyan-2 w-full h-14 rounded-md focus:outline-none p-5 text-right text-very-dark-cyan font-bold text-2xl focus:ring-2 focus:ring-strong-cyan'
          />
        </div>
      </div>
      <div className='space-y-2'>
        <p className=' text-dark-grayish-cyan-1 font-bold'>Select Tip %</p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <button
            onClick={() => {
              setCustom(false);
              setTip(5);
            }}
            className={`hover:bg-strong-cyan hover:bg-opacity-50 hover:text-very-dark-cyan font-bold rounded-md py-2 text-2xl ${
              tip == 5 && !custom
                ? "bg-strong-cyan text-very-dark-cyan"
                : "bg-very-dark-cyan text-white"
            }`}
          >
            5%
          </button>
          <button
            onClick={() => {
              setCustom(false);
              setTip(10);
            }}
            className={`hover:bg-strong-cyan hover:bg-opacity-50 hover:text-very-dark-cyan font-bold rounded-md py-2 text-2xl ${
              tip == 10 && !custom
                ? "bg-strong-cyan text-very-dark-cyan"
                : "bg-very-dark-cyan text-white"
            }`}
          >
            10%
          </button>
          <button
            onClick={() => {
              setCustom(false);
              setTip(15);
            }}
            className={`hover:bg-strong-cyan hover:bg-opacity-50 hover:text-very-dark-cyan font-bold rounded-md py-2 text-2xl ${
              tip == 15 && !custom
                ? "bg-strong-cyan text-very-dark-cyan"
                : "bg-very-dark-cyan text-white"
            }`}
          >
            15%
          </button>
          <button
            onClick={() => {
              setCustom(false);
              setTip(25);
            }}
            className={`hover:bg-strong-cyan hover:bg-opacity-50 hover:text-very-dark-cyan font-bold rounded-md py-2 text-2xl ${
              tip == 25 && !custom
                ? "bg-strong-cyan text-very-dark-cyan"
                : "bg-very-dark-cyan text-white"
            }`}
          >
            25%
          </button>
          <button
            onClick={() => {
              setCustom(false);
              setTip(50);
            }}
            className={`hover:bg-strong-cyan hover:bg-opacity-50 hover:text-very-dark-cyan font-bold rounded-md py-2 text-2xl ${
              tip == 50 && !custom
                ? "bg-strong-cyan text-very-dark-cyan"
                : "bg-very-dark-cyan text-white"
            }`}
          >
            50%
          </button>
          {custom ? (
            <input
              onWheel={(event) => event.currentTarget.blur()}
              type='number'
              value={tip}
              onChange={(e) => setTip(e.target.value)}
              placeholder='0'
              className=' bg-light-grayish-cyan-2 w-full h-12 rounded-md focus:outline-none p-5 text-right text-very-dark-cyan font-bold text-2xl focus:ring-2 focus:ring-strong-cyan'
            />
          ) : (
            <button
              onClick={() => setCustom(true)}
              className='bg-light-grayish-cyan-2 text-dark-grayish-cyan-1 rounded-md font-bold  py-2 text-2xl hover:bg-strong-cyan hover:bg-opacity-50 hover:text-very-dark-cyan'
            >
              Custom
            </button>
          )}
        </div>
      </div>
      <div className='space-y-2'>
        <div className='flex justify-between'>
          <p className=' text-dark-grayish-cyan-1 font-bold'>
            Number of People
          </p>
          {people != "" && people == 0 ? (
            <p className='text-pastel-red font-bold'>Can't be zero</p>
          ) : null}
        </div>
        <div className='relative'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
            <div className='p-1'>
              <img src={IcPerson} alt='icon person' />
            </div>
          </span>
          <input
            type='number'
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder='0'
            className={`focus:ring-2 focus:ring-strong-cyan bg-light-grayish-cyan-2 w-full h-14 rounded-md focus:outline-none p-5 text-right text-very-dark-cyan font-bold text-2xl 
            ${
              people != "" && people == 0
                ? "ring-2 ring-pastel-red focus:pastel-red focus:ring-pastel-red"
                : ""
            }
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default CalculationPanel;
