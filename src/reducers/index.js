import { combineReducers } from 'redux'
import * as CONSTANTS from '../constants'

function edition(state = 'de', action) {
	switch (action.type) {
		case CONSTANTS.SWITCH_EDITION:
			return action.id
		default:
			return state
	}
}


function posts(state = {}, action) {
	switch (action.type) {
		case CONSTANTS.RECEIVED_POSTS:
			return Object.assign({}, state, {
				type: action.post_type,
				posts: action.posts
			});
		default:
			return state;
	}
}

export default combineReducers({
	posts,
	edition
});
