import React from "react";

const Button = ({ text, onClick, icon }) => {
  return (
    
    <div onClick={onClick} class="w-auto flex flex-row align-center cursor-pointer transition duration-200 text-sm h-14 rounded-lg bg-pink-600 shadow-sm text-white font-bold p-4 mx-2 hover:bg-pink-700  ">
        {icon ? <img class="h-6 mr-4" src={icon}/> : <div/>}
        {text}
    </div>
  );
};

Button.defaultProps = {
    title: "Title",
    description: "Description",
    release_date: "Release Date",
    onClick: () => {}
}

export default Button;
