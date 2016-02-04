import React from 'react';
import { Link } from 'react-router'

const LoggedOutModal = React.createClass({
  render() {
    return (
    <div className="modal">
      <div className="modal__content xs-mt0 sm-mt6 xs-col-12 sm-col-9 md-col-7 lg-col-5">
        <a className="modal__close" href="javascript:">
          <svg viewBox="0 0 512 512" className="modal__close-icon" xmlns="http://www.w3.org/2000/svg">
               <path d="M133.874 227.048L19.198 108.276C-6.4 82.68-6.4 44.796 19.198 19.198c25.597-25.597 63.48-25.597 89.078 0l114.676 114.676L337.628 19.198c25.597-25.597 68.09-25.597 93.174 0 25.597 25.597 25.597 68.09 0 93.174L316.126 227.048l114.676 114.676c25.597 25.597 25.597 63.48 0 89.078-25.597 25.597-63.48 25.597-89.078 0L227.048 316.126 112.372 430.802c-25.597 25.597-68.09 25.597-93.174 0-25.597-25.597-25.597-68.09 0-93.174l114.676-110.58z"/>
              </svg>
        </a>

          <h2 className="text-2 bold">Attention!</h2>
          <p className="xs-mb2">You are logged out of <a href="/">buzzfeed.com</a></p>

          <div className="clearfix xs-text-right">
            <Link className="button button--primary xs-block xs-col-12 sm-inline-block sm-width-auto" to="/">Go to buzzfeed.com!</Link>
          </div>
      </div>
      </div>
    )
  }
})

export default LoggedOutModal;



