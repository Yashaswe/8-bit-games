import { useState, useEffect } from "react";
import logo from "../img/8bit-logo.png";

const Header = () => {
  const [bgheader, setBgHeader] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setBgHeader(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
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
              <a href="#">Updates</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
