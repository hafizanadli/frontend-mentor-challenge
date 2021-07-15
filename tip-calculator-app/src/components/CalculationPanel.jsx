import React from "react";

import IcDollar from "../assets/icon-dollar.svg";
import IcPerson from "../assets/icon-person.svg";
import ButtonTip from "./ButtonTip";

const CalculationPanel = ({ state, dispatch }) => {
  React.useEffect(() => {
    if (
      state.bill != "" &&
      state.tip != 0 &&
      state.people != "" &&
      state.people != 0
    ) {
      dispatch({ type: "totalPerPerson" });
      dispatch({ type: "tipPerPerson" });
    }
  }, [
    state.bill,
    state.tip,
    state.people,
    state.calculateTip,
    state.calculateTotal,
  ]);

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
            value={state.bill}
            onChange={(e) =>
              dispatch({ type: "setBill", value: e.target.value })
            }
            placeholder='0'
            className=' bg-light-grayish-cyan-2 w-full h-14 rounded-md focus:outline-none p-5 text-right text-very-dark-cyan font-bold text-2xl focus:ring-2 focus:ring-strong-cyan'
          />
        </div>
      </div>
      <div className='space-y-2'>
        <p className=' text-dark-grayish-cyan-1 font-bold'>Select Tip %</p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {[5, 10, 15, 25, 50].map((el) => (
            <ButtonTip
              key={el}
              label={el}
              value={el}
              tip={state.tip}
              custom={state.custom}
              dispatch={dispatch}
            />
          ))}
          {state.custom ? (
            <input
              autoFocus={true}
              onWheel={(event) => event.currentTarget.blur()}
              type='number'
              value={state.tip}
              onChange={(e) =>
                dispatch({ type: "setTipCustom", value: e.target.value })
              }
              placeholder='0'
              className=' bg-light-grayish-cyan-2 w-full h-12 rounded-md focus:outline-none p-5 text-right text-very-dark-cyan font-bold text-2xl focus:ring-2 focus:ring-strong-cyan'
            />
          ) : (
            <button
              onClick={() => dispatch({ type: "setCustom", value: true })}
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
          {state.people != "" && state.people == 0 ? (
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
            value={state.people}
            onChange={(e) =>
              dispatch({ type: "setPeople", value: e.target.value })
            }
            placeholder='0'
            className={`focus:ring-2 focus:ring-strong-cyan bg-light-grayish-cyan-2 w-full h-14 rounded-md focus:outline-none p-5 text-right text-very-dark-cyan font-bold text-2xl 
            ${
              state.people != "" && state.people == 0
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
