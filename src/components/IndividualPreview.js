import React, {Component} from 'react';

class IndividualPreview extends Component {
  render () {
    return (
      <div className="col s6 m3 l2 app-preview-card">
        <img className="responsive-img temp geometric-icon" src="http://i.imgur.com/q2h0VH1.png?1" alt="fake beaver icon geometric background" />
        <div className="app-title">
          {this.props.data.name}
        </div>
        <div className="edit-timestamp">
          {this.props.data.edited}
        </div>
        <div className="edit-app-icons row">
          <img className="delete-icon" src="http://i.imgur.com/XQtE9DC.png?1" alt="delete icon" />
          <img className="download-icon" src="http://i.imgur.com/J5sAPuR.png?1" alt="download icon" />
        </div>
      </div>
    )
  }
}

export default IndividualPreview;
