import React, { Component } from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

class AppBody extends Component {
  render() {
    return (
      <div style={{}}>
        <header>
          <Nav active={this.props.active} />
        </header>
        <section
          id="cont"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...this.props.style,
          }}
        >
          {this.props.children}
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default AppBody;
