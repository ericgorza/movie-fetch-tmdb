import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsWallet2, BsGraphUp, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import './Movie.css'

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMG;

const Movie = () => {

  const {id} = useParams()
  const [movieId, setMovie] = useState()

  const getMovie = async(url) =>{
    const res = await fetch(url)
    const data = await res.json();
    setMovie(data) /* Utilizando data pq so tem um */
  };


  useEffect(() => {
    const movieFinalURL = `${movieURL}${id}?${apiKey}`
    getMovie(movieFinalURL)
  },[]);

  return (
    <div>
      {movieId &&
      <div>
        <img src={imgURL + movieId.poster_path} alt={movieId.title} />
        <h2>{movieId.title}</h2>
        <p className="tagline">{movieId.tagline}</p>
        <div className='info'>
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{movieId.budget}</p>
        </div>
        <div className='info'>
            <h3>
              <BsGraphUp /> Receita
            </h3>
            <p>{movieId.revenue}</p>
        </div>
        <div className='info'>
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movieId.budget}</p>
        </div>
        <div className='info'>
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movieId.overview}</p>
        </div>
      </div>
      }

    </div>
  )
}

export default Movie;