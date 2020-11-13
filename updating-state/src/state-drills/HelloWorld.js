import React, { Component } from 'react'


//Question 1.
export default class HelloWorld extends Component {
    state = {
        'who': 'world',
    };

    render() {
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                
                <button
                    onClick={() => this.setState({ who: 'world' })}
                >
                    World
                </button>
                <br />
                <button
                    onClick={() => this.setState({ who: 'friend' })}
                >
                    Friend
                </button>
                <br />
                <button
                    onClick={() => this.setState({ who: 'react' })}
                >
                    React
                </button>
            </div>
        )
    }
}

//Question 2.
