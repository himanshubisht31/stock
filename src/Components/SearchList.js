import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Buttons from "./Buttons";
import { wishListContext } from "../Context/WishListContext";
import "../Styles/Company.css";

export default function SearchList({ stock }) {
  const [showButtons, setShowButtons] = useState(false);
  const diff = +stock[2] - +stock[1];
  const percent = parseFloat((diff * 100) / +stock[1]).toFixed(2);
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
        <div className={diff >= 0 ? "increaseStock" : "decreaseStock"}>
          {stock[0].split("::")[0]}
        </div>
        <div>NSE</div>
      </div>
      <div>
        <div className={diff >= 0 ? "increaseStock" : "decreaseStock"}>
          {+stock[2]}
        </div>
        <div className="percentage">
          {diff >= 0 ? (
            <img src="/images/up.png" alt="" />
          ) : (
            <img src="/images/down.png" alt="" />
          )}{" "}
          <span>{`${percent}%`}</span>
        </div>
      </div>
      {showButtons && <Buttons stock={stock} found={found} />}
    </div>
  );
}
