import React from 'react';
import { useGlobalContext } from './context';
import '../styles/search.css';

function Search () {
  const {query, setQuery, isError } = useGlobalContext();
      return <>
        <section className='search'>
           <h2>Find Your Flick!</h2>
           <form action='#' onSubmit={(e) => e.preventDefault()}>
             <input className='input' type="text" placeholder="search here..." value={query}
              onChange={(e)=> setQuery(e.target.value)}
             />
           </form>
           <div className='card-error'>
             <p>{isError.show && isError.msg}</p>
           </div>
        </section>
      </>
}

export default Search;