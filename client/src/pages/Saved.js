import React, { Component } from "react";
import API from "../utils/API";
import SavedPanel from "../components/SavedPanel"

class Saved extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    API.getSavedArticles()
    .then(data=> {
        console.log(data);
        this.setState({
            articles: data
        })
    })
    .catch(err => console.log(err))    
  }

  render() {
    return (
      <SavedPanel articles={this.state.articles}/>
    );
  }
}

export default Saved;