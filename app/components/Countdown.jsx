var React = require('react');
var Clock = require('Clock');



var Countdown = React.createClass ({
  render: function() {
    return(
    <div>
      <div className="borderMe">
         <Clock totalSeconds= {129}/>
      </div>
    </div>);
  }
});


module.exports = Countdown;
