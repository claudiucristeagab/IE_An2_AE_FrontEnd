import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class CategoryButton extends Component {
    render() {
        const category = this.props.category
        return (
            <Link to={`/categories/${category.id}/products`} className="nav-link" key={category.id}>
                {category.name}
            </Link>
        )   
    }
}