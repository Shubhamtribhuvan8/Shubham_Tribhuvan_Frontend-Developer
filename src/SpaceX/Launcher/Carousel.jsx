import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div>  
    <div style={styles.container}>
      <button style={styles.button} onClick={handlePrevClick}>
      <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt=""  />
      </button>
      <img style={styles.image} src={images[index]} alt="slide" />
      <button style={styles.button} onClick={handleNextClick}>
       <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt=""  />
      </button>
    </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  button: {
    height: "50px",
    width: "50px",
    backgroundColor: "lightgray",
    border: "none",
    borderRadius: "50%",
    outline: "none",
    cursor: "pointer",
    margin: "0 20px",
  },
};

export default Carousel;
