import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class ProductCard extends Component {
    render() {
        const product = this.props.product
        return (
            <div className = "col-sm-3 col-lg-3" key={product.id}>
                    <div className = "card border-primary h-100 text-center shadow-sm">
                        <div className='card-header'>{product.category.name}</div>
                        <Link to={`/products/${product.id}`}>
                            <img src={`/products/${product.image_name}`} className="card-img-top embed-responsive-item" alt={product.image_name} />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">${product.price}</p>
                        </div>
                        <Link to={`/products/${product.id}`}>
                            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Details</button>
                        </Link>
                    </div>
                </div>
        )   
    }
}