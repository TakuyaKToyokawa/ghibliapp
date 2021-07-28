import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Card from "../components/Card";
import Button from "../components/Button";
import RoundButton from "../components/RoundButton";
import BackgroundAnimation from "../components/BackgroundAnimation";

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
    setFilms(
      copy.sort(function (a, b) {
        return a.title === b.title ? 0 : a.title < b.title ? -1 : 1;
      })
    );
  };

  useEffect(() => {
    GetFilms();
  }, []);

  return (
    <>
      {/* loading animation */}
      <div
        id="home"
        className="loading absolute flex flex-col w-screen h-screen justify-center items-center z-40"
      >
        <img className="w-64" src="/logos/ghibli_logo.png"></img>
        <h1 className="text-gray-800 text-xl pt-6 font-bold">Ghibli Films.</h1>
        <p>Your one stop for all classic Ghibli films.</p>
      </div>
      <main className="background flex flex-col justify-center bg-gray-50">
        <div className="flex justify-center my-8">
          <img className="w-64 invert-0" src="/logos/ghibli_logo.png" />
        </div>
        <div className="flex flex-col fixed w-full md:w-auto h-24 z-20 bottom-0 md:top-10 md:right-10 mb-8 items-center md:items-end">
          <p className="font-bold bg-white p-2 rounded-xl shadow-md mb-3 md:pb-3 md:bg-transparent md:shadow-none">
            Sort By...
          </p>
          <div className="flex flex-row justify-center md:justify-none md:w-auto">
            <Button
              onClick={SortByReleaseDate}
              icon="/calendar.svg"
              text="Release"
            ></Button>
            <Button
              onClick={SortByRunningTime}
              icon="/clock.svg"
              text="Movie Length"
            ></Button>
            <Button
              onClick={SortByTitle}
              icon="/pencil.svg"
              text="Title"
            ></Button>
          </div>
        </div>
        <div className="fixed top-10 sm:bottom-7 sm:top-auto right-10 z-20">
          <RoundButton href="#home" icon="/cheveron-up.svg" />
        </div>
        <div className="flex flex-col w-full z-10">
          <div className="flex justify-center w-full ">
            <div className="flex flex-wrap w-5/6">
              {films.map((o, i) => {
                return (
                  <div key={i} className="w-full md:w-1/2 p-4">
                    <Card
                      key={i}
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
        <div className="h-12"></div>
        <BackgroundAnimation />
        <img className="fixed bottom-0 w-full" src="/mountain.png" />
      </main>
    </>
  );
}
