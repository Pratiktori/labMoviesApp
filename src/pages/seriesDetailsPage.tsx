import React from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails";
import PageTemplate from "../components/templateSeriesPage";
// import useMovie from "../hooks/useMovie";
import { getSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { SeriesDetailsProps } from "../types/interfaces";

const SeriesDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: shows, error, isLoading, isError } = useQuery<SeriesDetailsProps, Error>(
    ["movie", id],
    ()=> getSeries(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {shows ? (
        <>
        <PageTemplate series={shows}> 
          <SeriesDetails {...shows} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
    </>
  );
};

export default SeriesDetailsPage;