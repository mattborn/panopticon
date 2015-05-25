
var π = require('../constants');
var Firebase = require('firebase');
var React = require('react/addons');
var ReactFireMixin = require('reactfire');

var Login = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      error: null
    };
  },
  _submit: function (e) {
    e.preventDefault();
    var el = this;
    el.props.firebase.authWithPassword({
      email: el.refs.email.getDOMNode().value,
      password: el.refs.password.getDOMNode().value
    }, function (error, authData) {
      console.log('Login:_submit', arguments);
      if (error) {
        el.setState({error: error.message});
      } else {
        console.log('%cApp is already listening to auth changes.', 'color: #8cf');
      }
    });
  },
  render: function() {
    var error = this.state.error;
    return (
      <div className="login">
        <form className="login-form" onSubmit={this._submit}>
          <input className="login-email" placeholder="matt@example.com" ref="email" />
          <input className="login-password" ref="password" type="password" />
          <button className="login-submit" type="submit">Sign in</button>
          {error && <p className="login-error">{error}</p>}
        </form>
      </div>
    );
  }
});

module.exports = Login;
