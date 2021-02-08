// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component{

    handleClick = (event) => {
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)

    }

    
    render(){


        return(
            <button onClick={(event) => setTimeout(() => this.props.onDelayedClick(event), this.props.delay)}>Delay</button>
            // <button onClick={(event) => this.handleClick(event)}>Delay</button>
        )
        
    }
}

export default DelayedButton