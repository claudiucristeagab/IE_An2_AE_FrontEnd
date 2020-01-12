import React, { Component } from 'react';
import {API_BASEURL} from '../constants/apiConstants';
import ProductQuantityCount from './ProductQuantityCount';

export default class ProductView extends Component {
    constructor(props){
        super(props);
        this.state = {product: "", quantity: 1};
        this.getProduct = this.getProduct.bind(this);
        this.handleTotal = this.handleTotal.bind(this);
    }
    
    componentDidMount() {
        console.log('ProductView - componentDidMount');
        this.getProduct(this.props.match.params.id);
    }
    
    render() {
        const product = this.state.product;
        const total = this.state.quantity * product.price;
        return (
            <div className='container-md'>
                <div className='row h-50'>
                    <div className='col-lg-4 order-lg-2 order-1'>
                        <img className='img-fluid' src={product.image_name} alt={product.name}/>
                    </div>
                    <div className='col-lg-6 order-3'>
                        <div>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div class="row">
                                <div className="col">
                                    <span>Price: ${product.price}</span>
                                </div>
                                <div className="col">
                                    <span>Total Price: ${total}</span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <div class="row">
                                <div className="col">
                                    <ProductQuantityCount quantity={this.state.quantity} action={this.handleTotal}/>
                                </div>
                                <div className="col">
                                    <a className="btn btn-primary btn-block" href="#" role="button">Buy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
    
    getProduct(id) {
        fetch(API_BASEURL+"/products/"+id).then(res => res.json())
        .then(data => this.setState({
            product: data
        }));
    }
    
    handleTotal(i){
        this.setState({ quantity: i });
    }
    
}