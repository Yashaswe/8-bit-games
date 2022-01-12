import supermariobros from "../img/games/supermariobros.png";
import ReactDOM from "react-dom";

import { useState, useEffect } from "react";

function Popup(item) {
  const header = Array.from(document.getElementsByTagName("header"))[0] || null;
  if (header === null) {
    return null;
  } else {
    if (item.isOpen) {
      document.body.style.overflow = "hidden";
      header.style.visibility = "hidden";
      return (
        <div className="popup_box">
          <div className="popup">
            <div className="left_popup">
              <img src={item.data.img}></img>
            </div>
            <div className="right_popup">
              <button className="close-icon" onClick={item.onClose}>
                x
              </button>
              <h3>{item.data.name}</h3>
              <p>{item.data.category}</p>
              <br></br>
              <p>NES release date: October 1985</p>
              <p>Number of players: 2</p>
              <p>Developer: Nintendo</p>
              <br></br>
              <button className="game_category active">Play Game</button>
            </div>
          </div>
        </div>
      );
    } else {
      document.body.style.overflow = "scroll";
      header.style.visibility = "visible";
      return null;
    }
  }
}

const GameSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gameClicked, setGameClicked] = useState([]);
  const clickGame = (game) => {
    togglePopup();
    setGameClicked(game);
  };
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const popupCloseHandler = () => {
    setIsOpen(false);
  };
  const games_data = [
    {
      id: 1,
      items: [
        { id: 1, name: "Super Mario Bros", img: supermariobros },
        { id: 2, name: "Excite Bike", img: supermariobros },
        { id: 3, name: "Pacman", img: supermariobros },
        { id: 4, name: "Castlevania", img: supermariobros },
        { id: 5, name: "Duck Hunt", img: supermariobros },
        { id: 6, name: "The Legend of Zelda", img: supermariobros },
        { id: 7, name: "Mega Man", img: supermariobros },
      ],
    },
    {
      id: 2,
      items: [
        { id: 1, name: "Super Mario Bros", img: supermariobros },
        { id: 2, name: "Excite Bike", img: supermariobros },
      ],
    },
    {
      id: 3,
      items: [
        { id: 1, name: "Castlevania", img: supermariobros },

        { id: 2, name: "The Legend of Zelda", img: supermariobros },
      ],
    },
    {
      id: 4,
      items: [{ id: 1, name: "Mega Man", img: supermariobros }],
    },
    {
      id: 5,
      items: [{ id: 1, name: "Duck Hunt", img: supermariobros }],
    },
    {
      id: 6,
      items: [{ id: 1, name: "Pacman", img: supermariobros }],
    },
  ];

  const [games, setGames] = useState(games_data[0]);

  function showActiveClassName(category_id) {
    let defaultClassName = "game_category";
    if (category_id === games.id) {
      return (defaultClassName += " active");
    }
    return defaultClassName;
  }

  function change_category(category_id) {
    setGames(games_data.find((game) => game.id === category_id));
  }
  return (
    <div className="game_section">
      <h2>All the retro games in one place</h2>
      <div className="games">
        <button
          className={showActiveClassName(1)}
          id="all_games"
          onClick={() => change_category(1)}
        >
          All Games
        </button>
        <button
          className={showActiveClassName(2)}
          onClick={() => change_category(2)}
        >
          Action
        </button>
        <button
          className={showActiveClassName(3)}
          onClick={() => change_category(3)}
        >
          Adventure
        </button>
        <button
          className={showActiveClassName(4)}
          onClick={() => change_category(4)}
        >
          Arcade
        </button>
        <button
          className={showActiveClassName(5)}
          onClick={() => change_category(5)}
        >
          Sports
        </button>
        <button
          className={showActiveClassName(6)}
          onClick={() => change_category(6)}
        >
          Strategy
        </button>
      </div>
      <div className="all_games">
        {games.items.map((game) => (
          <div className="game" key={game.id} onClick={() => clickGame(game)}>
            <div className="frame">
              <img src={game.img}></img>
              <div className="overlay">
                <div className="text">Play</div>
              </div>
            </div>

            <p>{game.name}</p>
          </div>
        ))}
      </div>

      {ReactDOM.createPortal(
        <Popup
          data={gameClicked}
          onClose={popupCloseHandler}
          isOpen={isOpen}
        />,
        document.getElementById("root")
      )}
    </div>
  );
};

export default GameSection;
