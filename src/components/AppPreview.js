import React, {Component} from 'react';
import IndividualPreview from './IndividualPreview';

let currentProjects = [ {
    name: "Demo App 2",
    edited: "Last edit: 10-09-15",
    key: 2
  } , {
    name: "Demo App 3",
    edited: "Last edit: 10-09-15",
    key: 3
  } , {
    name: "Demo App 4",
    edited: "Last edit: 10-09-15",
    key: 4
  }
]

let populatePreviews = currentProjects.map ( (x) => {
  return <IndividualPreview data={x} />
})

class AppPreview extends Component {
  render () {
    return (
      <section className="app-card-container row">
        <div className="col s6 m3 l2 new-app-card">
          <img className="responsive-img new-app-button temp center" src="http://i.imgur.com/CrFIZkX.png?1" alt="fake button" />
          <div className="new-app-title">
            Create new app
          </div>
        </div>
        <div className="">
          {populatePreviews}
        </div>
      </section>
    )
  }
}

export default AppPreview;
