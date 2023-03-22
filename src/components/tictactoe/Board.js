import React, { useState } from "react";
import Cell from "./Cell";
const Board = ({ numberCell }) => {
  const totalCell = numberCell.rows * numberCell.columns;
  const [board, setBoard] = useState(Array(totalCell).fill(null));
  return (
    <div
      className={`grid grid-cols-${numberCell.columns} grid-rows-${numberCell.rows} border-solid border-[1px] border-red-500 w-max h-max mx-auto max-w-[1200px] mt-10 rounded-xl`}
    >
      {board.length > 0 &&
        board.map((item, index) => <Cell key={index} value={index} />)}
    </div>
  );
};

export default Board;
