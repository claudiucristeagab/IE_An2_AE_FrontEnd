import React, { Component } from 'react';

export default class ProductQuantityCount extends Component {
    constructor(props){
        super(props);
        this.state = {quantity: this.props.quantity};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    
    increment() {
        const quantity = this.state.quantity;
        this.setState({ quantity: quantity + 1 });
        this.props.action(quantity+1);
    }
    
    decrement() {
        const quantity = this.state.quantity;
        if (quantity>1) {
            this.setState({ quantity: quantity - 1 });
            this.props.action(quantity-1);
        }
    }
    
    render() {
        const quantity = this.state.quantity;
        return (
            <div className="input-group">
                <span className="input-group-btn">
                    <button className="btn btn-white btn-minuse" type="button" onClick={this.decrement}>-</button>
                </span>
                <input type="text" className="form-control no-padding add-color text-center height-25" maxLength="3" value={quantity} readOnly={true}/>
                <span className="input-group-btn">
                    <button className="btn btn-red btn-pluss" type="button" onClick={this.increment}>+</button>
                </span>
            </div>
        )
    }
    
}