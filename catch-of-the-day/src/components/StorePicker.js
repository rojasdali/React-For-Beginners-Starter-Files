import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {

        // stop the form from submitting
        event.preventDefault()
        
        // get the text from that input
        console.log(this)

        // change the page to /store/:storeId
    }
    render(){
        return (
                <form action="" className="store-selector" onSubmit={this.goToStore} ref={this.myInput}>
                    <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                    <button type ="submit">Visit Store -></button>
                </form>
        )
    }
}

export default StorePicker;