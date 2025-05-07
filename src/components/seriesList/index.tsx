import React from "react";
import Grid from "@mui/material/Grid";
import { BaseSeries, BaseSeriesList, ListedTVSeries } from "../../types/interfaces";
import SeriesCard from "../seriesCard";
import { JSX } from "react/jsx-runtime";

interface SeriesListProps {
  series: any;
  shows: ListedTVSeries[],
  action: (m: ListedTVSeries) => React.ReactNode;
}

const SeriesList: React.FC<SeriesListProps> = (props) => {
  const series=props.series;
  let seriesCards = series.map((s: JSX.IntrinsicAttributes & BaseSeries) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <SeriesCard key={s.id} {...s} />
    </Grid>
  ));
  return seriesCards;
}

  export default SeriesList;