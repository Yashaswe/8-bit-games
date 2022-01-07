import { useState, useEffect } from "react";
const Slider = (prop) => {
  const [current, setCurrent] = useState(0);
  const length = prop.images.length;
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [current]);

  function nextSlide(slideIndex = current + 1) {
    const newSlideIndex = slideIndex >= length ? 0 : slideIndex;

    setCurrent(newSlideIndex);
  }

  function changeImage(val) {
    setCurrent(val);
  }

  function showActiveButton(button_id) {
    if (button_id === current) {
      return "slidebutton active";
    }
    return "slidebutton";
  }
  return (
    <div className="carousel">
      <h2>Loved by everyone</h2>
      {prop.images.map((image, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={image} className="image"></img>}
          </div>
        );
      })}
      <div className="img_slider">
        <h1>Collection of retro games</h1>
        <h3>Play a number of Nintendo 64 classic games</h3>
      </div>
      <div className="button_container">
        <button
          onClick={() => changeImage(0)}
          className={showActiveButton(0)}
        ></button>
        <button
          onClick={() => changeImage(1)}
          className={showActiveButton(1)}
        ></button>
        <button
          onClick={() => changeImage(2)}
          className={showActiveButton(2)}
        ></button>
      </div>
    </div>
  );
};

export default Slider;
