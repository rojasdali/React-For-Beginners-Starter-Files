import React from 'react'
import Header from './Header'
class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                    {/*<Inventory />*/}
                    {/*<Order />*/}
                </div>
            </div>
        )
    }
}

export default App;