import React from 'react'

class AddFishForm extends React.Component {
    
    nameRef = React.createRef() 
    priceRef = React.createRef()
    statusRef = React.createRef()
    descRef = React.createRef()
    imageRef = React.createRef()
    
    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: Boolean(parseInt(this.statusRef.current.value)),
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        console.log(fish)
    }
    
    render() {
        return (
            <form action=" " className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
                <select name="status" ref={this.statusRef} placeholder="Status">
                    <option value="1">Fresh!</option>
                    <option value="0">Sold out</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
                <input name="image"type="text" ref ={this.imageRef} placeholder="Image"/>
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm