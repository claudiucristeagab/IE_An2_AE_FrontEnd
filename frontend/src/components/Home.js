import React, { Component } from 'react';
import ProductList from './ProductList';
import {API_BASEURL} from '../constants/apiConstants';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    
    componentDidMount(){
        console.log("componentDidMount");
        const isLoaded = this.state.isLoaded;
        console.log("componentDidMount - isLoaded: "+ isLoaded);
        const category_id = this.props.match.params.id;
        this.getProducts(category_id);
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
        const prevCategory_id = prevProps.match.params.id;
        const category_id = this.props.match.params.id;
        if (prevCategory_id !== category_id) {
            console.log("componentDidUpdate - getProducts");
            this.getProducts(category_id); 
        }
    }
    
    render() {
        return (
            <div className="container-md">
              <div className="row">
                <div className="col-md-8">
                    <ProductList products={this.state.products}/>
                </div>
              </div>
            </div>
        )
    }
    getProducts(category_id) {
        if(category_id!=null) {
            fetch(API_BASEURL+"/categories/"+category_id+'/products').then(res => res.json())
            .then(data => this.setState({
                products: data
            }));
        }
        else {
            fetch(API_BASEURL+"/products/").then(res => res.json())
            .then(data => this.setState({
                products: data
            }));
        }
    }
    
    compareProducts(products, prevProducts){
        const ids1 = products.map(p => p.id).sort();
        const ids2 = prevProducts.map(p => p.id).sort();
        var i = ids1.length;
        if (i !== ids1.length) return false;
        while (i--) {
            if (ids1[i] !== ids2[i]) return false;
        }
        return true;
    }
}