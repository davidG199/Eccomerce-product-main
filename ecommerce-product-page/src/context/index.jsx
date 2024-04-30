import { createContext, useState } from "react";

export const GeneralContext = createContext();

export const ContextProvider = ({ children }) => {
  //card check open and close
  const [cartProduct, setCartProduct] = useState(false);
  const openCartProduct = () => setCartProduct(true)
  const closeCartProduct = () => setCartProduct(false)

  //counter button
  const [count, setCount] = useState(0);

  const incrementCount = () =>{
    setCount (count + 1)
  }

  const decrementCount = () =>{
    if(count > 0){
      setCount(count - 1)
    }
  }

  

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
        decrementCount
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
