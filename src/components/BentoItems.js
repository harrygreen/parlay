import React from 'react';
import BentoItem from './BentoItem';

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