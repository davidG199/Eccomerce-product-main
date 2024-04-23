import { createContext, useState } from "react";

export const GeneralContext = createContext();

export const ContextProvider = ({ children }) => {
  //card check open and close
  const [CartProduct, setCartProduct] = useState(false);
  const openCartProduct = () => setCartProduct(true)
  const closeCartProduct = () => setCartProduct(false)

  return (
    <GeneralContext.Provider
      value={{
        CartProduct,
        setCartProduct,
        openCartProduct,
        closeCartProduct,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
