import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
const Thumbnail = ({ image, clickable, movieId }) => (
  <StyledMovieThumb>
    {clickable ? (
      <img className="clickable" src={image} alt="moviethumb" />
    ) : (
      <img src={image} alt="moviethumb" />
    )}
  </StyledMovieThumb>
);

export default Thumbnail;
