import React from 'react';

const BentoItem = React.createClass({
	render() {
		return (
			<div>
				<h3>{this.props.item.name}</h3>
				<button className="button button--primary">Assign Translation</button>
				<a href="javascript:">Remove from Queue</a>
			</div>
		)
	}
});

export default BentoItem;