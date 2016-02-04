import React from 'react';
import { connect } from 'react-redux'

import FilterBar from '../components/FilterBar';
import BentoItems from '../components/BentoItems';
import PostsMixin from './PostsMixin';

const Candidates = React.createClass({

	mixins: [ PostsMixin ],

	getDefaultProps() {
		return {
			type: 'unpublished'
		}
	},

	render() {
		return (
			<div>
				<h2>Returned</h2>
				<BentoItems posts={this.props.posts} />
			</div>
		);
	}
});

export default connect(state => ({
	edition: state.edition,
	posts: state.posts.posts
}))(Candidates)