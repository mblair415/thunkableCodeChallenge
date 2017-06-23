import React, {Component} from 'react';

class Navbar extends Component {
  render () {
    return (
      <section className="nav">
        <div className="row">
          <div className="col s1 left">
            <img className="responsive-img icon-home" src="http://i.imgur.com/9UNGohh.png?1" alt="red thing" />
          </div>
          <div className="icon-settings col s2 right">
            <i className="material-icons medium right">settings</i>
          </div>
        </div>
      </section>
    )
  }
}

export default Navbar;
