import React from "react";
import Carousel from "./Carousel";

const images = [
  "https://is5-ssl.mzstatic.com/image/thumb/nc6_OLkCV3TgiHCklTQbMg/1679x945sr.webp",
  "https://is3-ssl.mzstatic.com/image/thumb/Gn-M-XkgARndHzKMUb_6dA/1679x945sr.webp",
  "https://is2-ssl.mzstatic.com/image/thumb/rV4S9xWc5p3ow4CuIZ5sTg/1679x945sr.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/l62wV9iq0Lhrvd1VpWTLzQ/1679x945sr.webp",
];

const Carsel = () => {
  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};

export default Carsel;
