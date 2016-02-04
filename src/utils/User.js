// todo
// - trgger logged out modal from here

import cookie from 'cookie';
import XHR from './XHR';
import * as CONSTANTS from '../constants'

const _cookies = cookie.parse( document.cookie );

export default {

  isLoggedIn() {
    return !!_cookies.default_user;
  },

  getACLs() {

    let params = {
      action: 'load_limited_acls',
      rules: ['homepage_edit', 'queue_add', 'queue_edit']
    };

    let url = CONSTANTS.ACL_ENDPOINT;
    
    return API.get(url, params);//.then(function(response) { return JSON.parse(response.xhr.responseText) });
  }
}