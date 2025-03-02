import { useRef } from "react";
import "./App.css"; 
const CarouselSlider = () => {
  const sliderRef = useRef(null);
  const images = [
    "../src/assets/pic1.jpg",
    "../src/assets/pic2.jpeg",
    "../src/assets/pic3.jpeg",
    "../src/assets/pic2.jpeg",
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 200; 
      sliderRef.current.scrollLeft += direction === "next" ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={() => scroll("prev")}>⬅️</button>

      <div ref={sliderRef} className="carousel-track">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} />
        ))}
      </div>

      <button className="carousel-button right" onClick={() => scroll("next")}>➡️</button>
    </div>
  );
};

export default CarouselSlider;
