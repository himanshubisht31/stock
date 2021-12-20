import React, { useContext, useState } from "react";
import "./SearchBox.css";
import SearchList from "./SearchList";
import { data } from "./data.js";
import { v4 as uuidv4 } from "uuid";

// import { wishListContext } from "../Context/WishListContext";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  // const { wish, setWish } = useContext(wishListContext);
  // const [found, setFound] = useState(false);

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search Stocks..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      {data
        .filter((stock) => {
          if (query === "") return "";
          // else if (stock[0].split("::")[0] === query) {
          //   setFound(true);
          // }
          else if (
            stock[0].split("::")[0].toLowerCase().includes(query.toLowerCase())
          ) {
            return stock;
          }
        })
        .map((stock) => (
          <>
            <SearchList stock={stock} key={uuidv4()} />
          </>
        ))}
    </div>
  );
}
