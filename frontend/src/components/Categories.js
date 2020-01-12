import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CategoryButton from './CategoryButton';

export default class Categories extends Component {
    render() {
        const categories = this.props.categories.map((category) => (
             <CategoryButton category={category} key={category.id}/>
            ))
        return (
            <nav className="navbar navbar-default scroll">
                <ul className="nav nav-pills nav-justified">
                    <Link to='/'>
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                    </Link>
                    {categories}
                </ul>
            </nav>
        )
    }
}