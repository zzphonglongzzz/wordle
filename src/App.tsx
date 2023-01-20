import React, { useState } from "react";
import "./App.css";
import Heading from "../src/Components/Heading/index";
import { useSelector } from "react-redux";
import Board from "../src/Components/Board/index";
import { rootState } from "./Components/interface";

function App() {
  const board = useSelector((state: rootState) => state.board.board);
  return (
    <div className="App">
      <Heading type="h1" text="Wordle" />
      <Heading type="subtitle" text="Another Wordle Clone" />
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
