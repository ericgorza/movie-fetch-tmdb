import React from 'react'
import { useState, useEffect } from 'react';
import { MovieCard } from '../components/MovieCard'

import './MovieGrid.css'

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRateMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results);
    };

    useEffect(() => {

        const topRatedUrl = `${movieURL}top_rated?${apiKey}`
        getTopRateMovies(topRatedUrl)

    },[])

    return (
    <div className='container'>
        <h2 className='title'>Melhores filmes:</h2>
        <div className='movies-contaier'>
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
  )
}

export default Home;