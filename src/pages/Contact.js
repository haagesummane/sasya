import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div>Contact</div>
      </AppBody>
    );
  }
}
export default Contact;
