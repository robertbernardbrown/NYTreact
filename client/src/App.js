import React, { Component } from "react";
import logo from "./logo.svg";
import Footer from "./components/Footer"
import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Wrapper>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
