import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../src/config";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import SearchBar from "./components/SearchBar";
import Load from "./components/Load";
import Spinner from "./components/Spinner";
import Thumbnail from "./components/Thumbnail";

import { useHomeFetch } from "./components/hooks/useHomeFetch";

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);
  if (error) return <div>Something went wrong</div>;
  if (!state.movies[0]) return <Spinner />;
  return (
    <React.Fragment>
      <Header />
      <Hero
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
      <Grid />
      <Thumbnail />
      <Spinner />
      <Load />
    </React.Fragment>
  );
};

export default Home;
