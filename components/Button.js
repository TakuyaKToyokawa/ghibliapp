import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div onClick={onClick} class="w-auto text-sm h-auto rounded-lg bg-blue-500 text-white p-4 mx-10">
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
