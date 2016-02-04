import React from 'react';
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import EditionSwitcher from '../components/EditionSwitcher';
import User from '../utils/User'
import LoggedOutModal from '../components/LoggedOutModal';

const App = React.createClass({

  getInitialState: function() {
    return {
      isLoggedIn: User.isLoggedIn(),
    };
  },

  render: function() {
    const { dispatch, edition } = this.props

    if (!this.state.isLoggedIn) {
      document.body.classList.add('js-show-modal')
    } else {
      // User.getACLs().then(function(data) {
      //   debugger;
      //   console.log(data);
      // })
    }

    return (
      <div>
        { this.state.isLoggedIn ? null : (<LoggedOutModal /> )}
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