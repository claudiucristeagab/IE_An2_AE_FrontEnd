import React, { Component } from 'react';
import ProductList from './ProductList';

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
            fetch("http://18.222.27.221:3001/categories/"+category_id+'/products').then(res => res.json())
            .then(data => this.setState({
                products: data
            }));
        }
        else {
            fetch("http://18.222.27.221:3001/products/").then(res => res.json())
            .then(data => this.setState({
                products: data
            }));
        }
    }
}