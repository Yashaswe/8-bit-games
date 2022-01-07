import supermariobros from "../img/games/supermariobros.png";
import { useState } from "react";

const GameSection = () => {
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
      <h2>All the retro games in once place</h2>
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
          <div className="game" key={game.id}>
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
    </div>
  );
};

export default GameSection;
