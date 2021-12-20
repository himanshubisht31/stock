import React, { useEffect, useState, useContext } from "react";
// import { v4 as uuidv4 } from "uuid";
import Buttons from "./Buttons";
import { wishListContext } from "../Context/WishListContext";

export default function SearchList({ stock }) {
  const [showButtons, setShowButtons] = useState(false);
  const { wish, setWish } = useContext(wishListContext);
  const [found, setFound] = useState(false);

  const handleFound = () => {
    setFound(found=>true);
    console.log(found);
  }


  useEffect(() => {
    wish.map((ele) => {
      if (ele[0].split("::")[0] === stock[0].split("::")[0]) {
        // setFound(true);
        handleFound()
        console.log(stock[0].split("::")[0])
        // console.log(found);
      }
      else setFound(false)
    });
  }, [stock]);

  // useEffect(() => (
  //   wish.map(ele => {
  //     if (ele[0].split("::")[0] === stock[0].split("::")[0]) setFound(true)
  //   }), [])

  return (
    <div
      // key={uuidv4()}
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
      {showButtons && <Buttons found={found} stock={stock} />}
    </div>
  );
}
