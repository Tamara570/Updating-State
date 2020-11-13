import { Component } from 'react'

class Bomb extends Component {

    state = {
        'count': 0,
    };

    componentDidMount () {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
              count: this.state.count + 1,
          })
        }, 1000)
    }


    componentWillUnmount() {
            clearInterval(this.interval)
        }

    render() {
        if (this.state.count >= 8) {
            clearInterval(this.interval)
            return `BOOM!!!! ${this.state.count}`
        } else if (this.state.count % 2 === 0) {
            return `Tick ${this.state.count}`
        } else {
            return `Tock ${this.state.count}`
        } 
    }
}


export default Bomb;