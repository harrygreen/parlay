import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, NotFoundRoute, Link } from 'react-router'

import Base from './components/Base'
import Queue from './components/Queue'
import Translating from './components/Translating'
import Review from './components/Review'
import Done from './components/Done'

import NotFound from './components/NotFound'

NotFoundRoute

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Base}>
			<IndexRoute component={Queue} />
			<Route path="queue" component={Queue} />
			<Route path="translating" component={Translating} />
			<Route path="review" component={Review} />
			<Route path="done" component={Done} />
			<Route path="*" component={NotFound} />
			{/* <Route path="achive" component={Archive} /> */}
		</Route>
	</Router>
), document.getElementById('root'))


/*

TranslatorApp
	Search
	TranslatorTable
		TranslatorFilters
		TranslatorItem


translate.buzzfeed.com
/				- root, redirects to /queue
/queue			- candidates, aka assignment queue
/translations	- in translation, any posts out with gengo
/review			- ready for review, list of content returned from service(s) or freelancer
?/review-detail	- ?
/done 			- Ready to Publish / Approved / Done, list of content approved by user in detail view of state 3
/archive 		-
*/