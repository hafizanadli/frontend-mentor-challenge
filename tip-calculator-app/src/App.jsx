import React from "react";
import CalculationPanel from "./components/CalculationPanel";
import ResultPanel from "./components/ResultPanel";

const initialState = {
  avgTotal: "",
  avgTip: "",
  bill: "",
  tip: 0,
  people: "",
  custom: false,
};

const calculationReducer = (state, action) => {
  switch (action.type) {
    case "totalPerPerson":
      return {
        ...state,
        avgTotal:
          (parseFloat(state.bill) +
            (parseFloat(state.bill) * parseFloat(state.tip)) / 100) /
          state.people,
      };
    case "tipPerPerson":
      return {
        ...state,
        avgTip: (state.bill * state.tip) / 100 / state.people,
      };
    case "setBill":
      return {
        ...state,
        bill: action.value,
      };
    case "setTip":
      return {
        ...state,
        tip: action.value,
        custom: false,
      };
    case "setTipCustom":
      return {
        ...state,
        tip: action.value,
      };
    case "setCustom":
      return {
        ...state,
        custom: action.value,
      };
    case "setPeople":
      return {
        ...state,
        people: action.value,
      };
    case "reset":
      return {
        ...state,
        bill: "",
        tip: 0,
        people: "",
        custom: false,
        avgTip: "",
        avgTotal: "",
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(calculationReducer, initialState);

  return (
    <main className='min-h-screen flex flex-col justify-center items-center bg-light-grayish-cyan-1'>
      <div className='w-full flex flex-col items-center space-y-16'>
        <div className='space-y-2 mt-16 md:mt-0'>
          <p className='text-2xl font-bold text-very-dark-cyan tracking-widest'>
            SPLI
          </p>
          <p className='text-2xl font-bold text-very-dark-cyan tracking-widest'>
            TTER
          </p>
        </div>
        <div className='bg-white py-10 px-8 rounded-3xl w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-10'>
          <CalculationPanel state={state} dispatch={dispatch} />
          <ResultPanel state={state} dispatch={dispatch} />
        </div>
      </div>
    </main>
  );
};

export default App;
