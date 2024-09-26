import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export interface CardMovie {
    id: number;
    poster: string;
    carouselposter: string;
    imdbRating: number;
    title: string;
    released: string;
    year: number;
    genre: string[];
    Director: string;
    Writer: string;
    Actors: string[];
    Plot: string;
    Language: string;  
    type: string;
    streams: string;      
}

interface CardMoviesState {
    cardmovies: Record<string, CardMovie[]>;
    cardstatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    carderror: string | null;
}

const initialState: CardMoviesState = {
    cardmovies: {},
    cardstatus: 'idle',
    carderror: null,
};

// Async thunk to fetch movies from the OMDB API
export const fetchCardMovies = createAsyncThunk<Record<string, CardMovie[]>>(
    'movies/fetchCardMovies',
    async () => {
        const response = await axios.get('http://localhost:3000/api/movies');
        return response.data as Record<string, CardMovie[]>;
    }
);

const moviesSlice = createSlice({
    name: 'cardmovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCardMovies.pending, (state) => {
                state.cardstatus = 'loading';
            })
            .addCase(fetchCardMovies.fulfilled, (state, action) => {
                state.cardstatus = 'succeeded';
                state.cardmovies = action.payload;
            })
            .addCase(fetchCardMovies.rejected, (state, action) => {
                state.cardstatus = 'failed';
                state.carderror = action.error.message || 'Failed to fetch movies';
            });
    },
});



export default moviesSlice.reducer;
