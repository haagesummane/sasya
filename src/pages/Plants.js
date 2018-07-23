import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Plants extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div>Plants</div>
      </AppBody>
    );
  }
}
export default Plants;
