import AppBody from 'components/AppBody';
import { English, Kannada } from 'components/MohLangs';
import MohImgs from 'components/MohImgs';
import React, { Component } from 'react';
import 'css/Mahogany.css';
const langs = ['English', 'ಕನ್ನಡ'];
const Comps = [English, Kannada];
const titles = ['Mahogany', 'ಮಹಾಗನಿ'];
class Mahogany extends Component {
  constructor() {
    super();
    this.state = { langIndex: 0, title: titles[0] };
  }
  changeLang(langIndex) {
    this.setState({ langIndex: langIndex, title: titles[langIndex] });
  }
  render() {
    const Comp = () => Comps[this.state.langIndex];
    return (
      <AppBody active={this.props.active}>
        <div style={{ width: '80%', textAlign: 'center' }}>
          <h1>{this.state.title}</h1>
          <div style={{ width: '200px' }}>
            <select
              onChange={e => this.changeLang(e.target.selectedIndex)}
              className="custom-select"
            >
              {langs.map((l, i) => (
                <option key={i} value={'"' + i + '"'}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <Comp />
          <MohImgs />
        </div>
      </AppBody>
    );
  }
}
export default Mahogany;
