
var π = require('../constants');
var Firebase = require('firebase');
var React = require('react/addons');
var ReactFireMixin = require('reactfire');

var Splash = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      response: null
    };
  },
  componentWillMount: function () {
    this.bindAsArray(new Firebase(π.FIREBASE_URL +'test'), 'test');
  },
  componentDidMount: function () {
    var self = this;
    $.get('http://localhost:1985/data', function (response) {
      self.setState({response: response});
    });
    // $.ajax({
    //   url: 'http://localhost:1985/data',
    //   data: {username: getUsernamefromfield()},
    //   success: function (response) {
    //   self.setState({response: response});
    // }});
  },
  componentWillUnmount: function () {
    this.unbind('test');
  },
  _submit: function (e) {
    e.preventDefault();
  },
  render: function() {
    console.log('Splash::render', {state: this.state});
    return (
      <div>Neato, gang. Got it. Here is your state: {this.state.response}</div>
    );
  }
});

module.exports = Splash;
