import logo from "./logo.svg";
import Slide1 from "../src/img/Slide1.png";
import Slide2 from "../src/img/Slide2.png";
import Slide3 from "../src/img/Slide3.png";
import ImageSlider from "../src/component/ImageSlider";
import SliderImage from "../src/component/SliderImage";
import GameSection from "./component/GameSection";
import About from "./component/About";
import Reviews from "./component/Reviews";
import Newsletter from "./component/Newsletter";
import "./index.css";
import { useState } from "react";

function App() {
  const [bgheader, setBgHeader] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setBgHeader(true);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className="App">
      <body>
        <header className={bgheader ? "active" : ""}>
          <div className="header_content">
            <img src={logo} width="80px" height="80px"></img>
            <nav>
              <ul>
                <li>Games</li>
                <li>About</li>
                <li>Updates</li>
              </ul>
            </nav>
          </div>
        </header>
        <SliderImage images={[Slide1, Slide2, Slide3]}></SliderImage>
        <GameSection></GameSection>
        <About></About>
        <Reviews></Reviews>
        <Newsletter></Newsletter>
      </body>
    </div>
  );
}

export default App;
