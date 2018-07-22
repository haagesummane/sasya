import 'css/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary';
import Appbody from 'components/AppBody';
import Home from 'pages/Home';
import About from 'pages/About';
import Landscape from 'pages/Landscape';
import Mahogany from 'pages/Mahogany';
import Plants from 'pages/Plants';
import Services from 'pages/Services';
import Contact from 'pages/Contact';

const routes = [
  ['/', Home, 'Home'],
  ['/about', About, 'About Us'],
  ['/services', Services, 'Services'], 
  ['/plants', Plants, 'Plants'],
  ['/landscape', Landscape, 'Landscape Projects'],
  ['/mahogany', Mahogany, 'Mahogany Project'],
  ['/contact', Contact, 'Contact Us']
];


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
            {routes.map((r,i)=><Route key={i} exact path={r[0]} component={r[1]} />)}
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