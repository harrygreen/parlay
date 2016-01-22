import React from 'react';
import { connect } from 'react-redux'

import FilterBar from '../components/FilterBar';
import BentoItems from '../components/BentoItems';
import BentoTableMixin from './BentoTableMixin';

const Candidates = React.createClass({

	mixins: [ BentoTableMixin ],

	getDefaultProps() {
		return {
			type: 'translation_candidates'
		}
	},

	render() {
		return (
			<div>
				<h2>Ready</h2>
				<FilterBar />
				<BentoItems posts={this.props.posts} />
			</div>
		);
	}
});

export default connect(state => ({
	edition: state.edition,
	posts: state.receivePosts.posts
}))(Candidates)