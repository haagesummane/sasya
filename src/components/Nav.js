import AppBody from 'components/AppBody';
import React, { Component } from 'react';
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
    var cls = routes.map((r, i) => (this.props.active && this.props.active === i ? 'active' : ''));
    return (
      <div data-sticky-container>
        <div data-sticky data-margin-top="0" id="example-menu">
          <nav class="bs hover-underline-menu" data-menu-underline-from-center>
            <ul class="menu align-center">
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
