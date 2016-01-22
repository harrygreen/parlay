import React from 'react';
import api from '../utils/api';
import { fetchPosts } from '../actions/globalActions';

const BentoTableMixin = {

	propTypes: {
		edition: React.PropTypes.string.isRequired,
	},

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchPosts({
			edition: this.props.edition,
			post_type: this.props.type
		}))
	}
}

export default BentoTableMixin;