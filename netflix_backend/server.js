const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const movies = require('./movies.json');
const carousel = require('./carousel.json');

app.get('/api/movies', (req, res) => {
  const categorizedMovies = {};

    movies.forEach(movie => {
        movie.genre.forEach(genre => {
            if (!categorizedMovies[genre]) {
                categorizedMovies[genre] = [];
            }
            categorizedMovies[genre].push({
                id: movie.id,
                poster: movie.poster,
                title: movie.title,
                released: movie.released,
                imdbRating: movie.imdbRating,
                carouselposter: movie.carouselposter,
                year: movie.year,
                genre: movie.genre,
                director: movie.Director,
                writer:movie.Writer,
                actors:movie.Actors,
                plot:movie.Plot,
                language:movie.Language,
                type:movie.type,
                streams: movie.streams
            });
        });
    });
  res.json(categorizedMovies);
});

app.get('/api/movies/id/:id', (req, res) => {
  const { id } = req.params;
  
  let foundMovie = null;
  Object.keys(movies).forEach((category) => {
    const movie = movies[category].find((movie) => movie.id === parseInt(id));
    if (movie) foundMovie = movie;
  });

  if (foundMovie) {
    res.json(foundMovie);
  } else {
    res.status(404).json({ error: `Movie with ID '${id}' not found` });
  }
});

app.get('/api/movies/title/:title', (req, res) => {
  const { title } = req.params.toLowerCase();

  let foundMovie = null;
  Object.keys(movies).forEach((category) => {
    const movie = movies[category].find((movie) => movie.title.toLowerCase() === title);
    if (movie) foundMovie = movie;
  });

  if (foundMovie) {
    res.json(foundMovie);
  } else {
    res.status(404).json({ error: `Movie with title '${title}' not found` });
  }
});

app.get('/api/carousel', (req, res) => {
  res.json(carousel);
});

app.get('/api/categories', (req, res) => {
  const categories = Object.keys(movies);
  res.json(categories);
});

app.get('/api/movies/category/:category', (req, res) => {
  const { category } = req.params;

  // Check if the category exists
  if (movies[category]) {
    res.json(movies[category]);
  } else {
    res.status(404).json({ error: `Category '${category}' not found` });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
