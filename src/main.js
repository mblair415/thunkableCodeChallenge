console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Project from './components/Project.js';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Project),
    document.getElementById('root')
  );
});
