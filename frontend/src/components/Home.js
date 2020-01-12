import React, { Component } from 'react';
import ProductList from './ProductList';
import {API_BASEURL} from '../constants/apiConstants';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {products: []}
    }
    
    componentDidMount(){
        const category_id = this.props.match.params.id;
        this.getProducts(category_id);
    }
    
    componentDidUpdate(prevProps){
        const category_id = this.props.match.params.id;
        this.getProducts(category_id);
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
}