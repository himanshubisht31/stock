import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Buttons from "./Buttons";
import { wishListContext } from "../Context/WishListContext";

export default function SearchList({ stock }) {
  const [showButtons, setShowButtons] = useState(false);
  const [found, setFound] = useState(false);
  const { wish } = useContext(wishListContext);

  useEffect(() => {
    wish.map((ele) => {
      if (stock[0].split("::")[0] === ele[0].split("::")[0])
        setFound((found) => true);
      else setFound((found) => false);
    });
  }, [stock, wish]);

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
      {showButtons && <Buttons stock={stock} found={found} />}
    </div>
  );
}
