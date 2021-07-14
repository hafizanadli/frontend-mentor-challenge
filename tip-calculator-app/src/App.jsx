import React, { useState } from "react";
import CalculationPanel from "./components/CalculationPanel";
import ResultPanel from "./components/ResultPanel";

function App() {
  const [avgTotal, setAvgTotal] = React.useState("");
  const [avgTip, setAvgTip] = React.useState("");
  const [bill, setBill] = React.useState("");
  const [tip, setTip] = React.useState(0);
  const [people, setPeople] = React.useState("");
  const [custom, setCustom] = React.useState(false);

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
          <CalculationPanel
            setAvgTotal={setAvgTotal}
            setAvgTip={setAvgTip}
            bill={bill}
            setBill={setBill}
            tip={tip}
            setTip={setTip}
            people={people}
            setPeople={setPeople}
            custom={custom}
            setCustom={setCustom}
          />
          <ResultPanel
            avgTotal={avgTotal}
            avgTip={avgTip}
            setAvgTotal={setAvgTotal}
            setAvgTip={setAvgTip}
            setBill={setBill}
            setTip={setTip}
            setPeople={setPeople}
            setCustom={setCustom}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
