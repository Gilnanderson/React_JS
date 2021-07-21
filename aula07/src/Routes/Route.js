import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Filmes from "../page/Filmes";
import Header from '../components/Header';
import TopMovie from '../page/TopMovie';
import Sobre from '../page/Sobre';

// import { Container } from './styles';

function Routes() {
  return <BrowserRouter>
    <Header/>
    <Switch>
        <Route exact path="/Filmes">
            <Filmes />

        </Route>
        <Route exact path="/TopMovie">
            <TopMovie />
        </Route>
        <Route exact path="/Sobre">
            <Sobre />
        </Route>
        <Route exact path="*">
            <h1>404 not found</h1>
        </Route>
    </Switch>
  </BrowserRouter>
}

export default Routes;