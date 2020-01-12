import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import ProductView from './components/ProductView'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/products/:id" component={ProductView}/>
        <Route path="/categories/:id/products" component={Home}/>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
