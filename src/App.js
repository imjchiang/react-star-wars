import React, {Component} from 'react';
import './App.css';
import axios from "axios";

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
      return <li key={idx}>{s.name}: {s.model}</li>
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
