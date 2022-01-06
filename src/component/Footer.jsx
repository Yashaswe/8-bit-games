import Fb from "../img/icons/social/fb.png";
import Ig from "../img/icons/social/ig.png";
import Twitter from "../img/icons/social/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <span>Follow us on:</span>
        <img src={Fb} className="social_icons" />
        <img src={Ig} className="social_icons" />
        <img src={Twitter} className="social_icons" />
      </div>
      <div>Developed by: Yashaswe</div>
    </div>
  );
};

export default Footer;
