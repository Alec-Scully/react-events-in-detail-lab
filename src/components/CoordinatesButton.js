// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component{
    
    handleClick = (event) => {
        let coord = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coord)
    }

    render() {


        return(
            <button onClick={(event) => this.handleClick(event)}>Coordinates</button>
        )
    }
}

export default CoordinatesButton