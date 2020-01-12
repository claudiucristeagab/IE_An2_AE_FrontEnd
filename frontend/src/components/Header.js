import React, { Component } from 'react';
import Categories from './Categories';
import CategoryButton from './CategoryButton';
import {API_BASEURL} from '../constants/apiConstants';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {categories: []}
    }
    componentWillMount(){
        fetch(API_BASEURL+"/categories").then(res => res.json())
        .then(data => this.setState({
            categories: data
        }));
    }
    render() {
        const categories = this.state.categories.map((category) => (
             <CategoryButton category={category}/>
            ))
        return (
            <div>
                <h1 className="text-center">Ye Olde Shoppe</h1>
                <hr/>
                <Categories categories={this.state.categories}/>
                <hr/>
            </div>
        )
    }
}