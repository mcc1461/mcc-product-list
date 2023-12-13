import React from 'react'
import "./App.scss";
import Header from './components/header/Header'
import Categories from './components/products/Categories';
import Products from './components/products/Products';


const App = () => {
  return (
    <>
    <Header></Header>
    <Categories></Categories>
    <Products></Products>
    </>
  )
}

export default App;