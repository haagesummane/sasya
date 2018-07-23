import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div style={{ width: '80%', textAlign: 'center' }}>
          <h1>Welcome to Sasya Nursery</h1>
          <article style={{ textAlign: 'justify' }}>&nbsp;</article>
        </div>
      </AppBody>
    );
  }
}
export default Home;
