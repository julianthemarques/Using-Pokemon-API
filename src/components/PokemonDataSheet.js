import React from "react";

const PokemonDatasheet = ({
  id,
  image,
  name,
  type,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  _callback,
}) => {
  const style = type + " thumb-container";

  return (
    <div className={style}>
      <div className="number">
        <small>#{id}</small>
      </div>
      <div className="detail-wrapper">
        <div className="left-content">
          <img src={image} alt={name} />
          <h3 className="name">{name}</h3>
          <h3>
            Type: <small>{type}</small>
          </h3>
        </div>
        <div className="right-content">
          <div className="stats">
            <h3>Stats:</h3>
            <h4>
              <span>Hp:</span> <span>{hp}</span>
            </h4>
            <h4>
              <span>Attack:</span> <span>{attack}</span>
            </h4>
            <h4>
              <span>Defense:</span> <span>{defense}</span>
            </h4>
            <h4>
              <span>Special At:</span> <span>{specialAttack}</span>
            </h4>
            <h4>
              <span>Special Def:</span> <span>{specialDefense}</span>
            </h4>
            <h4>
              <span>Speed:</span> <span>{speed}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDatasheet;
