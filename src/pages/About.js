import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div style={{ width: '80%', textAlign: 'center' }}>
          <h1>About Us</h1>
          <article style={{ textAlign: 'justify' }}>
            <p>
              Sasya Nursery is a full-fledged horticulture nursery spread over 4 acres at Islur
              village 8 kilometres away from Sirsi town on Hubballi road. Basically, it is
              horticultural nursery producing graft plants of all major fruit crops like Mango,
              Sapota, Jackfruit, Guava, all lime species, Amla, Champaka etc. Sasya Nursery produces
              around 10 lakh plants a year. Sasya is popular for high quality indoor and outdoor
              garden ornamental plants too. Large-scale production of seedlings of Arecanut,
              Coconut, Cardamom, Clove, Pepper and other plantation crops made Sasya Nursery a
              favourite destination of farmers of the state.
            </p>
            <p>
              Sasya Nursery is led by well-known horticulturist and landscape designer of Karnataka
              state DR. Nagaraja Bhat. He is M. Sc. (Horticulture) graduate from University of
              Agricultural Sciences, Dharwad. He took up nursery and landscape designing profession
              at his native place Sirsi in the year 1995 itself. His varied expertise in the field
              of horticulture benefitted variety of horticultural and gardening projects across the
              state.
            </p>
            <p>
              Apart from routine nursery and landscaping activities, DR. Nagaraj Bhat is a
              well-known Horticulture Consultant guiding farmers across south India. He has an
              expert in making Project Reports too. He is an approved Valuator for the Court of Law
              and many commercial and cooperative banks.
            </p>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default About;
