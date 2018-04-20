import React, { Component } from "react";
import Search from "../components/Search";
import API from "../utils/API";

class Home extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: []
  }

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
      <Search handleInputChange={this.handleInputChange} fetchArticles={this.fetchArticles}/>
    );
  }
}

export default Home;