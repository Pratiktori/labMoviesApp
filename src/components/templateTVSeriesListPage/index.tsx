import React from "react";
import Header from "../headerSeriesList";
import Grid from "@mui/material/Grid";
import {  SeriesListPageTemplateProps} from "../../types/interfaces";
import SeriesList from "../seriesList";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const seriesListPageTemplate: React.FC<SeriesListPageTemplateProps> = ({ shows, title, actionseries })=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <SeriesList
          action={actionseries}
          shows={shows} series={undefined}        ></SeriesList>
      </Grid>
    </Grid>
  );
}
export default seriesListPageTemplate;