import { useContext } from "react";
import { Nav } from "./components/Nav";
import { ButtonAddCart } from "./components/ButtonAddCart";
import { ContextProvider, GeneralContext } from "./context";
import CounterButton from "./components/CounterButton";
import CartProduct from "./components/CartProduct";
import Carrousel from "./components/Carrousel";
import "./styles/App.css";
import ImageSection from "./components/ImageSection";

function App() {
  const context = useContext(GeneralContext);

  return (
    <ContextProvider>
      <main className="w-full md:w-[75%] h-auto flex  items-center justify-center flex-col">
        <Nav />
        <div className=" w-full h-[1000px] md:px-12 md:py-[72px] grid grid-cols-1 md:grid-cols-2 md:gap-28">
          <ImageSection />
          {context?.carrousel && <Carrousel />}
          <section className="pt-4 md:pt-8 px-5">
            <span className="text-[var(--Orange)] font-bold tracking-wider uppercase">
              Sneaker Company
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-[var(--Dark-grayish-blue)] mt-4 md:mt-10 mb-5">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className=" flex items-center justify-between h-auto mb-4">
              <div className="flex items-center">
                <span className=" text-2xl md:text-3xl font-bold mr-4">$125.00</span>
                <span className="text-[var(--Orange)] font-bold bg-[var(--Orange-transparent)] px-1.5 py-px rounded-md">
                  50%
                </span>
              </div>
              <div className="mt-1.5 mb-0 md:mb-6">
                <span className="line-through text-[var(--Grayish-blue)] ">
                  $250.0
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full h-12 gap-5">
              <CounterButton />
              <ButtonAddCart />
            </div>
          </section>
        </div>
      </main>
      <CartProduct />
    </ContextProvider>
  );
}

export default App;
