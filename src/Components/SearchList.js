import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Buttons from "./Buttons";

export default function SearchList({ stock }) {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      key={uuidv4()}
      className="resultContainer"
      onMouseEnter={() => {
        setShowButtons(true);
      }}
      onMouseLeave={() => {
        setShowButtons(false);
      }}
    >
      <div>
        <div>{stock[0].split("::")[0]}</div>
        <div>{stock[0].split("::")[1]}</div>
      </div>
      <div>
        <div>{stock[1]}</div>
        <div>{stock[2]}</div>
      </div>
      {showButtons && <Buttons stock={stock} />}
    </div>
  );
}
