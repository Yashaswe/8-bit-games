import supermariobros from "../img/games/supermariobros.png";
const GameSection = () => {
  const games = [
    {
      id: 1,
      name: "Super Mario Bros",
      img: supermariobros,
      category: "action",
    },
    {
      id: 2,
      name: "Super Mario Bros",
      img: supermariobros,
      category: "action",
    },
    {
      id: 3,
      name: "Super Mario Bros",
      img: supermariobros,
      category: "action",
    },
    {
      id: 4,
      name: "Super Mario Bros",
      img: supermariobros,
      category: "action",
    },
  ];
  return (
    <div className="game_section">
      <h2>All the retro games in once place</h2>
      <div className="games">
        <button className="game_category active">All Games</button>
        <button className="game_category">Action</button>
        <button className="game_category">Adventure</button>
        <button className="game_category">Arcade</button>
        <button className="game_category">Sports</button>
        <button className="game_category">Strategy</button>
      </div>
      <div className="all_games">
        {games.map((game) => (
          <div className="game">
            <div className="frame">
              <img src={game.img}></img>
              <div class="overlay">
                <div class="text">Play</div>
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
