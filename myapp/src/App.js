import React from "react";
// import ReactDom from "react-dom";
import Navbar from "./navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Footer from "./Footer";
import Product from "./Product";


class App extends React.Component{

  // constructor(){
  //   super()
  // }

  render(){
    return(
      <>
       <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/wishlist" element={<Wishlist/>}></Route>
        </Routes>

        <Footer/>
      </Router>
      </>
    )
  }
}

export default App;