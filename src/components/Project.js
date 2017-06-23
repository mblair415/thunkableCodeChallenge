import React, {Component} from 'react';
import Navbar from './Navbar.js';
import SearchSort from './SearchSort';
import AppPreview from './AppPreview';

class Project extends Component {
  render () {
    return (
      <div className="full-screen">
        <Navbar />
        <SearchSort />
        <AppPreview />
      </div>
    )
  }
}

export default Project;
