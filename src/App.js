import 'css/App.css';

import ErrorBoundary from 'components/ErrorBoundary';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import Landscape from 'pages/Landscape';
import Mahogany from 'pages/Mahogany';
import Plants from 'pages/Plants';
import Services from 'pages/Services';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const routes = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/services', 'Services'],
  ['/plants', 'Plants'],
  ['/landscape', 'Landscape Projects'],
  ['/mahogany', 'Mahogany Project'],
  ['/contact', 'Contact Us'],
];
const comps = [Home, About, Services, Plants, Landscape, Mahogany, Contact];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  render() {
    return (
      <Router>
        <ErrorBoundary>
          <Switch>
            {routes.map((r, i) => <Route key={i} exact path={r[0]} component={comps[i]} />)}
          </Switch>
        </ErrorBoundary>
      </Router>
    );
  }
  updateDimensions() {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
}

export default App;
