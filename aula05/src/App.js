import './App.css';
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom"
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/produtos">
        <Produtos />
      </Route>
      <Route path="*">
        <h1>404</h1>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
