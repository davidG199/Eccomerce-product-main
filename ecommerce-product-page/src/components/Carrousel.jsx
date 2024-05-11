import { useContext } from "react";
import { GeneralContext } from "../context";
import IconClose from "./icons/IconClose"
import "../styles/index.css"

function Carrousel() {
  const {togleCarrousel, images} = useContext(GeneralContext);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="flex flex-col justify-center items-center">

      <span className=" ml-auto mb-5">
        <IconClose
        fill = "white"
        className="icon-close cursor-pointer"
        onClick={togleCarrousel}
        width={24}
        height={24}
        />
      </span>

        <div>
            <img 
            src={images.slides.image1} 
            alt="slide"
            className="rounded-xl h-[420px]"
            color="white"
            />
        </div>

        
        <div className="flex flex-row gap-8 mt-8">
          <figure className="h-20 w-20 border-2 border-[var(--Orange)] rounded-xl bg-white">
            <img
              src={images.slidesThumbnail.thumbnail1}
              alt="thumbnail-1"
              className=" h-full w-full opacity-30 cursor-pointer rounded-xl"
              onClick={() => togleCarrousel()}
            />
          </figure>
          <figure className="bg-white rounded-xl h-20 w-20">
            <img
              src={images.slidesThumbnail.thumbnail2}
              alt="thumbnail-2"
              className="rounded-xl h-full w-full hover:opacity-30  cursor-pointer"
              onClick={() => togleCarrousel()}
            />
          </figure>
          <figure className="bg-white rounded-xl h-20 w-20">
            <img
              src={images.slidesThumbnail.thumbnail3}
              alt="thumbnail-3"
              className="rounded-xl h-full w-full hover:opacity-30 cursor-pointer"
              onClick={() => togleCarrousel()}
            />
          </figure>
          <figure className="bg-white rounded-xl h-20 w-20">
            <img
              src={images.slidesThumbnail.thumbnail4}
              alt="thumbnail-4"
              className="rounded-xl h-full w-full hover:opacity-30 cursor-pointer"
              onClick={() => togleCarrousel()}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
