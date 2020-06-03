import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { movies } from './movies.reducer';
import { alert } from './alert.reducer';
import { actors } from './actors.reducer';
import { recommendations } from './recommendations.reducer';
import { images } from './images.reducer';
import { watchlist } from './watchLists.reducer';
import { search } from './search.reducer';
import { baseReducer } from './base.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    movies :baseReducer(movies, "Movies"),
    alert,
    actors,
    recommendations: baseReducer(movies, "Recommendations"),
    images,
    watchlist,
    search,
    trending:  baseReducer(movies, "Trending"),
});

export default rootReducer;