import { Nav } from "./components/Nav";
import { ButtonAddCart } from "./components/ButtonAddCart";
import { ContextProvider } from "./context";
import CounterButton from "./components/CounterButton";

import "./styles/App.css";
import CartProduct from "./components/CartProduct";

function App() {
  return (
    <ContextProvider>
      <main className=" w-[75%] flex  items-center justify-center flex-col">
        <Nav />

        <div className=" w-full px-12 py-16 grid grid-cols-2 gap-28 ">
          {/* images section */}
          <section className=""></section>
          <section className="pt-8">
            <span className="text-[var(--Orange)] font-bold tracking-wider uppercase">
              Sneaker Company
            </span>

            <h1 className=" text-5xl font-bold mt-4">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-[var(--Dark-grayish-blue)] mt-10 mb-5">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex items-center">
              <span className="text-3xl font-bold mr-4">$125.00</span>
              <span className="text-[var(--Orange)] font-bold bg-[var(--Orange-transparent)] px-1.5 py-px rounded-md">50%</span>
            </div>
            <div className="mt-1.5 mb-6">
              <span className="line-through text-[var(--Grayish-blue)] ">$250.0</span>
            </div>
            <div className="flex w-full h-12 gap-5">
              <CounterButton/>
              <ButtonAddCart/>
            </div>
          </section>
        </div>
      </main>
        <CartProduct/>
    </ContextProvider>
  );
}

export default App;
