import React from "react";
import Key from "../Key/index";
import "./index.css";
import wordList from "../../words.json"
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../interface";
import { decrPos, incrPos, incrRow, setBoard } from "../../redux/boardSlice";

const Keyboard: React.FC = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  const position = useSelector((state: rootState) => state.board.pos);
  const board = useSelector((state: rootState) => state.board.board);
  const row = useSelector((state:rootState) => state.board.row)
  const dispatch = useDispatch();
  const correctWord = useSelector((state: rootState) => state.board.correctWord)
  console.log(correctWord)
  let allwords : string [] = wordList.words
  let board5Words: string = `${board[position-5]}${board[position-4]}${board[position-3]}${board[position-2]}${board[position-1]}`.toLowerCase();
  const clickBack = () => {
    if(Math.floor((position-1)/5) < row) return
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(decrPos());
    dispatch(setBoard(newBoard));
  };
  const clickEnter = () => {
    if (allwords.includes(board5Words) === false) {
      alert("Invalid words");
    }
    if(allwords.includes(board5Words)) {
      if (position % 5 === 0 && position !== 0) {
       dispatch(incrRow());
    }
  }
    if(position === 30 && allwords.includes(board5Words)) {
      alert("The word is: " + correctWord);
    }
  }
  return (
    <div className="keyboard-container">
      {rows.map((row, index) => {
        return (
          <div className="row">
            {index === 2 && <span className="letter-row" onClick={clickEnter}>Enter</span>}
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={clickBack}>Back</span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Keyboard;
