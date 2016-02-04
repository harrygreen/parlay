import React from 'react';
import api from '../utils/api';
import { fetchPosts } from '../actions/GlobalActions';

const PostsMixin = {

	propTypes: {
		edition: React.PropTypes.string.isRequired,
	},

	componentDidMount() {

		const { dispatch } = this.props;

		dispatch(fetchPosts({
			language: this.props.edition,
			type: this.props.type
		}))
	}
}

export default PostsMixin;