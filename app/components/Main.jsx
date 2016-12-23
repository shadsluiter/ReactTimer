var React = require('react');
var Nav = require('Nav');



var Main = (props) => {
  return(
    <div>
      <Nav />
      <div className="row">
        <div className="borderMe column small-centered medium-6 small-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
