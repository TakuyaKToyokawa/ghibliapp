import React from "react";

const Button = ({ text, onClick, icon }) => {
  return (   
    <div onClick={onClick} className="w-auto flex flex-row justify-center align-center cursor-pointer transition duration-200 text-sm h-auto rounded-lg bg-pink-600 shadow-sm text-white font-bold p-3 sm:px-4 mx-2 hover:bg-pink-700">
        {icon ? <img className="h-6 mx-4 sm:mr-4 sm:mx-0" src={icon}/> : <div/>}
        <div className="hidden sm:block">{text}</div>
    </div>
  );
};

Button.defaultProps = {
    text: "Text",
    onClick: () => {}
}

export default Button;
