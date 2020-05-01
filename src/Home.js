import React, { useState } from "react";
import {
  API_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  API_KEY,
} from "../src/config";

import Hero from "./components/Hero";
import Grid from "./components/Grid";
import SearchBar from "./components/SearchBar";
import Load from "./components/Load";
import Spinner from "./components/Spinner";
import Thumbnail from "./components/Thumbnail";

import { useHomeFetch } from "./components/hooks/useHomeFetch";

import image from "../src/images/image.jpg";

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [term, setTerm] = useState("");
  console.log(state);

  const LoadMore = () => {
    const searchEndPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${term}&page=${
      state.currentPage + 1
    }`;
    const popularEndPoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${
      state.currentPage + 1
    }`;

    const endpoint = term ? searchEndPoint : popularEndPoint;

    fetchMovies(endpoint);
  };

  if (error) return <div>Something went wrong</div>;
  if (!state.movies[0]) return <Spinner />;
  return (
    <React.Fragment>
      <Hero
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
      <Grid header={term ? "search results" : "popular movies"}>
        {state.movies.map((movie) => (
          <Thumbnail
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : image
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>

      {loading && <Spinner />}
      {state.currentPage < state.totalPages && !loading && (
        <Load text="Load More" callback={LoadMore} />
      )}
    </React.Fragment>
  );
};

export default Home;
