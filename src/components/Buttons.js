import React from "react";

function Buttons({ types, setCurrentType }) {
  return (
    <>
      {types.map((type, i) => {
        return (
          <button
            className={type + "-opacity"}
            key={i}
            onClick={() => setCurrentType(type)}
          >
            {type}
          </button>
        );
      })}
    </>
  );
}

export default Buttons;
