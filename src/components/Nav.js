import React, { Component } from 'react';
import 'css/App.css';
import 'css/foundation.css';

const routes = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/services', 'Services'],
  ['/plants', 'Plants'],
  ['/landscape', 'Landscape Projects'],
  ['/mahogany', 'Mahogany Project'],
  ['/contact', 'Contact Us'],
];
class Nav extends Component {
  render() {
    var cls = Array(routes.length);
    if (typeof this.props.active === 'number') cls[this.props.active] = 'active';
    return (
      <div id="navdiv" style={{ top: '0px', position: 'fixed', width: '100%' }}>
        <div style={{ top: '0px' }} id="example-menu">
          <nav className="bs hover-underline-menu" id="data-menu-underline-from-center">
            <ul className="menu align-center">
              {routes.map((r, i) => (
                <li key={i} className={cls[i]}>
                  <a className="txtcase" href={r[0]}>
                    {r[1]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default Nav;
