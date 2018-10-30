import { addMovieAction, fetchMovieAction, fetchSucceededAction, fetchFailedAction } from '../actions';

import { put, takeLastest } from 'redux-saga/effects';
import { Api } from './Api';
import { FETCH_SUCCEEDED, FETCH_FAILED, FETCH_MOVIE } from '../actions/actionTypes';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies});
    } catch (error) {
        yield put({ type: FETCH_FAILED, error});
    }
}

export function* watchMovies() {
    yield takeLastest(FETCH_MOVIE, fetchMovies);
}