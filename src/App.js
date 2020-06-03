import React, { useEffect } from 'react';
import './App.css';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from './helpers';
import { alertActions } from './actions';
import { PrivateRoute } from './_components';


// COMPONENTS
// import { Header } from './components';
import { Navbar } from './components/Navbar/Navbar';

// CONTAINERS
import { HomePage } from './containers/Homepage';
import { LoginPage } from './containers/LoginPage';
import { RegisterPage } from './containers/RegisterPage';
import { MoviePage } from './containers/MoviePage';
import { MovieDetailPage } from './MovieDetailPage';
import { WatchList } from './containers/WatchList';
import { SearchPage } from './containers/SearchPage';
import { ProfilePage } from './containers/ProfilePage';
import { MovieDetail } from './containers/MovieDetail';


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
    <div className=" w-screen h-screen overflow-y-scroll "  style={{ backgroundColor: "#20209A" }}>
      <div className="">
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }

        <Router history={history}>
          <Navbar></Navbar>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/movie" exact component={MoviePage} />
            <Route path="/search/:keyword" exact component={SearchPage} />
            <Route path="/profile" exact component={ProfilePage} />
            <Route path="/watchlist" exact component={WatchList} />
            <Route path="/movie/:id(\d+)" exact component={MovieDetail} />
            <Route path="/register" component={RegisterPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;
