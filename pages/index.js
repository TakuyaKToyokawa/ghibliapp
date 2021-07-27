import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';

export default function Home() {
  // all useStates
  const [films, setFilms] = useState([]);

  // GET request for films
  const GetFilms = async () => {
    let resp = await axios.get(
      'https://ghibliapi.herokuapp.com/films'
    )
    setFilms(resp.data)
  }

  //Sorting functions for films
  const SortByRunningTime = () => {
    const copy = [...films]
    setFilms(copy.sort((a, b) => a.running_time - b.running_time));
  };
  
  const SortByReleaseDate = () => {
    const copy = [...films]
    setFilms(copy.sort((a, b) => a.release_date - b.release_date));
  };
  
  const SortByTitle = () => {
    const copy = [...films]
    setFilms(copy.sort((a, b) => a.title > b.title));
  };
  
  useEffect(() => {
    GetFilms();
  }, []); 

  return (
    <div>

      {films.map((o, i) => {
        return ( <p key={i}><a>{o.title}</a></p> )
      })}

      <button onClick={SortByReleaseDate}>sort release</button>
      <button onClick={SortByRunningTime}>sort running</button>
      <button onClick={SortByTitle}>sort title</button>
      <button onClick={GetFilms}>get title</button>
    </div>
  )
}




