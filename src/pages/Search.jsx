import React from 'react'
import { useState, useEffect } from 'react';
import { MovieCard } from '../components/MovieCard'
import { useSearchParams } from 'react-router-dom';


const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import '../components/MovieCard.css'

const Search = () => {

  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async(url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Erro ao buscar filme.', error);
    }
  };

  useEffect(() => {
    if (query !== null && query !== undefined){
    const searchWithQueryURL = `${searchURL}?${apiKey}&${query}`;
    getSearchedMovies(searchWithQueryURL);
  }},[query]);

  return (
    <div className='container'>
        <h2 className='title'>
          Resultado da busca: <span className='query-text'>{query}</span>
        </h2>
        <div className='movies-contaier'>
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} name={movie.title || 'No title'} movie={movie}/>)}
        </div>
    </div>
  )
};

export default Search;