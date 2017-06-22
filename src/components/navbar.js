import React, {Component} from 'react';

class Navbar extends Component {
  render () {
    return (
      <section class="nav">
        <div class="row">
          <div class="col s1 left">
            <img class="responsive-img icon-home" src="http://i.imgur.com/9UNGohh.png?1" alt="red thing">
          </div>
          <div class="icon-settings col s2 right">
            <i class="material-icons medium right">settings</i>
          </div>
        </div>
      </section>
    )
  }
}

export default Navbar;
