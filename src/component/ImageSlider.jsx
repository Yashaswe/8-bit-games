import React, { useState, useEffect } from "react";

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <div className="indicatorWrapper">
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <div
            className="dot"
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </div>
  );
};

const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 5000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="wrapper" {...props}>
      {images.map((imageUrl, index) => (
        <div
          className="slide"
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        ></div>
      ))}
      <div className="gradient" />
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
      <div className="childrenWrapper">{children}</div>
    </div>
  );
};

export default ImageSlider;
