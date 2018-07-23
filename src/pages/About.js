import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div>About</div>
      </AppBody>
    );
  }
}
export default About;
