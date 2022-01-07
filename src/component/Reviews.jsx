import { useState, useEffect } from "react";
import Review1 from "../img/review/review1.png";
import Review2 from "../img/review/review2.png";
import Review3 from "../img/review/review3.png";
import Unchecked from "../img/icons/unchecked_star.png";
import Checked from "../img/icons/checked_star.png";
const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const stars = [];

  const reviews = [
    {
      id: 0,
      name: "Johan Smith",
      img: Review3,
      star: 5,
      quote: "Retro Game is the best!",
      review:
        "Best retro game platform ever. Just click and start playing. Reminds me of my childhood. So nostalgic.",
    },
    {
      id: 1,
      name: "Rudolf Klinman",
      img: Review1,
      star: 4,
      quote: "One word! Amazing!",
      review:
        "I think I cried when I played Super Mario. I hope you all add more games",
    },
    {
      id: 2,
      name: "Karen Brown",
      img: Review2,
      star: 3,
      quote: "Could be better!",
      review:
        "I don't know why, but this website could be better. I mean I love the games but could be better.",
    },
  ];
  const length = reviews.length;
  function checkedOrNot(starNo) {
    for (let i = 0; i < starNo; i++) {
      stars.push(
        <span className="star active">
          <img src={Checked} />
        </span>
      );
    }
    for (let i = 0; i < 5 - starNo; i++) {
      stars.push(
        <span className="star">
          <img src={Unchecked} />
        </span>
      );
    }
    return <div>{stars}</div>;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);

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
    <div className="review">
      <h1>Loved by everyone</h1>
      <div className="carousel">
        {reviews.map((review, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div>
                  <img src={review.img} className="review_image"></img>
                  <h3>{review.name}</h3>
                  <div>{checkedOrNot(review.star)}</div>
                  <p>{review.quote}</p>
                  <p>{review.review}</p>
                </div>
              )}
            </div>
          );
        })}
        <div className="img_slider"></div>
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
    </div>
  );
};

export default Reviews;
