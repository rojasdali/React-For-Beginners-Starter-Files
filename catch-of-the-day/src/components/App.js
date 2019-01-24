import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from '../sample-fishes';
import Fish from './Fish'
import base from "../base"

class App extends React.Component {

    state = {
            fishes: {},
            order: {}
    }
    
    componentDidMount() {
        const { params } = this.props.match
        const localStorageRef = localStorage.getItem(params.storeId)
        if(localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }
    componentDidUpdate() {
        // use the store id as the key , order as value -- stringify object
        localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))
        
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
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

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = key => {
        const order = {...this.state.order}
        order[key] = order[key] + 1 || 1
        this.setState({
            order: order
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                        <ul>
                            {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)}
                        </ul>
                </div>
                    <Order fishes={this.state.fishes} order={this.state.order}/>
                    <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;