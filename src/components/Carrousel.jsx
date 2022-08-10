import carrouselPrevious from "../assets/carrousel_previous.svg";
import carrouselNext from "../assets/carrousel_next.svg";
import { useState } from "react";

export default function Carrousel({ pictures }) {
  const length = pictures.length;

  // carrousel index is the index the use has naviagated to using the right and left arrows
  const [carrouselIndex, setCarrouselIndex] = useState(0);

  // array index is the position of the picture that the carrousel should display
  let arrayIndex = ((carrouselIndex % length) + length) % length;

  return (
    <div className="carrousel">
      <img className="carrousel__image" src={pictures[arrayIndex]} alt="" />
      <div className={length === 1 ? "hidden" : "carrousel__controls"}>
        <img
          onClick={() => setCarrouselIndex(carrouselIndex - 1)}
          className="carrousel__previous"
          src={carrouselPrevious}
          alt="show previous button"
        />
        <img
          onClick={() => setCarrouselIndex(carrouselIndex + 1)}
          className="carrousel__next"
          src={carrouselNext}
          alt="show next button"
        />
      </div>
    </div>
  );
}
