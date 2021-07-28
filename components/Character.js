import React from "react";

const Character = ({ text, onClick }) => {
  return (
    <img className="fixed bottom-0 left-0 h-32 md:h-96" src="/cat.png"></img>
  );
};

Character.defaultProps = {

}

export default Character;
