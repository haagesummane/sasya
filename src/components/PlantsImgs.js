import React, { Component } from 'react';
import ND7 from 'img/plants/ND7.JPG';
import ND10 from 'img/plants/ND10.JPG';
import ND11 from 'img/plants/ND11.JPG';
import ND12 from 'img/plants/ND12.JPG';
import ND15 from 'img/plants/ND15.JPG';
import ND20 from 'img/plants/ND20.JPG';
import ND21 from 'img/plants/ND21.JPG';
import ND22 from 'img/plants/ND22.JPG';
import ND23 from 'img/plants/ND23.JPG';
import ND24 from 'img/plants/ND24.JPG';
import ND25 from 'img/plants/ND25.JPG';

const pImgs = [ND7, ND10, ND11, ND12, ND15, ND20, ND21, ND22, ND23, ND24, ND25];
class PlantsImgs extends Component {
  render() {
    return (
      <div>
        {pImgs.map((pImg, i) => (
          <img src={pImg} key={i} style={{ width: '300px', padding: '5px' }} alt="" />
        ))}
      </div>
    );
  }
}
export default PlantsImgs;
