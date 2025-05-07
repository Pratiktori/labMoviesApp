import React,{useEffect} from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";
import { getMovie, getSimilarMovies } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { BaseMovieProps, MovieDetailsProps, Similar } from "../types/interfaces";
import SimilarMovies from "../components/similarMovies";

const MovieDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery<MovieDetailsProps, Error>(
    ["movie", id],
    ()=> getMovie(id||"")
  );
  const { data: similarMovies, error: similarMoviesError, isLoading: similarMoviesLoading, isError: similarMoviesIsError } = useQuery<Similar, Error>(
    ["similarMovies", id],
    () => getSimilarMovies(id || "")
  );

  if (isLoading || similarMoviesLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
        <PageTemplate movie={movie}> 
          <MovieDetails {...movie} />
          <SimilarMovies movies={similarMovies?.results || []} action={function (m: BaseMovieProps): React.ReactNode {
              throw new Error("Function not implemented.");
            } } />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
    </>
  );
};

export default MovieDetailsPage;