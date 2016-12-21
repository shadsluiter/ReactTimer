var React = require('react');
var Nav = require('Nav');



var Main = (props) => {
  return(
    <div>
      <div className="borderMe">
        <Nav />
        <p>Main rendered</p>
    
          {props.children}
        </div>
    </div>
  );
}

module.exports = Main;
