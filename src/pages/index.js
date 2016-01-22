import React from 'react';
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import EditionSwitcher from '../components/EditionSwitcher';
import auth from '../utils/auth'


const App = React.createClass({

  getInitialState: function() {
    return {
      loggedIn: auth.loggedIn(),
    };
  },

  componentWillMount: function() {
    auth.onChange = this._updateAuth
    auth.login()
  },

  _updateAuth: function(loggedIn) {
   this.setState({
     loggedIn: loggedIn
   })
  },

  render: function() {
    const { dispatch, edition } = this.props
    return (
      <div>
        {this.state.loggedIn ? null : (<p>You are logged out</p> )}
      	<h1>Bento ({this.props.edition} edition)</h1>
        <EditionSwitcher edition={this.props.edition} dispatch={dispatch} />
        <Nav />
        {this.props.children}
      </div>
    );
  }
});

export default connect(state => ({
  edition: state.edition,
}))(App)