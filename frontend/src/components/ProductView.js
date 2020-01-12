import React, { Component } from 'react';
import {API_BASEURL} from '../constants/apiConstants';

export default class ProductView extends Component {
    constructor(props){
        super(props);
        this.state = {product: ""}
    }
    
    componentDidMount() {
        console.log('ProductView - componentDidMount');
        this.getProduct(this.props.match.params.id);
    }
    
    render() {
        const product = this.state.product;
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
                        </div>
                        <hr/>
                        <div>
                            <div class="row">
                                <div className="col">
                                    <span>Price: ${product.price}</span>
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
    
}