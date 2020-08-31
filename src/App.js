import React, {Component} from 'react';
import './App.css';
import axios from "axios";

import
{
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from "./Home";
import Starship from "./Starship";

class App extends Component
{
  state = 
  {
    starships: []
  };

  componentDidMount()
  {
    let starshipURL = "https://swapi.dev/api/starships/"

    axios.get(starshipURL)
    .then(response =>
    {
      this.setState(
      {
        starships: response.data.results
      });
    })
    .catch(err => console.log(err));
  }

  render()
  {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home starships={this.state.starships} />} />
          <Route path="/startship/:id" render={() => <Starship starships={this.state.starships} />} />
        </div>
      </Router>
    );
  }
}

export default App;
