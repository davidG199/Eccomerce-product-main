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

  //carrousel
  const [carrousel, setCarrousel] = useState(false);
  const openCarrousel = () => setCarrousel(true);
  const closeCarrousel = () => setCarrousel(false);

  const images = {
    slides: {
      image1: "../../public/images/image-product-1.jpg",
      image2: "../../public/images/image-product-2.jpg",
      image3: "../../public/images/image-product-3.jpg",
      image4: "../../public/images/image-product-4.jpg",
    },
    slidesThumbnail: {
      thumbnail1: "../../public/images/image-product-1-thumbnail.jpg",
      thumbnail2: "../../public/images/image-product-2-thumbnail.jpg",
      thumbnail3: "../../public/images/image-product-3-thumbnail.jpg",
      thumbnail4: "../../public/images/image-product-4-thumbnail.jpg",
    },
  };

  // change state of carrousel
  const togleCarrousel = () => {
    if (carrousel) {
      closeCarrousel();
    } else {
      openCarrousel();
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
        carrousel,
        setCarrousel,
        openCarrousel,
        closeCarrousel,
        togleCarrousel,
        images,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
