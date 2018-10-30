import { connect } from 'react-redux';
import MovieComponent from '../components/MovieComponent';
import { map } from 'rsvp';
import { addMovieAction, fetchMovieAction, fetchSucceededAction, fetchFailedAction } from '../actions';

mapStateToProps = (state) => {
    return {
        movies: state.movieReducers
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMovieAction());
        },
        onAddMovie: () => {
            dispatch(addMovieAction());
        }
    }
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;