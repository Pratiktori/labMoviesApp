import React from "react";
 import Header from "../components/headerMovieList";
 import Grid from "@mui/material/Grid";
 import { BaseSeries, DiscoverSeries, BaseTVSeries } from "../types/interfaces";
 import SeriesList from "../components/seriesList";
 import { useQuery } from "react-query";
 import { getSeriees, getSeries } from "../api/tmdb-api";
 import Spinner from "../components/spinner";
 import useFiltering from "../hooks/useFiltering";
 import MovieFilterUI, { titleFilter, genreFilter } from "../components/movieFilterUI";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatchIcon";

 const titleFiltering = {
    name: "title",
    value: "",
    condition: titleFilter,
  };
  const genreFiltering = {
    name: "genre",
    value: "0",
    condition: genreFilter,
  };

 const styles = {
   root: {
     padding: "20px",
   },
 };
 
 const SeriesPage: React.FC = () => {
   const { data, error, isLoading, isError } = useQuery<DiscoverSeries, Error>("discoverseries", getSeriees);
    
   const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

   if (isLoading) {
     return <Spinner />;
   }
 
   if (isError) {
     return <h1>{error.message}</h1>;
   }

   const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

   const series = data ? data.results : [];

   return (
     <><Grid container sx={styles.root}>
           <Grid item xs={12}>
               <Header title={"Discover TV Series"} />
           </Grid>
           <Grid item container spacing={5}>
               <SeriesList series={series} shows={[]} action={function (m: BaseTVSeries): React.ReactNode {
                   throw new Error("Function not implemented.");
               } } />
           </Grid>
       </Grid><MovieFilterUI
               onFilterValuesChange={changeFilterValues}
               titleFilter={filterValues[0].value}
               genreFilter={filterValues[1].value} /></>
   );
 };
 
 export default SeriesPage;