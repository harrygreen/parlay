import React, { Component } from 'react';
import { Link } from 'react-router'

const Nav = React.createClass({
	render() {
		return (
		<nav className="nav">
			<Link to="/queue" className="nav__item">1. Queue</Link>
			<Link to="/translating" className="nav__item">2. Translating</Link>
			<Link to="/review" className="nav__item">3. Review</Link>
			<Link to="/done" className="nav__item">4. Done</Link>
		</nav>)
	}
})


export default Nav;