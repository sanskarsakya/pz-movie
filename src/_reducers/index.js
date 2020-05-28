import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { movies } from './movies.reducer';
import { alert } from './alert.reducer';
import { actors } from './actors.reducer';
import { recommendations } from './recommendations.reducer';
import { images } from './images.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    movies,
    alert,
    actors,
    recommendations,
    images
});

export default rootReducer;