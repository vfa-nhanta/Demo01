import { all, call } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSaga';

export default function* rootSaga() {
    yield call(watchFetchMovies);
}