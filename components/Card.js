import React from "react";

const Card = ({ title, description, release_date }) => {
  return (
    <div class="flex">
      <div>{title}</div>
      <div>{description}</div>
      <div>{release_date}</div>
    </div>
  );
};

Card.defaultProps = {
    title: "Title",
    description: "Description",
    release_date: "Release Date"
}

export default Card;
