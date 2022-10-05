import Board from "./Board";
import Info from "./Info";

import "./css/App.css";

import { useState } from "react";

function App() {
  //Creating a reset state, which indicates whether the game should be reset or not
  const [reset, setReset] = useState(false);

  //Creating a winner state, which indicates the current winner
  const [winner, setWinner] = useState("");

  //Sets the reset property to true which starts the chain reaction of resetting the board
  const resetBoard = () => {
    setReset(true);
  };

  return (
    /* Line 23: Shrinks the popup when there is no winner */
    /* Line 25: Display the Current winner */
    /* Line 27: Button used to reset the board */

    /* Line 31: Custom made board component comprising of the tic-tac-toe board */
    <div className="App">
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        <div className="winner-text">{winner}</div>
        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <Info />
    </div>
  );
}

export default App;
