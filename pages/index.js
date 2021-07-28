import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Home() {
  // all useStates
  const [films, setFilms] = useState([]);

  // GET request for films
  const GetFilms = async () => {
    let resp = await axios.get("https://ghibliapi.herokuapp.com/films");
    setFilms(resp.data);
  };

  //Sorting functions for films
  const SortByRunningTime = () => {
    const copy = [...films];
    setFilms(copy.sort((a, b) => a.running_time - b.running_time));
  };

  const SortByReleaseDate = () => {
    const copy = [...films];
    setFilms(copy.sort((a, b) => a.release_date - b.release_date));
  };

  const SortByTitle = () => {
    const copy = [...films];
    setFilms(copy.sort((a, b) => a.title > b.title));
  };

  useEffect(() => {
    GetFilms();
  }, []);

  return (
    <div class="flex flex-col justify-items-center w-full">
      <img class="w-64" src="/logos/ghibli_logo.png" />
      <div class="flex flex-row">
        <Button onClick={SortByReleaseDate} text="sort release"></Button>
        <Button onClick={SortByRunningTime} text="sort running"></Button>
        <Button onClick={SortByTitle} text="sort title"></Button>
      </div>
      <div class="flex flex-col w-full">
        <div class="flex justify-center w-full ">
          <div class="flex flex-wrap w-3/4">
            {films.map((o, i) => {
              return (
                <div class="w-full md:w-1/2 p-4">
                  <Card
                    release_date={o.release_date}
                    title={o.title}
                    description={o.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
