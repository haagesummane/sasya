import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div style={{ width: '80%', textAlign: 'center' }}>
          <h1>About Us</h1>
          <article style={{ textAlign: 'justify' }}>
            <p>
              Office: Giridath, Behind Nityananda Matha, Marathikoppa Road, Sirsi, Uttara Kannada
            </p>
            <p>581402, Karnataka, India Nursery: Islur, Hubballi Road, Sirsi, Uttara Kannada,</p>
            <p>Karnataka, India Phone: +91 9449999791, +91 9448408620, +91 8384 237424 Contact</p>
            <p>person: DR. Nagaraja D Bhat Email: gardennagaraj@gmail.com Website:</p>
            <p>www.sasyanursery.com</p>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default Contact;
