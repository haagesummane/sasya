import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Landscape extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div style={{ width: '80%', textAlign: 'center' }}>
          <h1>Landscape Projects</h1>
          <article style={{ textAlign: 'justify' }}>
            <ul>
              <li>Deshpande Institute of Vocational Training, Haliyal</li>
              <li>Bird Sanctuary, Attiveri, Mundagod</li>
              <li>Kuvempu University, Shankaraghatta, Shivamogga</li>
              <li>Jungle Lodges and Resorts, Gokarna</li>
              <li>Banana County Resorts, Yellapura</li>
              <li>Shri Chtrapura Matha, Shirali, Bhatkala</li>
              <li>Kitturu Chennamma Park, Kumata</li>
              <li>Hotel Samrat, Sirsi</li>
              <li>Loseling Clinic, Tibetan Colony, Mundagod</li>
              <li>TSS Hospital, Sirsi</li>
              <li>ISKON Temple, Rayapura, Hubballi</li>
              <li>Yashodan Lawns, Hotel Denissons, Hubballi</li>
              <li>Saptagiri Farmlands, Hubballi</li>
              <li>HESCOM Divisional Office, Hubballi</li>
              <li>Metcut Toolings Pvt. Ltd. Dharwad</li>
              <li>Shrikrishna Milks, Kirawatti, Yellapura</li>
              <li>Hangyo Ice-cream Factory, Kirawatti</li>
              <li>Palm Meadows Hubballi</li>
              <li>GMR Sugar Industries Campus, Haliyal</li>
              <li>GMR Sugar Industries, Ramadurga</li>
              <li>KEN Agritech, Hubballi</li>
              <li>Kali River Garden, Karwar</li>
              <li>Children Park, Karwar</li>
              <li>Warship Museum Garden, Karwar</li>
              <li>
                Many Residential and Public Gardens at Bengaluru, Davanagere, Dharwad, Sirsi,
                Gokarna, Murudeshwara etc.
              </li>
            </ul>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default Landscape;
