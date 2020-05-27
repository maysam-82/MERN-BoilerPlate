import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './Components/App';
import Welcome from './Components/Welcome';
import Signup from './Containers/Auth/Signup';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/signup" component={Signup} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
