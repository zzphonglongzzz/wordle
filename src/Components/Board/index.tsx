import React from "react";
import Square from "../Square/index";
import "./index.css"
import KeyBoard from "../KeyBoard/index"
interface IProps {
  board: string[];
}
const Board: React.FC<IProps> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="board">
        {board.map((square, index) => {
          return (
            <>
              <Square val={square} squareIdx={index}/>
            </>
          );
        })}
      </div>
      <div className="keyboard">
         <KeyBoard/>
      </div>
    </>
  );
};

export default Board;
