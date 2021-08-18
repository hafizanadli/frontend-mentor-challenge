import React from "react";

const ResultPanel = ({ state, dispatch }) => {
  return (
    <div className='bg-very-dark-cyan flex flex-col p-6 md:p10 justify-between rounded-2xl'>
      <div>
        <div className='flex justify-between items-center mt-3 overflow-hidden'>
          <div className='w-1/2 md:w-1/4'>
            <p className='text-white font-semibold'>Tip Amount</p>
            <p className=' text-dark-grayish-cyan-2 font-semibold text-sm'>
              / person
            </p>
          </div>
          <div className='w-1/2 md:w-3/4 overflow-x-hidden overflow-y-hidden text-right'>
            <p className='text-4xl md:text-5xl text-strong-cyan font-bold'>
              ${state.avgTip != "" ? state.avgTip.toFixed(2) : "0.00"}
            </p>
          </div>
        </div>
        <div className='flex justify-between items-center mt-12 '>
          <div className='w-1/2 md:w-1/4'>
            <p className='text-white font-semibold'>Total</p>
            <p className='text-dark-grayish-cyan-2 font-semibold text-sm'>
              / person
            </p>
          </div>
          <div className='w-1/2 md:w-3/4 overflow-x-hidden overflow-y-hidden text-right'>
            <p className='text-4xl md:text-5xl text-strong-cyan font-bold'>
              ${state.avgTotal != "" ? state.avgTotal.toFixed(2) : "0.00"}
            </p>
          </div>
        </div>
      </div>
      <button
        disabled={state.avgTotal != "" || state.avgTip != "" ? false : true}
        onClick={() => {
          dispatch({ type: "reset" });
        }}
        className={`w-full mt-10 py-3 bg-strong-cyan rounded-md font-semibold text-very-dark-cyan focus:outline-none ${
          state.avgTotal != "" || state.avgTip != ""
            ? ""
            : "bg-opacity-25 text-opacity-30"
        }`}
      >
        RESET
      </button>
    </div>
  );
};

export default ResultPanel;
