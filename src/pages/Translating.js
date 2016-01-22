import React from 'react';
import { connect } from 'react-redux'

import FilterBar from '../components/FilterBar';
import BentoItems from '../components/BentoItems';
import BentoTableMixin from './BentoTableMixin';

const Candidates = React.createClass({

	mixins: [ BentoTableMixin ],

	getDefaultProps() {
		return {
			type: 'out_for_translation'
		}
	},

	render() {
		return (
			<div>
				<h2>Translating</h2>
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