import React from 'react';
import { Link } from 'react-router'

const Nav = React.createClass({
	render() {
		return (
		<nav className="nav">
			<Link to="/candidates" className="nav__item">1. Candidates</Link>
			<Link to="/translating" className="nav__item">2. Translating</Link>
			<Link to="/returned" className="nav__item">3. Returned</Link>
			<Link to="/ready" className="nav__item">4. Ready</Link>
			<Link to="/published">View Published Posts</Link>
		</nav>)
	}
})

export default Nav;