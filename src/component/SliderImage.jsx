import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";

const SliderImage = (images) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [urlString, setUrlString] = useState(images.images[0]);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
    setUrlString(images.images[currentSlide]);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div
      className="imgslider"
      style={{
        backgroundImage: `url(${urlString})`,
      }}
    >
      <h1>Collection of retro games</h1>
      <h3>Play a number of Nintendo 64 classic games</h3>
    </div>
  );
};

export default SliderImage;
