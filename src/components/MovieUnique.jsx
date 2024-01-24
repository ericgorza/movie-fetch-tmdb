import React from 'react'
import {BsWallet2, BsGraphUp, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'


const imgUrl = import.meta.env.VITE_IMG;

export const MovieUnique = ({movie}) => {
  return (
    <div className='movie-unique'>
        <img src={imgUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
        </div>
        <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
        </div>
    </div>
  )
}
