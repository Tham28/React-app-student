import React, { Component } from 'react'
import './App.css'
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";

import ProjectPage from './containers/ProjectPage/ProjectPage'
import Header from './Components/Header/Header';


import ProfilePage from './containers/ProfilePage/ProfilePage';


class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <Router>
      <div>
      <Header />
        <Switch>
          <Route path="/project">
            <ProjectPage />
          </Route>
          <Route path="/">
            <ProfilePage />
          </Route>
        </Switch>
      </div>
    </Router>

    )
  }
}

export default App