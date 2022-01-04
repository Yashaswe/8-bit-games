import Mario from "../img/games/Mario.png";
const About = () => {
  return (
    <div className="about-8-bit-games">
      <div className="about_content">
        <h2>About 8-Bit Games</h2>
        <br></br>
        <p>
          8-Bit games provides free retro games on-site for everyone to play.
          Bringing back nostalgic memories of NES classsic games online
        </p>
      </div>
      <div className="mario_img">
        <img src={Mario}></img>
      </div>
    </div>
  );
};

export default About;
