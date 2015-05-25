
var π = require('../constants');
var Firebase = require('firebase');
var React = require('react/addons');
var ReactFireMixin = require('reactfire');

var Register = React.createClass({
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
      console.log('Register:_submit', arguments);
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
      <div className="register">
        <form className="register-form" onSubmit={this._submit}>
          <input className="register-email" placeholder="matt@example.com" ref="email" />
          <input className="register-password" ref="password" type="password" />
          <button className="register-submit" type="submit">Register</button>
          {error && <p className="register-error">{error}</p>}
        </form>
      </div>
    );
  }
});

module.exports = Register;
