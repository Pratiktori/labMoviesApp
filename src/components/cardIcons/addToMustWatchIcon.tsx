import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { BaseMovieProps } from "../../types/interfaces";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToMustWatchIcon: React.FC<BaseMovieProps> = (movie) => {
  const { mustWatch, addToMustWatch } = useContext(MoviesContext);

  const isMustWatch = mustWatch.includes(movie.id);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isMustWatch) addToMustWatch(movie);
  };

  return (
    <IconButton aria-label="add to must watch" onClick={onUserSelect} disabled={isMustWatch}>
      {isMustWatch ? (
        <PlaylistAddCheckIcon color="error" fontSize="large" />
      ) : (
        <PlaylistAddIcon color="primary" fontSize="large" />
      )}
    </IconButton>
  );
};

export default AddToMustWatchIcon;
