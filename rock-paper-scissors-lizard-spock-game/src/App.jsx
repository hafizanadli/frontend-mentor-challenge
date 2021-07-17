import React from "react";

import { AppProvider } from "./context/AppContext";

import Console from "./component/Console";
import Header from "./component/Header";
import Rules from "./component/Rules";

const initialState = {
  playerPick: "",
  botPick: "",
  play: false,
  score: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "pickItem":
      return { ...state, playerPick: action.inputItem, play: true };
    case "pickBotItem":
      return { ...state, botPick: action.inputItem };
    case "reset":
      return { playerPick: "", botPick: "", play: false, score: 0 };
    default:
      return state;
  }
};

const itemName = ["scissors", "spock", "paper", "lizzard", "rock"];

function App() {
  const [currentState, dispatch] = React.useReducer(reducer, initialState);

  console.log(currentState);

  const getRandomInt = React.useMemo(() => {
    return Math.floor(Math.random() * 6);
  }, []);

  const handlePick = React.useCallback((value) => {
    setTimeout(
      () =>
        dispatch({ type: "pickBotItem", inputItem: itemName[getRandomInt] }),
      1000
    );
    dispatch({ type: "pickItem", inputItem: value });
  }, []);

  const handleReset = React.useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  return (
    <AppProvider value={{ ...currentState, handlePick, handleReset }}>
      <div className='w-screen h-screen bg-apps-radial bg-top flex flex-col p-8 items-center space-y-10'>
        <Header />
        <Console />
        <Rules />
      </div>
    </AppProvider>
  );
}

export default App;
