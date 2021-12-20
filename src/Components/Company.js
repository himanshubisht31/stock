import React, { useContext } from "react";
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
        <CompanyList stock={stock} key={uuidv4()} />
      ))}
    </>
  );
}
