import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./App.css";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";

const images = [pic1, pic2, pic3];




const App = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
  <>
    <h1>Carousel Slider</h1>
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={scrollLeft}>
        <FaArrowLeft />
      </button>
      <div className="carousel" ref={carouselRef}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
        ))}
      </div>
      <button className="carousel-btn right" onClick={scrollRight}>
        <FaArrowRight />
      </button>
    </div>
    </>
  );
};

export default App;
