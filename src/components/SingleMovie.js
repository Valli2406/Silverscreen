import React, {useState, useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {API_URL} from './context';
import '../styles/SingleMovie.css';

function SingleMovie() {
  const {id} = useParams();
  
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");


   const getMovies = async(url) => {
     setIsLoading(true);
       try{
           const res = await fetch(url);
           const data = await res.json();
           console.log(data);
           if(data.Response === "True")
           {
              setIsLoading(false);
              setMovie(data);
              
           } 
     }
       catch(error){
           console.log(error);
       }
   }

    useEffect(() => {
    
        let timerOUt = setTimeout(() => {
           getMovies(`${API_URL}&i=${id}`);
        }, 1000);

      return () => clearTimeout(timerOUt);  
    }, [id]);

    
    if(isLoading){
      return <>
        {/* <body className='load'>
          <div className='loading'>Loading...</div>
        </body> */}
        <div className='load-body'>
        <div id="loading"></div>
        </div>
      </>
    }


    return( 
       <section className='singlemv-section'>
         <div className='movie-card'>
           <figure>
             <img src={movie.Poster} alt="" />
           </figure>

           <div className='singlmovie-content'>
             <p className='single-title'>{movie.Title}</p>
             <p className='card-text'>{movie.Actors}</p>
             <p className='card-text'>{movie.Released}</p>
             <p className='card-text'>{movie.Genre}</p>
             <p className='card-text'>{movie.imdbRating}/10</p>
             <p className='card-text'>{movie.Country}</p>
             <p className='card-text'>{movie.Language}</p>
             <NavLink to="/" className='back-btn'>Go Back</NavLink>
           </div>
         </div>
       </section>
    
    )
}

export default SingleMovie;