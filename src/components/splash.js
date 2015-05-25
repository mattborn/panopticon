
var π = require('../constants');
var Firebase = require('firebase');
var React = require('react/addons');
var ReactFireMixin = require('reactfire');

var Splash = React.createClass({
  mixins: [ReactFireMixin],
  componentWillMount: function () {
    this.bindAsArray(new Firebase(π.FIREBASE_URL +'test'), 'test');
  },
  componentWillUnmount: function () {
    this.unbind('test');
  },
  _submit: function (e) {
    e.preventDefault();
  },
  render: function() {
    return (
      <div>Neato, gang.</div>
    );
  }
});

module.exports = Splash;
