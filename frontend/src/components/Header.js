import React, { Component } from 'react';
import Categories from './Categories';
import CategoryButton from './CategoryButton';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {categories: []}
    }
    componentWillMount(){
        fetch("http://18.222.27.221:3001/categories").then(res => res.json())
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