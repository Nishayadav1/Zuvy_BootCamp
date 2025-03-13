import React, { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <button className="slider-btn" onClick={prevSlide}>❮</button>
      <div className="slider">
        {images.length > 0 && (
          <img src={images[currentIndex].image} alt={images[currentIndex].title} />
        )}
      </div>
      <button className="slider-btn" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;
