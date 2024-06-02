import { useContext, useState } from "react";
import { GeneralContext } from "../context";
import IconClose from "./icons/IconClose";
import NextIcon from "./icons/NextIcon";
import PreviousIcon from "./icons/PreviousIcon";
import "../styles/index.css";

function Carrousel() {
  const { togleCarrousel, images } = useContext(GeneralContext);
  const [curr, setCurr] = useState(0);

  const slidesArray = Object.values(images.slides);
  const prev = () =>
    setCurr((curr) => (curr == 0 ? slidesArray.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr == slidesArray.length - 1 ? 0 : curr + 1));

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="flex flex-col justify-center items-center">
        <span className=" ml-auto mb-5">
          <IconClose
            fill="white"
            className="icon-close cursor-pointer"
            onClick={togleCarrousel}
            width={24}
            height={24}
          />
        </span>
        {/* images render */}
        <div className=" overflow-hidden relative">
          <div className="flex transition-transform ease-out duration-500">
            {slidesArray.map((item, index) => {
              return (
                <img
                  src={item}
                  className={`rounded-xl h-[420px] ${
                    index === curr ? "block" : "hidden"
                  }`}
                  alt="slide"
                  key={index}
                />
              );
            })}
          {/* buttons carrousel */}
        </div>
          <div className=" absolute inset-0 flex items-center justify-between">
            <button className=" p-4 rounded-full shadow bg-white">
              <PreviousIcon className="icon-carrousel" onClick={prev} />
            </button>
            <button className=" p-4 rounded-full shadow bg-white ">
              <NextIcon className="icon-carrousel" onClick={next} />
            </button>
          </div>
          </div>
        {/* images thumbnail */}
        <div className="flex flex-row gap-8 mt-8">
          {Object.values(images.slidesThumbnail).map((item, index) => {
            return (
              <figure
                className={` h-[70px] w-[70px] rounded-xl bg-white ${
                  index === curr ? "border-2 border-[var(--Orange)]" : ""
                }`}
              >
                <img
                  key={index}
                  src={item}
                  alt={`thumbnail-${index + 1}`}
                  className={`h-full w-full cursor-pointer rounded-xl ${
                    index === curr ? "opacity-30" : ""
                  }`}
                  onClick={() => setCurr(index)}
                />
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
