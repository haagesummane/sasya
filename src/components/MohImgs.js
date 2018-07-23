import React, { Component } from 'react';
import Ma1 from 'img/Mahogany/Ma1.jpg';
import Ma3 from 'img/Mahogany/Ma3.jpg';
import Ma4 from 'img/Mahogany/Ma4.jpg';
import Ma5 from 'img/Mahogany/Ma5.jpg';
import Ma6 from 'img/Mahogany/Ma6.jpg';
import Ma7 from 'img/Mahogany/Ma7.jpg';
import Ma8 from 'img/Mahogany/Ma8.jpg';
import Ma9 from 'img/Mahogany/Ma9.jpg';
import Ma11 from 'img/Mahogany/Ma11.jpg';
import Ma12 from 'img/Mahogany/Ma12.jpg';

const mImgs = [Ma1, Ma3, Ma4, Ma5, Ma6, Ma7, Ma8, Ma9, Ma11, Ma12];
class MohImgs extends Component {
  render() {
    return (
      <div>
        {mImgs.map((mImg, i) => (
          <img src={mImg} key={i} style={{ width: '300px', padding: '5px' }} alt="" />
        ))}
      </div>
    );
  }
}
export default MohImgs;
