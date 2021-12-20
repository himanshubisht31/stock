import React, { useContext, useState } from "react";
import "./Company.css";
import CompanyList from "./CompanyList";
import { wishListContext } from "../Context/WishListContext";
import { v4 as uuidv4 } from "uuid";

export default function Company() {
  // const [wish, setWish] = useState([
  //   ["MAFSETF::NSE", 17.53, 17.63],
  //   ["SBIETFCON::NSE", 70.74, 70.58],
  // ]);
  const { wish, setWish } = useContext(wishListContext);

  return (
    <>
      {wish.map((ele) => (
        <CompanyList
          company={ele[0].split("::")[0]}
          pre={+ele[1]}
          current={+ele[2]}
          key={uuidv4()}
        />
      ))}
    </>
  );
}
