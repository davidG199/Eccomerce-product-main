import img1 from "../../public/images/image-product-1.jpg";

function Carrousel() {
  const sliders = [
    "../../public/images/image-product-1.jpg",
    "../../public/images/image-product-2.jpg",
    "../../public/images/image-product-3.jpg",
    "../../public/images/image-product-4.jpg",
  ];

  const slidersThumbnail = [
    "../../public/images/image-product-1-thumbnail.jpg",
    "../../public/images/image-product-2-thumbnail.jpg",
    "../../public/images/image-product-3-thumbnail.jpg",
    "../../public/images/image-product-4-thumbnail.jpg",
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img src={sliders[0]} alt="slider-1" className="rounded-xl h-[420px] cursor-pointer" />
      </div>
      <div className="flex gap-8 mt-8">
        <figure className="border-2 border-[var(--Orange)] rounded-xl">
        <img src={slidersThumbnail[0]} alt="thumbnail1-1" className="rounded-xl h-20 w-20 opacity-30 cursor-pointer"/>
        </figure>
        <img src={slidersThumbnail[1]} alt="thumbnail1-2" className="rounded-xl h-20 w-20 hover:opacity-30 cursor-pointer" />
        <img src={slidersThumbnail[2]} alt="thumbnail1-3" className="rounded-xl h-20 w-20 hover:opacity-30 cursor-pointer"/>
        <img src={slidersThumbnail[3]} alt="thumbnail1-4" className="rounded-xl h-20 w-20 hover:opacity-30 cursor-pointer"/>
      </div>
    </div>
  );
}

export default Carrousel;
