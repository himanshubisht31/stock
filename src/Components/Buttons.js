import React, { useContext } from "react";
import "./Buttons.css";
import { wishListContext } from "../Context/WishListContext";


export default function Buttons({ found,stock }) {
    const { wish, setWish } = useContext(wishListContext);


   const handleClick = () => {
    setWish(wish => [...wish, stock])
  };

  return (
    <div className="buttonContainer">
      <button>
        <img src="/images/graph.png" alt="" />
      </button>

      <button>
        <img src="/images/B.png" alt="" />
      </button>
      <button>
        <img src="/images/S.png" alt="" />
      </button>
      <button>
        {found ? (
          <img src="/images/delete.png" alt="" />
        ) : (
          <img src="/images/add.png" alt="" onClick={ handleClick} />
        )}
      </button>
      <button>
        <img src="/images/info.png" alt="" />
      </button>
    </div>
  );
}