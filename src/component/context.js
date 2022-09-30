// context <API></>
//useContext hooks

//context(werehouse)
//Provider(delivery)
//Consumer/getData  //=> (useContext())

import React, { useContext, useEffect, useState } from "react";
export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();
// we need to create a provider function

const AppProvidre = ({ children }) => {
  const [isloading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("titanic");
  const getMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setLoading(false);
        setIsError({
          show: false,
          msg: "",
        });

        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [query]);
  return (
    <AppContext.Provider value={{ isloading, movie, isError, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

//Globa custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvidre, useGlobalContext };
