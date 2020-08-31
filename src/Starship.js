import React, {Component} from "react";

class Starship extends Component
{
    render()
    {
        return(
            <div>
                <h1>Starship</h1>
                <h1>Name: {this.props.starships[this.props.match.params.id].name}</h1>
                <p>Model: {this.props.starships[this.props.match.params.id].model} Braces</p>
            </div>
        )
    }
}

export default Starship;