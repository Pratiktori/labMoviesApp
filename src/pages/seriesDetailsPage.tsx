import React from "react";
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails";
import PageTemplate from "../components/templateSeriesPage";
import { getSeriesDetails, getSimilarSeries } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { SimilarS, SeriesDetailsProps } from "../types/interfaces";
import SimilarSeries from "../components/similarSeries";

const SeriesDetailsPage: React.FC = () => {
  const { id } = useParams();

  const { data: shows, error, isLoading, isError } = useQuery<SeriesDetailsProps, Error>(
    ["series", id],
    () => getSeriesDetails(id || "")
  );

  const { data: similarSeries, error: similarSeriesError, isLoading: similarSeriesLoading, isError: similarSeriesIsError } = useQuery<SimilarS, Error>(
    ["similarSeries", id],
    () => getSimilarSeries(id || "")
  );

  if (isLoading || similarSeriesLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {shows ? (
        <PageTemplate series={shows}>
          <SeriesDetails {...shows} />
          <SimilarSeries series={similarSeries?.results || []} />
        </PageTemplate>
      ) : (
        <p>Waiting for series details</p>
      )}
    </>
  );
};

export default SeriesDetailsPage;
