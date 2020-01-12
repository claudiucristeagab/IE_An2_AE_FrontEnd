import React, { Component } from 'react';
import Categories from './Categories';
import CategoryButton from './CategoryButton';
import {API_BASEURL} from '../constants/apiConstants';

export default class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small">
                <div class="footer-copyright text-center py-3">© 2020 Copyright</div>
            </footer>
        )
    }
}

