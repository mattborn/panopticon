
var π = require('../constants');
var Firebase = require('firebase');
var React = require('react/addons');
var ReactFireMixin = require('reactfire');

var Auth = require('../mixins/auth');

var Items = React.createClass({
  mixins: [ReactFireMixin, Auth],
  componentWillMount: function () {
    this.bindAsArray(new Firebase(π.FIREBASE_URL +'test'), 'test');
  },
  componentWillUnmount: function () {
    this.unbind('test');
  },
  render: function() {
    return (
      <div>Items</div>
    );
  }
});

module.exports = Items;
