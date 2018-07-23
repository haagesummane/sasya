import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import PlantsImgs from 'components/PlantsImgs';
class Plants extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div style={{ width: '80%', textAlign: 'center' }}>
          <h1>Plants</h1>
          <PlantsImgs />
        </div>
      </AppBody>
    );
  }
}
export default Plants;
