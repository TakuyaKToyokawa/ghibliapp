import React from "react";

const Card = ({ title, description, release_date, running_time }) => {
  return (
    <div class="shadow-md rounded-2xl">
      <div class="flex flex-col ">
        <div class="flex relative flex-col bg-white column w-full p-6 h-56">
          <h1 class="flex-initial font-bold text-gray-800 text-xl mb-1">
            {title}
          </h1>
          <p class="flex-initial text-gray-500 mb-4">{release_date} - {running_time}m</p>
          <p class="overflow-y-auto overflow-hidden text-sm pr-2 ">
            {description}
          </p>
        </div>
        <div class="bg-gradient-to-r from-green-500 to-green-600 h-8 rounded-b-lg"></div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: "Title",
  description: "Description",
  release_date: "Release Date",
  running_time: "Running Time"
};

export default Card;
