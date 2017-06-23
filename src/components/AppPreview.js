import React, {Component} from 'react';
import IndividualPreview from './IndividualPreview';

class AppPreview extends Component {
  render () {
    return (
      <section class="app-card-container">
        <div class="col s6 m3 l2 new-app-card card">
          <img class="responsive-img new-app-button temp center" src="http://i.imgur.com/CrFIZkX.png?1" alt="fake button">
          <div class="new-app-title">
            Create new app
          </div>
        </div>
        <div class="col s6 m3 l2 app-card card">
          <IndividualPreview />
        </div>
      </section>
    )
  }
}

export default AppPreview;
