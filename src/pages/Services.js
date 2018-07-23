import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div style={{ width: '80%', textAlign: 'center' }}>
          <h1>Services we offer</h1>
          <article style={{ textAlign: 'justify' }}>
            <ul>
              <li>Consultancy Service on Agricultural and Horticultural Crops and Enterprises</li>
              <li>Landscape Designing, Establishment and Maintenance</li>
              <li>Bankable Project Report Making on Agricultural and Horticultural Projects</li>
              <li>
                Agriculture Property Valuation of Court of Law, Banks and other Government works
              </li>
            </ul>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default Services;
