import React, {Component} from 'react';

class Sort extends Component {
  render () {
    return (
      <div className="col s6 sort row">
        <div className="col s6 sort-title">
          Sort by:
        </div>
        <div className="col s6 sort-dropdown right">
          dropdown
        </div>
      </div>
    )
  }
}

export default Sort;
