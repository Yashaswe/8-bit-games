import Slide1 from "../src/img/Slide1.png";
import Slide2 from "../src/img/Slide2.png";
import Slide3 from "../src/img/Slide3.png";

import Header from "../src/component/Header";
import GameSection from "./component/GameSection";
import About from "./component/About";
import Reviews from "./component/Reviews";
import Newsletter from "./component/Newsletter";
import Footer from "./component/Footer";
import ImageCarousel from "./component/ImageCarousel";
import Slider from "./component/Slider";
import "./index.css";
function App() {
  return (
    <div className="App">
      <body>
        <Header />
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
