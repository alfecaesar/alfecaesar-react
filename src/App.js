import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Home from './components/home'
import Footer from './components/footer'
import Sidebar from './components/sidebar'

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar></Sidebar>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>

    );
  }
}

export default App;