import React from "react";
import "./index.css";
import { useSelector,useDispatch } from "react-redux";
import { rootState } from "../interface";
import { incrPos, setBoard } from "../../redux/boardSlice";

interface IProps {
  letter: string;
}
const Key: React.FC<IProps> = (props) => {
  const {letter} = props;
  const board = useSelector((state:rootState)=>state.board.board);
  const position = useSelector((state:rootState) => state.board.pos)
  const row = useSelector((state:rootState) => state.board.row)
  const dispatch= useDispatch();
  let currentRow = Math.floor(position/5)
  const chooseLetter = () => {
    if(position >= 30) return
    if (currentRow > row) return
     const newBoard = [...board]
     newBoard[position] = letter;
     dispatch(setBoard(newBoard))
     dispatch(incrPos())
  }
return (
  <div className="letter" onClick={chooseLetter}>
      {letter}
  </div>
)
}

export default Key
