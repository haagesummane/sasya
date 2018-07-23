import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Landscape extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div>Landscape</div>
      </AppBody>
    );
  }
}
export default Landscape;
