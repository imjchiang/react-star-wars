import React, {Component} from 'react';
import './App.css';
import axios from "axios";

import
{
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"

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
    const allShips = this.state.starships.map((s, idx) =>
    {
      let route = `/starship/${idx}`;
      return(
        <Router>
          <li key={idx}><Link to={route}>{s.name}</Link></li>
        </Router>
      ) 
    });
    return (
      <div>
        <h1>These are some of the starships in star wars</h1>
        {allShips}
      </div>
    );
  }
}

export default App;
