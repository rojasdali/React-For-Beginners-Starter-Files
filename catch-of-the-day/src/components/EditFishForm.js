import React from 'react'

class EditFishForm extends React.Component {
    
    handleChange = (event) => {
        console.log(event.currentTarget);
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        }
        this.props.updateFish(this.props.index, updatedFish)
        
    }
    render () {
        return (
            <div className="fish-edit">
               <input name="name" ref={this.nameRef} type="text" placeholder="Name" onChange={this.handleChange} value={this.props.fish.name}/>
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" onChange={this.handleChange} value={this.props.fish.price}/>
                <select name="status" ref={this.statusRef} placeholder="Status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc" onChange={this.handleChange} value={this.props.fish.desc}/>
                <input name="image"type="text" ref ={this.imageRef} placeholder="Image" onChange={this.handleChange} value={this.props.fish.image}/>         
            <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }

}

export default EditFishForm