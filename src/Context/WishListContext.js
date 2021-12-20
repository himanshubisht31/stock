import { createContext, useState } from "react";

export const wishListContext = createContext();

function WishListProvider({ children }) {
  const [wish, setWish] = useState([
    // ["MAFSETF::NSE", 17.53, 17.63],
    // ["SBIETFCON::NSE", 70.74, 70.58],
  ]);

  const handleWishListChange = (arg) => {
    setWish([...wish, arg]);
    console.log([...wish, arg]);
  };

  const handleDelete = (arg) => {
    let wishUpdated = wish.filter(
      (ele) => ele[0].split("::")[0] !== arg[0].split("::")[0]
    );
     setWish(wishUpdated);
  }

  return (
    <wishListContext.Provider
      value={{ wish, handleWishListChange, handleDelete }}
    >
      {children}
    </wishListContext.Provider>
  );
}

export default WishListProvider;
