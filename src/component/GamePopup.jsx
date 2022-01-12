const GamePopup = (prop) => {
  console.log(prop);
  return (
    <div className="popup_box">
      <div className="popup">
        <div className="left_popup">
          <img src={prop.item.img}></img>
        </div>
        <div className="right_popup">
          <button className="close-icon" onClick={prop.onClose}>
            x
          </button>
          <h3>{prop.item.name}</h3>
          <p>{prop.item.category}</p>
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
};

export default GamePopup;
