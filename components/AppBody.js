import React, {Component} from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

class AppBody extends Component {
  render() {
    return (<div><header><Nav />
            </header><section>{this.props.children}</section><footer><Footer />
            </footer></div>);
  }
}
export default AppBody;