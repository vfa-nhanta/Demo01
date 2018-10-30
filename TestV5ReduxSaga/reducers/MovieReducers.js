import { addMovieAction, fetchMovieAction, fetchSucceededAction, fetchFailedAction, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionTypes';


const movieReducers = (movies = [], action) => {
    switch(action.type) {
        case ADD_MOVIE: 
            return [
                ...movies,
                action.newMovie
            ];
        case FETCH_SUCCEEDED:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        default: 
            return movies;
    }
}

export default movieReducers;