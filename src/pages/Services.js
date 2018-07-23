import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div>Services</div>
      </AppBody>
    );
  }
}
export default Services;
