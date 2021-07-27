import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Card from "../components/Card";
import Button from "@material-ui/core/Button";

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
    <div>
      {films.map((o, i) => {
        return (
          <Card
            release_date={o.release_date}
            title={o.title}
            description={o.description}
          />
        );
      })}
      <button onClick={SortByReleaseDate}>sort release</button>
      <button onClick={SortByRunningTime}>sort running</button>
      <button onClick={SortByTitle}>sort title</button>
      <Button variant="contained">Default</Button>
      <button onClick={GetFilms}>get title</button>
    </div>
  );
}
