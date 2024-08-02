import React from 'react';
import { useGlobalContext } from './context';
import {NavLink} from 'react-router-dom';
import '../styles/Movies.css';

function Movies () {
  const {movie} = useGlobalContext();

  // if(isLoading){
  //   return <>
  //     <div >
  //       <div className='load-mv'>Loading...</div>
  //     </div>
  //   </>
  // }


    return <>
      <section className='movie-page'>
        <div className='grid grid-4-col'>
      {movie.map((currMovie) => {
        const {imdbID, Title, Poster} = currMovie;
        const movieName = Title.substring(0,15);
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID} > 
             <div className='card'>
               <div className='card-info'>
                  <h2 className='title'>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                  <img src={Poster} alt={imdbID}></img>
               </div>
             </div>
          </NavLink>
        )
      })} </div>
      </section>
    </>
}

export default Movies; 