import React, {Component} from 'react';
import Search from './Search.js';
import Sort from './Sort.js';

class SearchSort extends Component {
  render () {
    return (
      <section class="search-sort row">
        <search />
        <sort />
      </section>
    )
  }
}

export default SearchSort;
