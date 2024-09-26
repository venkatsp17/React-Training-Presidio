import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export interface CarouselMovie {
    id: number;
    carouselposter: string;
    imdbRating: number;
    title: string;
    type: string;
    streams: string
}

interface CarouselMoviesState {
    movies: CarouselMovie[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CarouselMoviesState = {
    movies: [],
    status: 'idle',
    error: null,
};

// Async thunk to fetch movies from the OMDB API
export const fetchMovies = createAsyncThunk<CarouselMovie[]>(
    'movies/fetchCarouselMovies',
    async () => {
        const response = await axios.get('http://localhost:3000/api/carousel');
        return response.data as CarouselMovie[];
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch movies';
            });
    },
});

export default moviesSlice.reducer;
