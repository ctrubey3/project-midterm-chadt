import './App.css';
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import {data} from "./components/data";
import { v4 as uuidv1 } from 'uuid';


import All from "./Pages/All";
import Animation from "./Pages/Animation";
import Games from "./Pages/Games";
import Television from "./Pages/Television";
import UserInfo from "./Pages/UserInfo";



import Box from "./components/Box";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    data: data,
    name: '',
    category: '',
    value: '',
    id: uuidv1(),
    img: '',
    search: '',

  }
  getFilterData = () => {
    return this.state.data.filter(category =>
        category.name.toLowerCase().includes(this.state.search.toLowerCase())
    )
  }





  render() {
    return (
        <Router>
          <div className="App">
            <Nav/>
            <Switch>
              <Route exact path={"/"} component={All}/>
              <Route exact path={"/Animation"} component={Animation}/>
              <Route exact path={"/Games"} component={Games}/>
              <Route exact path={"/Television"} component={Television}/>
              <Route exact path={"/UserInfo/:id"} component={UserInfo}/>
              <Box getFilterData={this.getFilterData}/>
            </Switch>
          </div>

        </Router>
    );
  }
}

export default App;

