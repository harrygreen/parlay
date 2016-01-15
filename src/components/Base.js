import React, { Component } from 'react';
import Search from './Search';
import Nav from './Nav'
import EditionSwitcher from './EditionSwitcher';
import auth from '../utils/auth'


const Base = React.createClass({

  componentWillMount: function() {
    auth.onChange = this.updateAuth
    auth.login()
  },

  getInitialState: function() {
    return {
      loggedIn: auth.loggedIn(),
      edition: 'ja',
      searchText: ''
    };
  },

  updateAuth: function(loggedIn) {
   this.setState({
     loggedIn: loggedIn
   })
  },

  handleUserInput: function(params) {
    this.setState({
      searchText: params.searchText,
      edition: params.edition
    });
  },

  render: function() {
    return (
      <div>
      {this.state.loggedIn ? null : (
        <p>You are logged out</p>
      )}
      	<h1>Translator</h1>
        <EditionSwitcher
          edition={this.state.edition}
          onUserInput={this.handleUserInput}
        />
        <Search
          searchText={this.state.searchText}
          onUserInput={this.handleUserInput}
        />
        <Nav />
        {this.props.children}
      </div>
    );
  }
});

export default Base;