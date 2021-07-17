import IcScissors from "../assets/icon-scissors.svg";
import IcRock from "../assets/icon-rock.svg";
import IcPaper from "../assets/icon-paper.svg";
import IcLizzard from "../assets/icon-lizard.svg";
import IcSpock from "../assets/icon-spock.svg";

export const item = {
  scissors: {
    name: "scissors",
    icon: IcScissors,
    fillStr: "from-yellow-2 to-yellow-1",
    positionStr:
      "top-0 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2",
  },
  spock: {
    name: "spock",
    icon: IcSpock,
    fillStr: "from-cyan-2 to-cyan-1",
    positionStr:
      "top-0 left-0 transform lg:-translate-x-1/2 translate-y-3/4 lg:translate-y-1/4",
  },
  paper: {
    name: "paper",
    icon: IcPaper,
    fillStr: "from-blue-2 to-blue-1",
    positionStr:
      "top-0 right-0 transform lg:translate-x-1/2 translate-y-3/4 lg:translate-y-1/4",
  },
  lizzard: {
    name: "lizzard",
    icon: IcLizzard,
    fillStr: "from-purple-2 to-purple-1",
    positionStr:
      "bottom-0 left-0 transform translate-x-1/4 lg:translate-y-1/2 lg:-translate-x-1/4",
  },
  rock: {
    name: "rock",
    icon: IcRock,
    fillStr: "from-red-2 to-red-1",
    positionStr:
      "bottom-0 right-0 transform -translate-x-1/4 lg:translate-y-1/2 lg:translate-x-1/4",
  },
};
