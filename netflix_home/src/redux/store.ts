import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './ movieSlice';
import cardmoviesReducer from './movieCardSlice'
import sidebarSlice from './sidebarSlice';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        cardmovies: cardmoviesReducer,
        sidebar: sidebarSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type MovieDispatch = typeof store.dispatch;

export default store;
