import React, {Component} from 'react';
import Search from './Search.js';
import Sort from './Sort.js';

class SearchSort extends Component {
  render () {
    return (
      <section className="search-sort row">
        <Search />
        <Sort />
      </section>
    )
  }
}

export default SearchSort;
