import React, {Component} from 'react';

class IndividualPreview extends Component {
  render () {
    return (
      <div class="col s6 m3 l2 app-preview-card">
        <img class="responsive-img temp geometric-icon" src="http://i.imgur.com/q2h0VH1.png?1" alt="fake beaver icon geometric background">
        <div class="app-title">
          state.props.name
        </div>
        <div class="edit-timestamp">
          state.props.edited
        </div>
        <div class="edit-app-icons row">
          <img class="delete-icon" src="http://i.imgur.com/XQtE9DC.png?1" alt="delete icon">
          <img class="download-icon" src="http://i.imgur.com/J5sAPuR.png?1" alt="download icon">
        </div>
      </div>
    )
  }
}

export default IndividualPreview;
