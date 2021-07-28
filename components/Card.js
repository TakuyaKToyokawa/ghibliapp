import React from "react";

const Card = ({ title, description, release_date, running_time }) => {
  return (
    <div className="shadow-md rounded-2xl transition duration-200 transform hover:-translate-y-1">
      <div className="flex flex-col ">
        <div className="flex relative flex-col bg-white column w-full p-6 h-56">
          <h1 className="flex-initial font-bold text-gray-800 text-xl mb-1">
            {title}
          </h1>
          <p className="flex-initial text-gray-500 mb-4">{release_date} - {running_time}m</p>
          <p className="overflow-y-auto overflow-hidden text-sm pr-2 ">
            {description}
          </p>
          <img className="absolute bottom-3 right-10 w-24 md:right-20 opacity-50"src="/little_totoro.svg"></img>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 h-8 rounded-b-lg"></div>
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
