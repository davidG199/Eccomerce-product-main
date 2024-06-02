import React, { useContext } from "react";
import { GeneralContext } from "../context";
import Carrousel from "../components/Carrousel";

function ImageSection() {
  const { images, togleCarrousel, carrousel } = useContext(GeneralContext);

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <div>
          <img
            src={images.slides.image1}
            alt="slider-1"
            className="md:rounded-xl h-[420px] cursor-pointer"
            onClick={() => togleCarrousel()}
          />
        </div>

        <div className="md:flex flex-row gap-8 mt-8 hidden">
          <figure className="border-2 border-[var(--Orange)] rounded-xl">
            <img
              src={images.slidesThumbnail.thumbnail1}
              alt="thumbnail-1"
              className=" h-20 w-20 opacity-30 cursor-pointer"
              onClick={() => togleCarrousel()}
            />
          </figure>
          <figure>
            <img
              src={images.slidesThumbnail.thumbnail2}
              alt="thumbnail-2"
              className="rounded-xl h-20 w-20 hover:opacity-30  cursor-pointer"
              onClick={() => togleCarrousel()}
            />
          </figure>
          <figure>
            <img
              src={images.slidesThumbnail.thumbnail3}
              alt="thumbnail-3"
              className="rounded-xl h-20 w-20 hover:opacity-30 cursor-pointer"
              onClick={() => togleCarrousel()}
            />
          </figure>
          <figure>
            <img
              src={images.slidesThumbnail.thumbnail4}
              alt="thumbnail-4"
              className="rounded-xl h-20 w-20 hover:opacity-30 cursor-pointer"
              onClick={() => togleCarrousel()}
            />
          </figure>
        </div>
      </div>
      {carrousel && <Carrousel />}
    </section>
  );
}

export default ImageSection;
