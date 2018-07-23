import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div>
          1 Home<br />2Home<br />3Home<br />4Home<br />Home<br />Home<br />Home<br />
        </div>
      </AppBody>
    );
  }
}
export default Home;
