import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import 'css/Home.css';
import logo from 'img/sasya.png';
class Home extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div style={{ height: '60%', textAlign: 'center' }}>
          <img
            src={logo}
            style={{ width: '400px', background: 'rgba(255,255,255,1)', borderRadius: '50%' }}
            alt="Sasya Nursery"
          />
          {/* <h1> Sasya Nursery</h1> */}
          <ul className="cb-slideshow">
            <li>
              <span>Image 01</span>
              <div>{/* <h3>re·lax·a·tion</h3> */}</div>
            </li>
            <li>
              <span>Image 02</span>
              <div>{/* <h3>qui·e·tude</h3> */}</div>
            </li>
            <li>
              <span>Image 03</span>
              <div>{/* <h3>bal·ance</h3> */}</div>
            </li>
            <li>
              <span>Image 04</span>
              <div>{/* <h3>e·qua·nim·i·ty</h3> */}</div>
            </li>
            <li>
              <span>Image 05</span>
              <div>{/* <h3>com·po·sure</h3> */}</div>
            </li>
          </ul>
        </div>
      </AppBody>
    );
  }
}
export default Home;
