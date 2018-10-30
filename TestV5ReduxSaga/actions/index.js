import { ADD_MOVIE, FETCH_MOVIE, FETCH_SUCCEEDED, FETCH_FAILED } from './actionTypes';

export const fetchMovieAction = (sort) => {
    return {
        type: FETCH_MOVIE,
        sort
    }
}

export const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        newMovie: newMovie
    }
}

export const fetchSucceededAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}