import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

class App extends React.Component {

    state = {
            fishes: {},
            order: {}
    }

    addFish = fish => {
        // take a copy of the existing state
        const fishes = {...this.state.fishes };
        // add a new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // this.state.fishes.push(fish)
        // this.state.fishes.fish1 = fish;
        this.setState({
            fishes : fishes
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                    <Order />
                    <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;