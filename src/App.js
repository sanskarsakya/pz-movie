import React, { useEffect } from 'react';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';

// PAGES
import { HomePage } from './Homepage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { MoviePage } from './MoviesPage';
import { MovieDetailPage } from './MovieDetailPage';
import { WatchListPage } from './WatchListPage';
import { SearchPage } from './SearchPage';
import { ProfilePage } from './ProfilePage';


function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  });

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/movie" exact component={MoviePage} />
              <Route path="/search" exact component={SearchPage} />
              <Route path="/profile" exact component={ProfilePage} />
              <Route path="/watchlist" exact component={WatchListPage} />
              <Route path="/movie/:movie_id(\d+)" exact component={MovieDetailPage} />
              <Route path="/register" component={RegisterPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
export default App;
