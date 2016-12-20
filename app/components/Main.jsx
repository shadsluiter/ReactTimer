var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
  return(
    <div>

        <Nav />
        <p>Main rendered</p>
          {props.children}

    </div>
  );
}

module.exports = Main;
