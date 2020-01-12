import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
    render() {
        const products = this.props.products.map(product => (
                <ProductCard product={product} key={product.id}/>
            ))
        return (
            <div className = "row">
                {products}
            </div>
        )
    }
}