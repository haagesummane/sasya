import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Mahogany extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div>Mahogany</div>
      </AppBody>
    );
  }
}
export default Mahogany;
