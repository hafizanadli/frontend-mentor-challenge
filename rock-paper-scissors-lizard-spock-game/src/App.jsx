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
  status: "",
  showResult: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "pickItem":
      return { ...state, playerPick: action.inputItem, play: true };
    case "pickBotItem":
      return { ...state, botPick: action.inputItem };
    case "win":
      return { ...state, score: state.score + 1, status: "YOU WIN" };
    case "lose":
      return {
        ...state,
        score: state.score === 0 ? state.score : state.score - 1,
        status: "YOU LOSE",
      };
    case "draw":
      return { ...state, status: "IT'S A TIE" };
    case "showResult":
      return { ...state, showResult: true };
    case "reset":
      return {
        ...state,
        playerPick: "",
        botPick: "",
        play: false,
        status: "",
        showResult: false,
      };
    default:
      return state;
  }
};

const itemName = ["scissors", "spock", "paper", "lizzard", "rock"];

function App() {
  const [currentState, dispatch] = React.useReducer(reducer, initialState);
  console.log(currentState);
  const getRandomInt = React.useCallback(() => {
    return Math.floor(Math.random() * 5);
  }, []);

  const getBotItem = React.useCallback(() => {
    return new Promise((resolve) =>
      setTimeout(() => {
        let randomItem = itemName[getRandomInt()];
        dispatch({ type: "pickBotItem", inputItem: randomItem });
        resolve(randomItem);
      }, 1200)
    );
  }, []);

  const showResult = React.useCallback(() => {
    dispatch({ type: "showResult" });
  }, []);

  const getScore = React.useCallback((player, bot) => {
    if (player === bot) {
      dispatch({ type: "draw" });
    } else if (player === "scissors") {
      if (bot === "paper" || bot === "lizzard") {
        dispatch({ type: "win" });
      } else {
        dispatch({ type: "lose" });
      }
    } else if (player === "paper") {
      if (bot === "rock" || bot === "spock") {
        dispatch({ type: "win" });
      } else {
        dispatch({ type: "lose" });
      }
    } else if (player === "rock") {
      if (bot === "lizzard" || bot === "scissors") {
        dispatch({ type: "win" });
      } else {
        dispatch({ type: "lose" });
      }
    } else if (player === "lizzard") {
      if (bot === "spock" || bot === "paper") {
        dispatch({ type: "win" });
      } else {
        dispatch({ type: "lose" });
      }
    } else {
      if (bot === "scissors" || bot === "rock") {
        dispatch({ type: "win" });
      } else {
        dispatch({ type: "lose" });
      }
    }
    setTimeout(() => showResult(), 1000);
  }, []);

  const handlePick = React.useCallback(async (value) => {
    dispatch({ type: "pickItem", inputItem: value });
    const result = await getBotItem();
    getScore(value, result);
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
