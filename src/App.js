import React from 'react';

import Nav from './components/Nav'
import SidebarLeft from './components/SidebarLeft'
import Content from './components/Content'

import { BrowserRouter as Router, Route } from "react-router-dom";

import countries from './countries.json'
import './App.css';

class App extends React.Component {

  getCountriesCode = () => countries.map((country, index) => 
    ({ cca3: country.cca3, countryName: country.name.common })
  )

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <div className="main">
              <SidebarLeft countryData={this.getCountriesCode()} />
              <Route exact path="/" component={Content} />
              <Route exact path="/:id" component={Content} />
          </div>
        </div>
    </Router>
    );
  }
}

export default App;
