import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Card from "../components/Card";
import Button from "../components/Button";
import Character from "../components/Character";

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
    <div class="background flex flex-col justify-center w-full bg-gray-50">
      <div class="w-full align-center justify-center">
        <img class="w-64 invert-0" src="/logos/ghibli_logo.png" />
      </div>
      <div class="flex flex-row fixed top-10 right-10 p-8 bg-white shadow-md rounded-2xl z-20">
        <Button onClick={SortByReleaseDate} text="Sort Release"></Button>
        <Button onClick={SortByRunningTime} text="Sort Running"></Button>
        <Button onClick={SortByTitle} text="Sort Title"></Button>
      </div>
      <div class="flex flex-col w-full z-10">
        <div class="flex justify-center w-full ">
          <div class="flex flex-wrap w-5/6">
            {films.map((o, i) => {
              return (
                <div class="w-full md:w-1/2 p-4">
                  <Card
                    release_date={o.release_date}
                    title={o.title}
                    description={o.description}
                    running_time={o.running_time}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="box z-0">
        <img src="/leaf.png"></img>
        <img src="/leaf.png"></img>
        <img src="/leaf.png"></img>
        <img src="/leaf.png"></img>
        <img src="/leaf.png"></img>
        <img src="/leaf.png"></img>
        <img src="/leaf.png"></img>
        <img src="/leaf.png"></img>
        <img src="/leaf.png"></img>
      </div>
      <img class="fixed bottom-0"src="/mountain.png"/>
    </div>
  );
}
