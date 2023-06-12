"use client";
import { createContext, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return { ...state, count: state.count + 1 };
    case "REMOVE_FROM_FAV":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);
  return (
    <MovieContext.Provider value={{ favMovies, setFavMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
