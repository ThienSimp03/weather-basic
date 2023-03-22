import React from "react";

const Cell = ({ value }) => {
  return (
    <div className="text-2xl min-w-[40px] min-h-[40px] flex items-center justify-center border-solid border-[1px] border-red-500 rounded-xl m-2">
      {value}
    </div>
  );
};

export default Cell;
