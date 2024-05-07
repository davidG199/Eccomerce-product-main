import { createContext, useState } from "react";

export const GeneralContext = createContext();

export const ContextProvider = ({ children }) => {
  //cart check open and close
  const [cartProduct, setCartProduct] = useState(false);
  const openCartProduct = () => setCartProduct(true);
  const closeCartProduct = () => setCartProduct(false);

  //counter button
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  //add product to cart
  const [product, setProduct] = useState(false);

  const addProduct = () => {
    if (count == 0) {
      alert("enter the quantity of products");
    } else {
      setProduct(true);
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        cartProduct,
        setCartProduct,
        openCartProduct,
        closeCartProduct,
        count,
        setCount,
        incrementCount,
        decrementCount,
        addProduct,
        product,
        setProduct,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
