import React, { useContext, useState } from "react";
import "./Company.css";
import CompanyList from "./CompanyList";
import { wishListContext } from "../Context/WishListContext";
import { v4 as uuidv4 } from "uuid";

export default function Company() {
  const { wish, handleWishListChange, handleDelete } =
    useContext(wishListContext);

  return (
    <>
      {wish.map((stock) => (
        <CompanyList
          // company={ele[0].split("::")[0]}
          // pre={+ele[1]}
          // current={+ele[2]}
          stock={stock}
          key={uuidv4()}
        />
      ))}
    </>
  );
}
