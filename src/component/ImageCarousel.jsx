import Slide1 from "../img/Slide1.png";
import Slide2 from "../img/Slide2.png";
import Slide3 from "../img/Slide3.png";

const ImageCarousel = () => {
  return (
    <div className="carousel">
      <ul className="slider">
        <li>
          <input
            type="radio"
            id="slide1"
            className="radio"
            name="slide"
            checked
          />
          <label for="slide1"></label>
          <img src={Slide1} />
        </li>

        <li>
          <input type="radio" id="slide2" className="radio" name="slide" />
          <label for="slide2"></label>
          <img src={Slide2} />
        </li>

        <li>
          <input type="radio" id="slide3" className="radio" name="slide" />
          <label for="slide3"></label>
          <img src={Slide3} />
        </li>
      </ul>
    </div>
  );
};

export default ImageCarousel;
