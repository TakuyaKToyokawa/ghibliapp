import React from "react";

const Character = ({ text, onClick }) => {
  return (
    <img class="absolute bottom-0 right-0" src="/cat.png"></img>
  );
};

Character.defaultProps = {

}

export default Character;
