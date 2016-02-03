import React from 'react';
import api from '../utils/api';
import { fetchPosts } from '../actions/GlobalActions';

const BentoTableMixin = {

	propTypes: {
		edition: React.PropTypes.string.isRequired,
	},

	componentDidMount() {

		const { dispatch } = this.props;

		dispatch(fetchPosts({
			edition: this.props.edition,
			type: this.props.type
		}))
	}
}

export default BentoTableMixin;