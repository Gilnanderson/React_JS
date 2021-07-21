import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from '../components/Header';
import { listaLink } from '../mocks';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import MovieDetails from '../pages/MovieDetails';




function Router() {
  return (
  <BrowserRouter>
    <Header listaLink = {listaLink}/>
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
    </Switch>
  </BrowserRouter>
  )
}

export default Router;