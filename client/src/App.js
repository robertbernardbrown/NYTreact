import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Search from "./components/Search";
import API from "./utils/API";


class App extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: []
  }

  // componentDidMount() {
  //   this.fetchArticles();
  // }

  fetchArticles = (event) => {
    event.preventDefault();
    API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
    .then(res=>(this.setState({articles:res.data.response.docs}))) 
    .catch(err=> (console.log(err)))
    .then( ()=> {console.log(this.state.articles)})
  }

  handleInputChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Wrapper>
          <Search handleInputChange={this.handleInputChange} fetchArticles={this.fetchArticles}/>
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
