import * as CONSTANTS from '../constants'
import api from '../utils/api';

export function switchEdition(id) {
  return {
    type: CONSTANTS.SWITCH_EDITION,
    id
  };
}

export function receivePosts(json, post_type) {
  return {
    type: CONSTANTS.RECEIVED_POSTS,
    post_type: post_type,
    posts: json.content
  };
}
 
export function fetchPosts(params) {
	return dispatch => {
		return api.loadContent({
				language: params.edition,
				type: params.type
			}, function(json) {
			dispatch(receivePosts(json, params.type   ));
		});
	}
}