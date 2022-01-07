import logo from "../src/img/8bit-logo.png";
import Slide1 from "../src/img/Slide1.png";
import Slide2 from "../src/img/Slide2.png";
import Slide3 from "../src/img/Slide3.png";

import SliderImage from "../src/component/SliderImage";
import GameSection from "./component/GameSection";
import About from "./component/About";
import Reviews from "./component/Reviews";
import Newsletter from "./component/Newsletter";
import Footer from "./component/Footer";
import ImageCarousel from "./component/ImageCarousel";
import Slider from "./component/Slider";
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
        <header className={bgheader ? "header_active" : ""}>
          <div className="header_content">
            <img src={logo} width="35px" height="35px"></img>
            <nav>
              <ul>
                <li>
                  <a href="#games">Games</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="/">Updates</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Slider images={[Slide1, Slide2, Slide3]} />
        <div id="games">
          <GameSection />
        </div>

        <div id="about">
          <About />
        </div>
        <Reviews />
        <Newsletter />
        <Footer />
      </body>
    </div>
  );
}

export default App;
