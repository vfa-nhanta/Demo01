import { combineReducers } from 'redux';
import movieReducers from './MovieReducers';

const allReducers = combineReducers({
    movieReducers,
});

export default allReducers;