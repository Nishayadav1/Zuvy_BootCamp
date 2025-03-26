import React, { useRef } from "react";
import './ CatCarousel.css'
const CatCarousel = () => {
  const catList = Array(5).fill(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStcnOPyraRL7X9Y23-wrRXy4_qojL4xMG1OgC-bMkzl61X3fY2oKOkcro3DgE0Rfkmz4&usqp=CAU"
  );

  const carouselRef = useRef(null);
  const currentIndex = useRef(0);

  const handleNext = () => {
    if (currentIndex.current < catList.length - 1) {
      currentIndex.current += 1;
      scrollToImage();
    }
  };

  const handlePrev = () => {
    if (currentIndex.current > 0) {
      currentIndex.current -= 1;
      scrollToImage();
    }
  };

  const scrollToImage = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const imageWidth = carousel.firstChild.clientWidth;
      carousel.scrollTo({
        left: imageWidth * currentIndex.current,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      <button onClick={handlePrev} className="button">◀</button>
      <div ref={carouselRef} className="carousel">
        {catList.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className="image" />
        ))}
      </div>
      <button onClick={handleNext} className="button">▶</button>
    </div>
  );
};

export default CatCarousel;
