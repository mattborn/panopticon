
var π = require('./constants');
var Firebase = require('firebase');
var React = require('react/addons');
var ReactFireMixin = require('reactfire');
var Router = require('react-router');

var {Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} = Router;

var Login = require('./components/login');
var Register = require('./components/register');
var Splash = require('./components/splash');
var Items = require('./components/items');
var NotFound = require('./components/not-found');

var firebase = new Firebase(π.FIREBASE_URL);

var App = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      user: null
    };
  },
  componentWillMount: function () {
    var el = this;
    el.props.firebase.onAuth(function (authData) {
      el.setState({user: authData});
    });
  },
  _logout: function () {
    this.props.firebase.unauth();
  },
  render: function() {
    console.log('App:render', this.state);
    return (
      <div className="app">
        <RouteHandler {...this.props} {...this.state} />
        {this.state.user && <button onClick={this._logout}>Sign out</button>}
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" handler={Login} />
    <Route name="register" handler={Register} />
    <Route name="items" handler={Items} />
    <DefaultRoute handler={Splash} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler firebase={firebase} />, document.body);
});
