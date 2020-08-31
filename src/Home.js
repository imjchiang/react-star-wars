import React, {Component} from "react";

import
{
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class Home extends Component
{
    render()
    {
        const allStarships = this.props.starships.map((s, idx) =>
        {
            let route = `/starship/${idx}`;
            return <div key={idx}><Link to={route}>{s.name}</Link>{" "}</div>
        })

        return(
            <>
                <h1>These are some of the starships in star wars</h1>
                {allStarships}
            </>
        )
    }
}

export default Home;