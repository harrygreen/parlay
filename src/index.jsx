import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// VIEWS
import App from './pages/index'
import Candidates from './pages/Candidates'
import Translating from './pages/Translating'
import Returned from './pages/Returned'
import Ready from './pages/Ready'
import NotFound from './pages/NotFound'

// CSS
import '../node_modules/bf-solid/_lib/solid.scss';
import '../sass/bento.scss';


function logger({ getState }) {
  return next => action => {
    console.info('dispatching', action);
    const result = next(action);
    console.log('state after', getState());
    return result;
  };
}

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Candidates} />
				<Route path="candidates" component={Candidates} />
				<Route path="translating" component={Translating} />
				<Route path="returned" component={Returned} />
				<Route path="ready" component={Ready} />
				<Route path="*" component={NotFound} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('root'))