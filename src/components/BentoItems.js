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

const BentoItems = React.createClass({

	propTypes: {
		posts: React.PropTypes.array
	},

	render() {

		let items = [];

		if (this.props.posts) {
			this.props.posts.forEach(function(item, i) {
				items.push(<BentoItem item={item} key={i} />);
			});
		}

		return (
			<div>
				{items}
			</div>
		)
	}
});

export default BentoItems;