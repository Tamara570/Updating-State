import React, { Component } from 'react'

class RouletteGun extends Component {
    static defaultProps = {
        bulletsInChamber: 8
    };
    state = {
        'chamber': null,
        'spinningTheChamber': false,
    }
    

    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
          })
          this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
      
            this.setState({
              chamber: randomChamber,
              spinningTheChamber: false,
            })
          }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    display() {
        if (this.state.spinningTheChamber) {
            return  'spinning the chamber and pulling the trigger! ...'
        } else if (this.state.chamber === this.props.bulletsInChamber) {
          return 'BANG!!!!!'
        } else {
          return 'you\'re safe!'
        }
      }
        
    
    
    render() {
        return(
            <div>
                <p>{this.display()}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}


export default RouletteGun;