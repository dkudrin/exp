require('./main.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import page from './page'
import photo from './photo'
import work from './work'

let Man = React.createClass({
  render: function() {
    return (
      <div className="man">
        <img src="img/client1.jpg" alt="..." className="img-circle" />
      </div>
    );
  }
});


let App = React.createClass({
  render: () => {
    return (
      <div className="app">
        <Man />
      </div>
    );
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('app_container')
);