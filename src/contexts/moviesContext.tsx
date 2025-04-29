import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  addToFavourites: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void;

  mustWatch: number[];  // New state for must watch list
  addToMustWatch: (movie: BaseMovieProps) => void;  // Add movie to must watch
  removeFromMustWatch: (movie: BaseMovieProps) => void;  // Remove movie from must watch
}

const initialContextState: MovieContextInterface = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  addReview: (movie, review) => { movie.id, review },

  mustWatch: [],
  addToMustWatch: () => {},
  removeFromMustWatch: () => {},
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [mustWatch, setMustWatch] = useState<number[]>([]);  // New state
  const [myReviews, setMyReviews] = useState<Review[]>([]);

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prev) => (prev.includes(movie.id) ? prev : [...prev, movie.id]));
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prev) => prev.filter((id) => id !== movie.id));
  }, []);

  // Add movie to must watch list
  const addToMustWatch = useCallback((movie: BaseMovieProps) => {
    setMustWatch((prev) => {
      if (!prev.includes(movie.id)) {
        const updated = [...prev, movie.id];
        console.log("Must Watch List:", updated);
        return updated;
      }
      return prev;
    });
  }, []);

  // Remove movie from must watch list (optional)
  const removeFromMustWatch = useCallback((movie: BaseMovieProps) => {
    setMustWatch((prev) => {
      const updated = prev.filter((id) => id !== movie.id);
      console.log("Must Watch List:", updated);
      return updated;
    });
  }, []);

  const addReview = (movie: BaseMovieProps, review: Review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatch,
        addToMustWatch,
        removeFromMustWatch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
