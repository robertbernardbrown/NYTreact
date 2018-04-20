import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => (
      <Router>
        <div className="app">
          <Header/>
          <Wrapper>
          <Switch>
            <Route path="/" component={Home} />
            {/* <Route path="/saved" component={} /> */}
          </Switch>
          </Wrapper>
          <Footer/>
        </div>
      </Router>
)

export default App;
