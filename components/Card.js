import React from "react";

const Card = ({ title, description, release_date }) => {
  return (
    <div class="flex flex-col shadow-md rounded-lg column w-full p-6 h-64">
      <h1 class="flex-initial font-bold text-gray-800 text-xl mb-1">{title}</h1>
      <p class="flex-initial text-gray-500 mb-4">{release_date}</p>
      <p class="overflow-y-auto overflow-hidden text-sm pr-2 ">{description}</p>
    </div>
  );
};

Card.defaultProps = {
    title: "Title",
    description: "Description",
    release_date: "Release Date"
}

export default Card;
