import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import 'css/Home.css';
import i1 from 'img/home/1.jpg';
import i2 from 'img/home/2.jpg';
import i3 from 'img/home/3.jpg';
import i4 from 'img/home/4.jpg';
import i5 from 'img/home/5.jpg';
class Home extends Component {
  render() {
    var imgs = [i1, i2, i3, i4, i5, null];
    return (
      <AppBody style={{ background: 'url(' + i2 + ')' }} active={this.props.active}>
        <div style={{ height: '60%', textAlign: 'center', background: 'rgba(255,255,255,0.5)' }}>
          <h1>Welcome to Sasya Nursery</h1>

          {/* <div id="slider">
            <figure>{imgs.map((img, i) => <img key={i} src={img} alt="" />)}</figure>
          </div> */}
        </div>
      </AppBody>
    );
  }
}
export default Home;
