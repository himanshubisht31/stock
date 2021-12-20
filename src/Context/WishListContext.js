import { createContext, useState } from "react";

export const wishListContext = createContext();

function WishListProvider({ children }) {
  const [wish, setWish] = useState([
    ["MAFSETF::NSE", 17.53, 17.63],
    ["SBIETFCON::NSE", 70.74, 70.58],
  ]);

  const handleWishListChange = () => {
    setWish(wish);
  };
  return (
    <wishListContext.Provider value={{ wish, handleWishListChange }}>
      {children}
    </wishListContext.Provider>
  );
}

export default WishListProvider;
