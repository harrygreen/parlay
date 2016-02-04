import * as CONSTANTS from '../constants'
import XHR from '../utils/XHR';

export function switchEdition(id) {
  return {
    type: CONSTANTS.SWITCH_EDITION,
    id
  };
}

export function switchEditionParent(id) {
  return (dispatch, getState) => {
    dispatch( switchEdition(id) );
    dispatch( fetchPosts( Object.assign(getState().posts, { language: id }) ) );
  }
}

export function receivePosts(json, post_type) {
  return {
    type: CONSTANTS.RECEIVED_POSTS,
    post_type: post_type,
    posts: json.content
  };
}
 
export function fetchPosts(params) {
  return (dispatch, getState) => {

    Object.assign({}, getState().posts, params)

    return api.loadContent(Object.assign({}, getState().posts, params), function(json) {
      dispatch( receivePosts(json, params.type ) );
    });
  }
}

// function fetchPostsIfNeeded(reddit) {
//   return (dispatch, getState) => {
//     if (!getState().postsByReddit[reddit]) {
//       return dispatch(fetchPosts(reddit));
//     }
//   };
