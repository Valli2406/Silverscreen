
import React, { useContext, useEffect, useState } from 'react';


// context(warehouse)
// AppProvider(delivery boy)
// consumer -- useContext


export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

//provider function;

const AppProvider = ({children}) => {
  
   const [isLoading, setIsLoading] = useState(true);
   const [movie, setMovie] = useState([]);
   const [isError, setIsError] = useState({show: "false", msg: ""});
   const [query, setQuery] = useState("titanic");


   const getMovies = async(url) => {
       setIsLoading(true);
       try{
           const res = await fetch(url);
           const data = await res.json();
           console.log(data);
           if(data.Response === "True")
           {
               setIsLoading(false);
              setMovie(data.Search);
              setIsError({
                show: false,
                msg: ""
            })
           } else {
               setIsError({
                   show: true,
                   msg: data.Error
               })
           }
     }
       catch(error){
           console.log(error);
       }
   }

    useEffect(() => {
    
        let timerOUt = setTimeout(() => {
           getMovies(`${API_URL}&s=${query}`);
        }, 1000);

      return () => clearTimeout(timerOUt);  
    }, [query]);
     return  <AppContext.Provider value={{isLoading, isError, movie, query, setQuery}}>{children}</AppContext.Provider>;
};

//global context function

const useGlobalContext = () => {
    return useContext(AppContext);
}


export {AppContext, AppProvider, useGlobalContext};