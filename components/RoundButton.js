import React from "react";

const RoundButton = ({ onClick, icon, href }) => {
  return (
    <a onClick={onClick} href={href} class="w-auto flex flex-row justify-center align-center cursor-pointer transition duration-200 h-auto rounded-full bg-gray-600 shadow-sm text-white font-bold p-3 mx-2 hover:bg-gray-700">
        {icon ? <img class="h-6  " src={icon}/> : <div/>}
    </a>
  );
};

RoundButton.defaultProps = {
    onClick: () => {},
    href: ""
}

export default RoundButton;
